"use server";
// import { Course } from "@/lib/zodSchema";
import { prisma } from "@/lib/db";
import { isAuthorized } from "@/lib/isAuthorized";
import { Course } from "@/lib/zodSchema";

export async function createCourses(data: Course) {
  const teacher = await isAuthorized("teacher");
  if (!teacher) {
    throw new Error("Unauthorized: Teacher ID is undefined");
  }
  try {
    const lesson = await prisma.course.create({
      data: {
        title:data.title,
        description:data.description,
        teacherId:teacher,
    }

  );
    return lesson;
  } catch (error) {
    console.error("Error creating lesson:", error);
    throw new Error("Failed to create lesson");
  }
}

export async function updateCourse(data: Course, courseId: string) {
  const teacher = await isAuthorized("teacher");
  if (!teacher) {
    throw new Error("Unauthorized: Teacher ID is undefined");
  }
  try {
    const existingCourse = await prisma.course.findUnique({
      where: { id: courseId },
      // select: { courseId: true },
    });
    if (!existingCourse) {
      throw new Error("Lesson not found");
    }
    const course = await prisma.course.findUnique({
      where: { id: existingCourse.id  ,teacherId: teacher},
      select: { teacherId: true },
    });
    if (!course) {
      throw new Error("Course not found");
    }
    if (course.teacherId !== teacher) {
      throw new Error("Unauthorized: You can only update your own lesson");
    }
    const lesson = await prisma.course.update({
      where: { id: courseId },
      data: {
        title: data.title,
        description:data.description,
        teacher:teacher
      },
    });
    return lesson;
  } catch (error) {
    console.error("Error updating lesson:", error);
    throw new Error("Failed to update lesson");
  }
}

export async function deleteCourse(lessonId: string) {
  const teacher = await isAuthorized("teacher");
  if (!teacher) {
    throw new Error("Unauthorized: Teacher ID is undefined");
  }
  try {
    const existingLesson = await prisma.course.findUnique({
      where: { id: lessonId },
      // select: { courseId: true },
    });
    if (!existingLesson) {
      throw new Error("Lesson not found");
    }
    const course = await prisma.course.findUnique({
      where: { id: existingLesson.description },
      select: { teacherId: true },
    });
    if (!course) {
      throw new Error("Course not found");
    }
    if (course.teacherId !== teacher) {
      throw new Error("Unauthorized: You can only update your own lesson");
    }
    await prisma.lesson.delete({
      where: { id: lessonId },
    });
    return { success: true };
  } catch (error) {
    console.error("Error deleting lesson:", error);
    throw new Error("Failed to delete lesson");
  }
}

export async function getLessonsByCourseId(courseId: string) {
  const teacher = await isAuthorized("teacher");
  try {
    const lessons = await prisma.lesson.findMany({
      where: {
        courseId,
        course: {
          teacherId: teacher, // Check if the course belongs to the teacher
        },
      },
    });
    return lessons;
  } catch (error) {
    console.error("Error fetching lessons:", error);
    throw new Error("Failed to fetch lessons");
  }
}
