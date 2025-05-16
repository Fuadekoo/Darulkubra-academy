"use server";
import { prisma } from "@/lib/db";

export async function getQuestion(chapterId:string) {
  try {
    const questions = await prisma.question.findMany({
      where: { chapterId: chapterId },
      
    });
    return questions;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
}


export async function createQuestion(chapterId:string) {
    try {
        const newQuestion = await prisma.question.create({
        data: {
            chapterId: chapterId,
        },
        });
        return newQuestion;
    } catch (error) {
        console.error("Error creating question:", error);
        throw error;
    }
}

export async function updateQuestion(questionId:string) {
    try {
        const updatedQuestion = await prisma.question.update({
        where: { id: questionId },
        data: {
            // Add your updated question data here
        },
        });
        return updatedQuestion;
    } catch (error) {
        console.error("Error updating question:", error);
        throw error;
    }
}

export async function deleteQuestion(questionId:string) {
    try {
        const deletedQuestion = await prisma.question.delete({
        where: { id: questionId },
        });
        return deletedQuestion;
    } catch (error) {
        console.error("Error deleting question:", error);
        throw error;
    }
}
export async function getQuestionbyId(questionId:string) {
    try {
        const question = await prisma.question.findUnique({
        where: { id: questionId },
        });
        return question;
    } catch (error) {
        console.error("Error fetching question by ID:", error);
        throw error;
    }
}   