import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./db";
import { DefaultJWT } from "next-auth/jwt";
import { Session } from "next-auth";
import { loginSchema } from "@/lib/zodSchema";

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
        phoneno: { label: "phoneno", type: "text" },
        passcode: { label: "passcode", type: "number" },
      },
      async authorize(credentials) {
        
        const { phoneno, passcode } = await loginSchema.parseAsync(credentials);
        let role = null;
        let user = await prisma.student.findFirst({
          where: { phoneno },
          select: { id: true, phoneno: true, passcode: true },
        });

        if (user) {
          role = "student";
        } else {
          user = await prisma.teacher.findFirst({
            where: { phoneno },
            select: { id: true, phoneno: true, passcode: true },
          });

          if (user) {
            role = "teacher";
          } else {
            user = await prisma.admin.findFirst({
              where: { phoneno },
              select: { id: true, phoneno: true, passcode: true },
            });

            if (user) {
              role = "admin";
            }
          }
        }
        // console.log("meeeeeee11111");

        if (!user) throw new Error("Invalid phoneno");

        console.log("DB passcode:", user.passcode);
        console.log("Input passcode:", passcode);
        if (!(passcode == user.passcode)) {
          console.log("Invalid password.");
          throw new Error("Invalid password.");
        }

        return { id: user.id, phoneno: user.phoneno, role: role ?? null };
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
        token.phoneno = user.phoneno ?? "";
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
});
