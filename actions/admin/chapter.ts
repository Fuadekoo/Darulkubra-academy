"use server";
import { prisma } from "@/lib/db";

export async function getchapter(courseId: string) {
  try {
    const chapters = await prisma.chapter.findMany({
      where: { courseId: courseId },
      include: {
        course: true,
      },
      orderBy: { position: "asc" },
    });
    return chapters;
  } catch (error) {
    console.error("Error fetching chapters:", error);
    throw error;
  }
}

export async function createChapter(courseId: string) {
  try {
    const newChapter = await prisma.chapter.create({
      data: {
        courseId: courseId,
      },
    });
    return newChapter;
  } catch (error) {
    console.error("Error creating chapter:", error);
    throw error;
  }
}

export async function updateChapter(chapterId: string) {
  try {
    const updatedChapter = await prisma.chapter.update({
      where: { id: chapterId },
      data: {
        // Add your updated chapter data here
      },
    });
    return updatedChapter;
  } catch (error) {
    console.error("Error updating chapter:", error);
    throw error;
  }
}

export async function deleteChapter(chapterId: string) {
  try {
    const deletedChapter = await prisma.chapter.delete({
      where: { id: chapterId },
    });
    return deletedChapter;
  } catch (error) {
    console.error("Error deleting chapter:", error);
    throw error;
  }
}
export async function getChapterbyId(chapterId: string) {
  try {
    const chapter = await prisma.chapter.findUnique({
      where: { id: chapterId },
    });
    return chapter;
  } catch (error) {
    console.error("Error fetching chapter by ID:", error);
    throw error;
  }
}
