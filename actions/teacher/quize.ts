"use server";
import { prisma } from "@/lib/db";
import { isAuthorized } from "@/lib/isAuthorized";
import { Quiz } from "@/lib/zodSchema";

export async function createQuiz(data: Quiz, lessonId: string) {
  const teacherId = await isAuthorized("teacher");
  if (!teacherId) {
    throw new Error("Unauthorized");
  }
  try {
    const quiz = await prisma.quiz.create({
      data: {
        title: data.title,
        lessonId: lessonId,
      },
    });
    return quiz;
  } catch (error) {
    console.error("Error creating quiz:", error);
    throw new Error("Failed to create quiz");
  }
}

export async function updateQuiz(data: Quiz, quizId: string) {
  const teacherId = await isAuthorized("teacher");
  if (!teacherId) {
    throw new Error("Unauthorized");
  }
  try {
    const quiz = await prisma.quiz.update({
      where: { id: quizId },
      data: {
        title: data.title,
      },
    });
    return quiz;
  } catch (error) {
    console.error("Error updating quiz:", error);
    throw new Error("Failed to update quiz");
  }
}

export async function deleteQuiz(quizId: string) {
  const teacherId = await isAuthorized("teacher");
  if (!teacherId) {
    throw new Error("Unauthorized");
  }
  try {
    const quiz = await prisma.quiz.delete({
      where: { id: quizId },
    });
    return quiz;
  } catch (error) {
    console.error("Error deleting quiz:", error);
    throw new Error("Failed to delete quiz");
  }
}

export async function getQuizzes(lessonId: string) {
  const teacherId = await isAuthorized("teacher");
  if (!teacherId) {
    throw new Error("Unauthorized");
  }
    try {
        const quizzes = await prisma.quiz.findMany({
        where: { lessonId: lessonId },
        });
        return quizzes;
    } catch (error) {
        console.error("Error fetching quizzes:", error);
        throw new Error("Failed to fetch quizzes");
    }
}