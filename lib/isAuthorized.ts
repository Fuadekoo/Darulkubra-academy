import { auth } from "@/lib/auth";
import { prisma } from "./db";

export async function isAuthorized(requiredRole: string): Promise<string> {
  const session = await auth();
  if (!session?.user) throw new Error("Unauthorized: No session user");

  const userId = session.user.id;

  switch (requiredRole) {
    case "admin": {
      const admin = await prisma.admin.findFirst({
        where: { id: userId },
        select: { id: true },
      });
      if (!admin) throw new Error("Unauthorized: Admin ID is undefined");
      return admin.id;
    }
    case "teacher": {
      const teacher = await prisma.teacher.findFirst({
        where: { id: userId },
        select: { id: true },
      });
      if (!teacher) throw new Error("Unauthorized: Teacher ID is undefined");
      return teacher.id;
    }
    case "student": {
      const student = await prisma.student.findFirst({
        where: { id: userId },
        select: { id: true },
      });
      if (!student) throw new Error("Unauthorized: Student ID is undefined");
      return student.id;
    }
    default:
      throw new Error("Unauthorized: Invalid role");
  }
}
