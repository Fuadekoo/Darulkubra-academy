import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "./db";
import { DefaultJWT } from "next-auth/jwt";
import { Session } from "next-auth";

declare module "next-auth" {
  interface User {
    id?: string | undefined;
    phone?: string | null | undefined;
    passcode?: string | undefined;
    role?: string | null | undefined; // Added role
  }
  interface Session {
    user: {
      id?: string;
      phone?: string | null;
      role?: string | null;
      // ...other properties
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    phone: string;
    role?: string | null; // Added role
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        phone: { label: "Phone", type: "text" },
        passcode: { label: "passcode", type: "passcode" },
      },
      async authorize(credentials) {
        const { phone, passcode } = credentials || {};
        if (!phone || !passcode)
          throw new Error("Phone and password required.");

        let user = await prisma.student.findFirst({
          where: { phone: phone as string },
          select: { id: true, phone: true, password: true, role: true },
        });

        if (user) {
          user.role = "student";
        } else {
          user = await prisma.teacher.findFirst({
            where: { phone: phone as string },
            select: { id: true, phone: true, password: true, role: true },
          });

          if (user) {
            user.role = "teacher";
          } else {
            user = await prisma.admin.findFirst({
              where: { phone: phone as string },
              select: { id: true, phone: true, password: true, role: true },
            });

            if (user) {
              user.role = "admin";
            }
          }
        }

        if (!user) throw new Error("Invalid user.");

        const valid = await bcrypt.compare(passcode as string, user.password);
        if (!valid) throw new Error("Invalid password.");

        return { id: user.id, phone: user.phone, role: user.role ?? null };
      },
    }),
  ],

  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id ?? "";
        token.phone = user.phone ?? "";
        token.role = user.role ?? null;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.phone = token.phone;
      session.user.role = token.role;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  cookies: {
    sessionToken: {
      name: "next-auth.session-token",
      options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      },
    },
  },
});
