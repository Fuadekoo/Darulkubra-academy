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

export async function courseDetail(courseId: string) {
  const student = await isAuthorized("student");
  if (!student) {
    throw new Error("Unauthorized: Student ID is undefined");
  }
  try {
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      select: {
        id: true,
        title: true,
        description: true,
        teacher: {
          select: {
            id: true,
            name: true,
          },
        },
        lessons: {
          select: {
            id: true,
            title: true,
            videoUrl: true,
            order: true,
            question: {
              select: {
                id: true,
                question: true,
                questionOptions: {
                  select: {
                    id: true,
                    option: true,
                  },
                },
                questionAnswer: {
                  select: {
                    answerId: true,
                  },
                },
              },
            },
          },
          orderBy: { order: "asc" },
        },
      },
    });
    return course;
  } catch (error) {
    console.error("Error fetching course detail:", error);
    throw new Error("Failed to fetch course detail");
  }
}
