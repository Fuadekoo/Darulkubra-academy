import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "./db";
import { DefaultJWT } from "next-auth/jwt";
import { Session } from "next-auth";

declare module "next-auth" {
  interface User {
    id?: string | undefined;
    phoneno?: string | null | undefined;
    passcode?: string | undefined;
    role?: string | null | undefined; // Added role
  }
  interface Session {
    user: {
      id?: string;
      phoneno?: string | null;
      role?: string | null;
      // ...other properties
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    phoneno: string;
    role?: string | null; // Added role
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        phoneno: { label: "Phone", type: "text" },
        passcode: { label: "passcode", type: "passcode" },
      },
      async authorize(credentials) {
        const { phoneno, passcode } = credentials || {};
        if (!phoneno || !passcode)
          throw new Error("Phone and password required.");
        let role = null;

        let user = await prisma.student.findFirst({
          where: { phoneno: phoneno as string },
          select: { id: true, phoneno: true, passcode: true },
        });

        if (user) {
          role = "student";
        } else {
          user = await prisma.teacher.findFirst({
            where: { phoneno: phoneno as string },
            select: { id: true, phoneno: true, passcode: true },
          });

          if (user) {
            role = "teacher";
          } else {
            user = await prisma.admin.findFirst({
              where: { phoneno: phoneno as string },
              select: { id: true, phoneno: true, passcode: true },
            });

            if (user) {
              role = "admin";
            }
          }
        }

        if (!user) throw new Error("Invalid user.");

        const valid = await bcrypt.compare(passcode as string, user.passcode);
        if (!valid) throw new Error("Invalid password.");

        return { id: user.id, phone: user.phoneno, role: role ?? null };
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
        token.phone = user.phoneno ?? "";
        token.role = user.role ?? null;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.phoneno = token.phoneno;
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
