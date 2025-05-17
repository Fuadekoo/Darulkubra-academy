import { prisma } from "@/lib/db";
import { showAnswer } from "./question";
import { correctAnswer } from "./question";

export default async function getActiveChapter(
  courseId: string,
  chapterId: string,
  chat_id: string
) {
  try {
    const activeChapter = await prisma.chapter.findFirst({
      where: {
        id: chapterId,
        courseId: courseId,
      },
      select: {
        title: true,
        description: true,
        videoUrl: true,
        questions: {
          select: {
            question: true,
            questionOptions: true,
            questionAnswer: true,
            studentQuiz: {
              select: {
                studentQuizAnswers: {
                  select: {
                    selectedOption: { select: { id: true, option: true } },
                  },
                },
              },
            },
          },
        },
      },
    });
    return activeChapter;
  } catch (error) {
    console.error("Error fetching active chapter:", error);
    throw error;
  }
}
// this function is used for unlocking the next chapter
let noOfTrial = 0;
export async function unlockingNextChapter(
  courseId: string,
  chapterId: string,
  chat_id: string
) {
  try {
    if (!chapterId || !chat_id || !courseId) {
      console.error("Invalid input: chapterId or chat_id is missing.");
      throw new Error("Invalid input: chapterId and chat_id are required.");
    }

    const student = await prisma.wpos_wpdatatable_23.findFirst({
      where: { chat_id: chat_id },
    });

    if (!student?.wdt_ID) {
      throw new Error("Student not found for the provided chat_id.");
    }

    const { result } = await correctAnswer(chapterId, student.wdt_ID);
    if (!result) {
      throw new Error("Failed to retrieve result from correctAnswer.");
    }

    const prevChapter = await prisma.chapter.findUnique({
      where: { id: chapterId },
      select: { position: true },
    });

    if (!prevChapter) {
      throw new Error("Previous chapter not found.");
    }

    if (result.score == 1) {
      // 1. Mark current chapter as started and completed
      let progress = await prisma.studentProgress.findFirst({
        where: {
          studentId: student.wdt_ID,
          chapterId: chapterId,
        },
      });
      if (!progress) {
        await prisma.studentProgress.create({
          data: {
            studentId: student.wdt_ID,
            chapterId: chapterId,
            isCompleted: true,
            completedAt: new Date(),
          },
        });
      } else {
        // Update if not already completed or started
        if (!progress.isCompleted) {
          await prisma.studentProgress.update({
            where: { id: progress.id },
            data: {
              isCompleted: true,
              completedAt: new Date(),
            },
          });
        }
      }

      // 2. Find next chapter
      const nextChapter = await prisma.chapter.findFirst({
        where: {
          courseId: courseId,
          position: prevChapter.position + 1,
        },
      });

      if (nextChapter) {
        // 3. Mark next chapter as started but not completed
        let nextProgress = await prisma.studentProgress.findFirst({
          where: {
            studentId: student.wdt_ID,
            chapterId: nextChapter.id,
          },
        });
        if (!nextProgress) {
          await prisma.studentProgress.create({
            data: {
              studentId: student.wdt_ID,
              chapterId: nextChapter.id,
              isCompleted: false,
            },
          });
        }
        return "you passed the exam";
      } else {
        // No next chapter: course finished
        const course = await prisma.course.findFirst({
          where: { id: courseId },
        });
        const courseName = course?.title;
        const congra = `hello you have finished ${courseName} course thank you so much`;
        return congra;
      }
    } else {
      noOfTrial += 1;
      if (noOfTrial == 3) {
        showAnswer(chapterId);
        noOfTrial = 0;
      }
      return "you Failed the exam";
    }
  } catch (error) {
    console.error("Error unlocking next chapter:", error);
    throw error;
  }
}

export async function unlockingNextChapterFunction(
  courseId: string,
  chapterId: string,
  chat_id: string
) {
  const student = await prisma.wpos_wpdatatable_23.findFirst({
    where: { chat_id: chat_id },
    select: { wdt_ID: true },
  });

  if (!student?.wdt_ID) throw new Error("Student ID is undefined.");

  const prevChapter = await prisma.chapter.findUnique({
    where: { id: chapterId },
    select: { position: true },
  });

  // 1. Mark current chapter as started and completed
  let completeProgress = await prisma.studentProgress.findFirst({
    where: {
      studentId: student.wdt_ID,
      chapterId: chapterId,
    },
  });

  if (!completeProgress) {
    await prisma.studentProgress.create({
      data: {
        studentId: student.wdt_ID,
        chapterId: chapterId,
        isStarted: true,
        isCompleted: true,
        completedAt: new Date(),
      },
    });
  } else {
    // Update if not already completed or started
    if (!completeProgress.isCompleted || !completeProgress.isStarted) {
      await prisma.studentProgress.update({
        where: { id: completeProgress.id },
        data: {
          isStarted: true,
          isCompleted: true,
          completedAt: new Date(),
        },
      });
    }
  }

  // 2. Find the next chapter based on position
  if (prevChapter && prevChapter.position !== undefined) {
    const nextChapter = await prisma.chapter.findFirst({
      where: {
        courseId: courseId,
        position: prevChapter.position + 1,
      },
    });

    if (nextChapter) {
      // 3. Mark next chapter as started but not completed
      let nextProgress = await prisma.studentProgress.findFirst({
        where: {
          studentId: student.wdt_ID,
          chapterId: nextChapter.id,
        },
      });
      if (!nextProgress) {
        await prisma.studentProgress.create({
          data: {
            studentId: student.wdt_ID,
            chapterId: nextChapter.id,
            isStarted: true,
            isCompleted: false,
          },
        });
      } else if (!nextProgress.isStarted) {
        await prisma.studentProgress.update({
          where: { id: nextProgress.id },
          data: { isStarted: true },
        });
      }
    }
  }
}
