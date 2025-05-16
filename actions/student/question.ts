"use server";
import { prisma } from "@/lib/db";
// get a question for the specific chapter by pass the  chatid packageid,courseid and chapterid help me
export async function getQuestionForActivePackageLastChapter(chatId: string) {
  // get student
  const student = await prisma.wpos_wpdatatable_23.findFirst({
    where: {
      chat_id: chatId,
      status: { in: ["active", "notyet"] },
    },
    select: {
      wdt_ID: true,
      activePackage: {
        select: {
          id: true,
          name: true,
          courses: {
            select: {
              id: true,
              title: true,
              order: true,
              chapters: {
                select: {
                  id: true,
                  position: true,
                  isPublished: true,
                },
                orderBy: {
                  position: "asc",
                },
              },
            },
            orderBy: {
              order: "asc",
            },
          },
        },
      },
    },
  });
  console.log("fuad");
  console.log(student);
  if (!student) {
    console.error("Student not found or not authorized.");
    throw new Error("Unauthorized: Student not found.");
  }
  return student;
}

//   // gate the last active chapter
//   const lastActiveChapter = await prisma.studentProgress.findFirst({
//     where: {
//       studentId: student.wdt_ID,
//       isCompleted: true,
//       chapter: { course: { packageId: student.activePackage?.id } },
//     },
//     select: {
//       chapterId: true,
//     },
//   });

//   const chapterData = await prisma.chapter.findFirst({
//     where: {
//       id: lastActiveChapter?.chapterId,
//     },
//   });
// }

// export async function getQuestionForActivePackageLastChapter(chatId: string) {
//   // Find the student
//   const student = await prisma.wpos_wpdatatable_23.findFirst({
//     where: {
//       chat_id: chatId,
//       status: { in: ["active", "notyet"] },
//     },
//     select: {
//       wdt_ID: true,
//       activePackage: {
//         select: {
//           id: true,
//           name: true,
//           courses: {
//             select: {
//               id: true,
//               order: true,
//               chapters: {
//                 select: {
//                   id: true,
//                   position: true,
//                   isPublished: true,
//                 },
//                 orderBy: {
//                   position: "asc",
//                 },
//               },
//             },
//             orderBy: {
//               order: "asc",
//             },
//           },
//         },
//       },
//     },
//   });

//   if (!student || !student.activePackage) {
//     console.error("Student or active package not found");
//     throw new Error("Unauthorized: Student or package not found.");
//   }

//   // Get all completed chapters for this student in this package
//   const completedChapters = await prisma.studentProgress.findMany({
//     where: {
//       studentId: student.wdt_ID,
//       isCompleted: true,
//       chapter: {
//         course: {
//           packageId: student.activePackage.id,
//         },
//       },
//     },
//     select: {
//       chapterId: true,
//     },
//   });

//   const completedChapterIds = completedChapters.map((c) => c.chapterId);

//   // Find the next chapter in order
//   let nextChapter = null;
//   let currentCourse = null;

//   // Iterate through courses in order
//   for (const course of student.activePackage.courses) {
//     currentCourse = course;

//     // Check if all chapters in this course are completed
//     const allChaptersCompleted = course.chapters.every((chapter) =>
//       completedChapterIds.includes(chapter.id)
//     );

//     // If not all chapters are completed, find the first incomplete chapter
//     if (!allChaptersCompleted) {
//       for (const chapter of course.chapters) {
//         if (!completedChapterIds.includes(chapter.id)) {
//           nextChapter = chapter;
//           break;
//         }
//       }
//       if (nextChapter) break;
//     }
//   }

//   if (!nextChapter) {
//     // If all chapters are completed, return the first chapter of the first course
//     if (
//       student.activePackage.courses.length > 0 &&
//       student.activePackage.courses[0].chapters.length > 0
//     ) {
//       nextChapter = student.activePackage.courses[0].chapters[0];
//     } else {
//       throw new Error("No chapters available in this package.");
//     }
//   }

//   // Get the full chapter data with questions
//   const chapterWithQuestions = await prisma.chapter.findUnique({
//     where: { id: nextChapter.id },
//     include: {
//       questions: {
//         include: {
//           questionOptions: true,
//           questionAnswer: true,
//         },
//       },
//     },
//   });

//   if (!chapterWithQuestions) {
//     throw new Error("Chapter not found.");
//   }

//   return {
//     chapter: {
//       id: chapterWithQuestions.id,
//       title: chapterWithQuestions.title,
//       description: chapterWithQuestions.description,
//       videoUrl: chapterWithQuestions.videoUrl,
//       position: chapterWithQuestions.position,
//     },
//     questions: chapterWithQuestions.questions.map((q) => ({
//       id: q.id,
//       question: q.question,
//       options: q.questionOptions.map((opt) => ({
//         id: opt.id,
//         option: opt.option,
//       })),
//       correctAnswer:
//         q.questionAnswer.length > 0 ? q.questionAnswer[0].answerId : null,
//     })),
//     course: currentCourse
//       ? {
//           id: currentCourse.id,
//           order: currentCourse.order,
//         }
//       : null,
//   };
// }

// Get all questions answerfor a specific chapter
export async function showAnswer(chapterId: string) {
  console.log("Fetching questions for chapterId:", chapterId);
  const questions = await prisma.question.findMany({
    where: { chapterId },
    select: { id: true },
  });

  if (!questions.length) {
    console.error("No questions found for chapterId:", chapterId);
    throw new Error("No questions found for the given chapterId.");
  }

  const questionIds = questions.map((q) => q.id);

  console.log("Fetching correct answers for questions:", questionIds);

  const questionAnswersRaw = await prisma.questionAnswer.findMany({
    where: { questionId: { in: questionIds } },
    select: { questionId: true, answerId: true },
  });

  const studentAnswersRaw = await prisma.studentQuizAnswer.findMany({
    where: {
      selectedOption: {
        questionId: { in: questionIds },
      },
    },
    select: {
      studentQuiz: { select: { questionId: true } },
      selectedOptionId: true,
    },
  });

  // Group student answers by questionId
  const studentResponse: { [questionId: string]: string[] } = {};
  for (const ans of studentAnswersRaw) {
    const qid = ans.studentQuiz.questionId;
    if (!studentResponse[qid]) studentResponse[qid] = [];
    studentResponse[qid].push(ans.selectedOptionId);
  }

  // Group correct answers by questionId
  const questionAnswers: { [questionId: string]: string[] } = {};
  for (const qa of questionAnswersRaw) {
    if (!questionAnswers[qa.questionId]) questionAnswers[qa.questionId] = [];
    questionAnswers[qa.questionId].push(qa.answerId);
  }

  // Combine questionAnswers and studentResponse per questionId
  const combinedAnswers = questionIds.map((id) => ({
    questionId: id,
    correctAnswers: questionAnswers[id] || [],
    studentAnswers: studentResponse[id] || [],
  }));

  console.log("Combined answers:", combinedAnswers);

  return combinedAnswers;
}

// type AnswerPair = { questionId: string; answerId: string };

// export async function submitAnswers(answers: AnswerPair[]) {
//   if (!answers.length) throw new Error("No answers provided.");
// }

// export async function getStudentSubmittedAnswers(questionId: string) {
//   const studentId = await isAuthorized("student");
//   if (!studentId) throw new Error("Unauthorized: Student ID is undefined");
// }

// export async function checkAnswerSubmitted(questionId: string) {
//   const studentId = await isAuthorized("student");
//   if (!studentId) throw new Error("Unauthorized: Student ID is undefined");
// }

// this function is used to check the correct answer for a specific chapter
export async function correctAnswer(chapterId: string, studentId: number) {
  try {
    console.log("Fetching questions for chapterId:", chapterId);
    const questions = await prisma.question.findMany({
      where: { chapterId },
      select: { id: true },
    });

    if (!questions.length) {
      console.error("No questions found for chapterId:", chapterId);
      throw new Error("No questions found for the given chapterId.");
    }

    const questionIds = questions.map((q) => q.id);

    console.log("Fetching student quiz answers for studentId:", studentId);
    const studentQuizAnswers = await prisma.studentQuizAnswer.findMany({
      where: {
        studentQuiz: {
          studentId: studentId,
          questionId: { in: questionIds },
        },
      },
      select: {
        studentQuiz: { select: { questionId: true } },
        selectedOptionId: true,
      },
    });

    const studentResponse: { [questionId: string]: string[] } = {};
    for (const ans of studentQuizAnswers) {
      const qid = ans.studentQuiz.questionId;
      if (!studentResponse[qid]) studentResponse[qid] = [];
      studentResponse[qid].push(ans.selectedOptionId);
    }

    console.log("Fetching correct answers for questions:", questionIds);
    const questionAnswersRaw = await prisma.questionAnswer.findMany({
      where: { questionId: { in: questionIds } },
      select: { questionId: true, answerId: true },
    });

    const questionAnswers: { [questionId: string]: string[] } = {};
    for (const qa of questionAnswersRaw) {
      if (!questionAnswers[qa.questionId]) questionAnswers[qa.questionId] = [];
      questionAnswers[qa.questionId].push(qa.answerId);
    }

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

    console.log("Result calculated:", result);
    return { studentResponse, questionAnswers, result };
  } catch (error) {
    console.error("Error in correctAnswer:", error);
    throw new Error("Failed to calculate the correct answers.");
  }
}
