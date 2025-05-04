"use server";
import { prisma } from "@/lib/db";
import { isAuthorized } from "@/lib/isAuthorized";
import { TQuestion } from "@/lib/zodSchema";

export async function createQuestion(
  quizId: string,
  { question, options, answers }: TQuestion
) {
  const teacherId = await isAuthorized("teacher");
  if (!teacherId) {
    throw new Error("Unauthorized");
  }

  // Ensure the quiz belongs to the teacher
  const quiz = await prisma.quiz.findUnique({
    where: { id: quizId },
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

  if (!quiz || quiz.lesson.course.teacherId !== teacherId) {
    throw new Error(
      "Unauthorized: You can only add questions to your own quiz"
    );
  }

  // 1. Create the question and its options
  const newQuestion = await prisma.question.create({
    data: {
      quizId,
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

export async function getQuestions(quizId: string) {
  const teacherId = await isAuthorized("teacher");
  if (!teacherId) {
    throw new Error("Unauthorized");
  }

  try {
    // check if quiz belongs to teacher
    const quiz = await prisma.quiz.findUnique({
      where: { id: quizId },
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
    if (!quiz || quiz.lesson.course.teacherId !== teacherId) {
      throw new Error(
        "Unauthorized: You can only get questions from your own quiz"
      );
    }

    // get questions
    const questions = await prisma.question.findMany({
      where: { quizId },
      select: {
        id: true,
        quizId: true,
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
        quiz: {
          select: {
            lesson: {
              select: {
                course: {
                  select: { teacherId: true },
                },
              },
            },
          },
        },
      },
    });
    if (!question || question.quiz.lesson.course.teacherId !== teacherId) {
      throw new Error(
        "Unauthorized: You can only delete questions from your own quiz"
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
