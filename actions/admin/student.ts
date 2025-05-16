"use server";
import { prisma } from "@/lib/db";

export async function getStudent() {
  try {
    const students = await prisma.wpos_wpdatatable_23.findMany({
      where: {
        status: { in: ["active", "notyet"] },
      },
      select: {
        wdt_ID: true,
        name: true,
        chat_id: true,
        phoneno: true,
        activePackage: {
          select: {
            name: true,
          },
        },
      },
    });
    return students;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
}

export async function getStudentById(studentId: number) {
  try {
    const student = await prisma.wpos_wpdatatable_23.findUnique({
      where: { wdt_ID: studentId },
    });
    return student;
  } catch (error) {
    console.error("Error fetching student by ID:", error);
    throw error;
  }
}

export async function updateStudentPackage(
  studentId: number,
  packageId: string
) {
  try {
    const updatedStudent = await prisma.wpos_wpdatatable_23.update({
      where: { wdt_ID: studentId },
      data: {
        subject: { set: packageId },
      },
    });
    return updatedStudent;
  } catch (error) {
    console.error("Error updating student package:", error);
    throw error;
  }
}
