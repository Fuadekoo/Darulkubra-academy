"use server";
import { prisma } from "@/lib/db";
import { isAuthorized } from "@/lib/isAuthorized";
import { Lesson } from "@/lib/zodSchema";

export async function getCourse() {
  //   const student = await isAuthorized("student");
  const allCourses = await prisma.course.findMany({
    select: {
      id: true,
      title: true,
      description: true,

      teacher: {
        select: {
          name: true,
        },
      },
    },
  });
  return allCourses;
}

export async function getCoursebyId(courseId: string) {
  const student = await isAuthorized("student");
  if (!student) {
    throw new Error("Unauthorized: Student ID is undefined");
  }
  try {
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      include: { lessons: true },
    });
    return course;
  } catch (error) {
    console.error("Error fetching course:", error);
    throw new Error("Failed to fetch course");
  }
}
