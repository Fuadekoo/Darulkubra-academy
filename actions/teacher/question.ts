"use server";
import { prisma } from "@/lib/db";
import { isAuthorized } from "@/lib/isAuthorized";
import { TQuestion } from "@/lib/zodSchema";

// Create a question for a lesson
export async function createQuestion(
  lessonId: string,
  { question, options, answers }: TQuestion
) {
  const teacherId = await isAuthorized("teacher");
  if (!teacherId) {
    throw new Error("Unauthorized");
  }

  // Ensure the lesson belongs to the teacher
  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    select: {
      course: {
        select: { teacherId: true },
      },
    },
  });

  if (!lesson || lesson.course.teacherId !== teacherId) {
    throw new Error(
      "Unauthorized: You can only add questions to your own lesson"
    );
  }

  // 1. Create the question and its options
  const newQuestion = await prisma.question.create({
    data: {
      lessonId,
      question,
      questionOptions: {
        createMany: {
          data: options.map((option) => ({ option })),
        },
      },
    },
    include: {
      questionOptions: true,
    },
  });

  // 2. Find the created options that match the answers
  const createdOptions = await prisma.questionOption.findMany({
    where: {
      questionId: newQuestion.id,
      option: { in: answers },
    },
  });

  // 3. Create the questionAnswer records
  await prisma.questionAnswer.createMany({
    data: createdOptions.map((option) => ({
      questionId: newQuestion.id,
      answerId: option.id,
    })),
  });

  return newQuestion;
}

// Get all questions for a lesson
export async function getQuestions(lessonId: string) {
  const teacherId = await isAuthorized("teacher");
  if (!teacherId) {
    throw new Error("Unauthorized");
  }

  try {
    // check if lesson belongs to teacher
    const lesson = await prisma.lesson.findUnique({
      where: { id: lessonId },
      select: {
        course: {
          select: { teacherId: true },
        },
      },
    });
    if (!lesson || lesson.course.teacherId !== teacherId) {
      throw new Error(
        "Unauthorized: You can only get questions from your own lesson"
      );
    }

    // get questions
    const questions = await prisma.question.findMany({
      where: { lessonId },
      select: {
        id: true,
        lessonId: true,
        question: true,
        questionOptions: { select: { id: true, option: true } },
        questionAnswer: { select: { answerId: true } },
      },
    });
    return questions;
  } catch (error) {
    console.error("Error getting questions:", error);
    throw new Error("Failed to get questions");
  }
}

// Delete a question (only if the lesson belongs to the teacher)
export async function deleteQuestion(id: string) {
  const teacherId = await isAuthorized("teacher");
  if (!teacherId) {
    throw new Error("Unauthorized");
  }
  try {
    // check if question belongs to teacher
    const question = await prisma.question.findUnique({
      where: { id },
      select: {
        lesson: {
          select: {
            course: {
              select: { teacherId: true },
            },
          },
        },
      },
    });
    if (!question || question.lesson.course.teacherId !== teacherId) {
      throw new Error(
        "Unauthorized: You can only delete questions from your own lesson"
      );
    }

    // delete question
    const deletedQuestion = await prisma.question.delete({
      where: { id },
    });
    return deletedQuestion;
  } catch (error) {
    console.error("Error deleting question:", error);
    throw new Error("Failed to delete question");
  }
}
