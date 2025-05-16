"use server";
import { prisma } from "@/lib/db";

export async function getcourse(packageId: string) {
  try {
    const courses = await prisma.course.findMany({
      where: { packageId: packageId },
      include: {
        package: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: { order: "asc" },
    });
    return courses;
  } catch (error) {
    console.error("Error fetching course data:", error);
    throw error;
  }
}

export async function getCoursebyId(courseId: string) {
  try {
    const course = await prisma.course.findUnique({
      where: { id: courseId },
    });
    return course;
  } catch (error) {
    console.error("Error fetching course by ID:", error);
    throw error;
  }
}

export async function createCourse(packageId: string) {
  try {
    const newCourse = await prisma.course.create({
      data: {
        packageId: packageId,
      },
    });
    return newCourse;
  } catch (error) {
    console.error("Error creating course:", error);
    throw error;
  }
}

export async function updateCourse(courseId: string) {
  try {
    const updatedCourse = await prisma.course.update({
      where: { id: courseId },
      data: {
        // Add your updated course data here
      },
    });
    return updatedCourse;
  } catch (error) {
    console.error("Error updating course:", error);
    throw error;
  }
}

export async function deleteCourse(courseId: string) {
  try {
    const deletedCourse = await prisma.course.delete({
      where: { id: courseId },
    });
    return deletedCourse;
  } catch (error) {
    console.error("Error deleting course:", error);
    throw error;
  }
}
