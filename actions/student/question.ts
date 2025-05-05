"use server";
import { prisma } from "@/lib/db";
import { isAuthorized } from "@/lib/isAuthorized";

// Get all questions for a lesson (with options and correct answers)
export async function getQuestionsByLesson(lessonId: string) {
  const studentId = await isAuthorized("student");
  if (!studentId) throw new Error("Unauthorized: Student ID is undefined");

  try {
    return await prisma.question.findMany({
      where: { lessonId },
      include: {
        questionOptions: true,
        questionAnswer: true,
      },
    });
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw new Error("Failed to fetch questions");
  }
}

type AnswerPair = { questionId: string; answerId: string };

export async function submitAnswers(answers: AnswerPair[]) {
  const studentId = await isAuthorized("student");
  if (!studentId) throw new Error("Unauthorized: Student ID is undefined");
  if (!answers.length) throw new Error("No answers provided.");

  try {
    const results = [];
    for (const { questionId, answerId } of answers) {
      // 1. Find or create StudentQuiz for this student and question
      let studentQuiz = await prisma.studentQuiz.findUnique({
        where: { studentId_questionId: { studentId, questionId } },
      });
      if (!studentQuiz) {
        studentQuiz = await prisma.studentQuiz.create({
          data: { studentId, questionId },
        });
      }

      // 2. Remove previous answer for this question (if any)
      await prisma.studentQuizAnswer.deleteMany({
        where: { studentQuizId: studentQuiz.id },
      });

      // 3. Create StudentQuizAnswer for the selected option
      const quizAnswer = await prisma.studentQuizAnswer.create({
        data: {
          studentQuizId: studentQuiz.id,
          optionId: answerId,
        },
      });

      results.push({ studentQuiz, quizAnswer });
    }

    return { success: true, results };
  } catch (error) {
    console.error("Error submitting answers:", error);
    throw new Error("Failed to submit answers");
  }
}

export async function getStudentSubmittedAnswers(questionId: string) {
  const studentId = await isAuthorized("student");
  if (!studentId) throw new Error("Unauthorized: Student ID is undefined");
  try {
    const studentQuezAnswer = await prisma.studentQuizAnswer.findMany({
      where: { studentQuiz: { questionId, studentId } },
      select: {
        optionId: true,
        studentQuiz: {
          select: {
            questionId: true,
            studentId: true,
          },
        },
      },
    });
    return studentQuezAnswer;
  } catch (error) {
    console.error("Error fetching submitted answers:", error);
    throw new Error("Failed to fetch submitted answers");
  }
}

export async function checkAnswerSubmitted(questionId: string) {
  const studentId = await isAuthorized("student");
  if (!studentId) throw new Error("Unauthorized: Student ID is undefined");

  try {
    const studentQuiz = await prisma.studentQuiz.findFirst({
      where: { questionId, studentId },
    });
    return !!studentQuiz;
  } catch (error) {
    console.error("Error checking answer submission:", error);
    throw new Error("Failed to check answer submission");
  }

}
export async function checkLessonExamComplete(lessonId: string): Promise<boolean> {
  const studentId = await isAuthorized("student");
  if (!studentId) throw new Error("Unauthorized: Student ID is undefined");

  try {
    const studentQuiz = await prisma.studentQuiz.findFirst({
      where: {
        question: { lessonId: lessonId },
        studentId: studentId,
      },
    });
    return studentQuiz !== null;
  } catch (error) {
    console.error("Error checking exam completion:", error);
    throw new Error("Failed to check exam completion");
  }
}

export async function correctAnswer(lessonId: string) {
  const studentId = await isAuthorized("student");
  if (!studentId) throw new Error("Unauthorized: Student ID is undefined");

  // 1. Get all questions for this lesson
  const questions = await prisma.question.findMany({
    where: { lessonId },
    select: { id: true },
  });
  const questionIds = questions.map((q) => q.id);

  // 2. Get student's answers for these questions
  const studentQuizAnswers = await prisma.studentQuizAnswer.findMany({
    where: {
      studentQuiz: {
        studentId,
        questionId: { in: questionIds },
      },
    },
    select: {
      studentQuiz: { select: { questionId: true } },
      optionId: true,
    },
  });

  // Map: { [questionId]: answerId[] }
  const studentResponse: { [questionId: string]: string[] } = {};
  for (const ans of studentQuizAnswers) {
    const qid = ans.studentQuiz.questionId;
    if (!studentResponse[qid]) studentResponse[qid] = [];
    studentResponse[qid].push(ans.optionId);
  }

  // 3. Get correct answers for these questions
  const questionAnswersRaw = await prisma.questionAnswer.findMany({
    where: { questionId: { in: questionIds } },
    select: { questionId: true, answerId: true },
  });

  const questionAnswers: { [questionId: string]: string[] } = {};
  for (const qa of questionAnswersRaw) {
    if (!questionAnswers[qa.questionId]) questionAnswers[qa.questionId] = [];
    questionAnswers[qa.questionId].push(qa.answerId);
  }

  // 4. Compare and compute result
  const total = questionIds.length;
  let correct = 0;

  for (const questionId of questionIds) {
    const correctAnswers = questionAnswers[questionId]?.sort() || [];
    const userAnswers = studentResponse[questionId]?.sort() || [];
    const isCorrect =
      correctAnswers.length === userAnswers.length &&
      correctAnswers.every((v, i) => v === userAnswers[i]);
    if (isCorrect) correct++;
  }

  const result = {
    total,
    correct,
    score: total ? correct / total : 0,
  };

  return { studentResponse, questionAnswers, result };
}
