import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "./db";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    id?: string | undefined;
    phone?: string | null | undefined;
    role?: string | null | undefined;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    phone: string;
    role?: string | null;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        phone: { label: "Phone", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize({ phone, password }) {
        if (!phone || !password)
          throw new Error("Phone and password required.");

        const user = await prisma.user.findFirst({
          where: { phone: phone as string },
        });

        if (!user) throw new Error("Invalid user.");

        const valid = await bcrypt.compare(password as string, user.password);
        if (!valid) throw new Error("Invalid password.");

        return { id: user.id, phone: user.phone, role: user.role ?? null };
      },
    }),
  ],

  pages: {
    signIn: "/login",
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
