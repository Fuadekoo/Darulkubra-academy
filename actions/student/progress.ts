"use server";
import { prisma } from "@/lib/db";

export async function getStudentProgressPerPackage(
  chatId: string,
  packageId: string
) {
  try {
    // COURSE PER PACKAGE
    const courses = await prisma.course.findMany({
      where: {
        packageId: packageId,
      },
      select: {
        id: true,
        chapters: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    // Group chapters by course
    const grouped: Record<string, Array<{ id: string; title: string }>> = {};
    for (const course of courses) {
      grouped[course.id] = course.chapters;
    }
    //

    const progress = await prisma.studentProgress.findMany({
      where: {
        student: { chat_id: chatId },
        chapter: {
          course: {
            packageId: packageId,
          },
        },
      },
      select: {
        chapterId: true,
        isCompleted: true,
        chapter: {
          select: { course: { select: { id: true } } },
        },
      },
    });

    // group progress chapters by course
    const groupedProgress: Record<
      string,
      Array<{ chapterId: string; isCompleted: boolean }>
    > = {};
    for (const prog of progress) {
      const courseId = prog.chapter.course.id;
      if (!groupedProgress[courseId]) {
        groupedProgress[courseId] = [];
      }
      groupedProgress[courseId].push({
        chapterId: prog.chapterId,
        isCompleted: prog.isCompleted,
      });
    }

    // combine and  examine the total course  and complete course

    // combine and examine the total course and complete course
    const courseProgress: Array<{
      courseId: string;
      totalChapters: number;
      completedChapters: number;
      progressFraction: string;
      progressNumber: number;
    }> = [];

    for (const courseId in grouped) {
      const allChapters = grouped[courseId].map((ch) => ch.id);
      const completedChapters = (groupedProgress[courseId] || [])
        .filter((ch) => ch.isCompleted)
        .map((ch) => ch.chapterId);

      const totalChapters = allChapters.length;
      const completed = completedChapters.length;
      const progressFraction = `${completed}/${totalChapters}`;
      const progressNumber = totalChapters > 0 ? completed / totalChapters : 0;

      courseProgress.push({
        courseId,
        totalChapters,
        completedChapters: completed,
        progressFraction,
        progressNumber,
      });
    }

    // Package progress: how many courses are fully completed
    const totalCourses = courseProgress.length;
    const completedCourses = courseProgress.filter(
      (c) => c.completedChapters === c.totalChapters && c.totalChapters > 0
    ).length;

    const packageProgressFraction = `${completedCourses}/${totalCourses}`;
    const packageProgressNumber =
      totalCourses > 0 ? completedCourses / totalCourses : 0;

    // Calculate total and completed chapters for the whole package
    let totalChaptersInPackage = 0;
    let completedChaptersInPackage = 0;

    for (const courseId in grouped) {
      const allChapters = grouped[courseId].map((ch) => ch.id);
      const completedChapters = (groupedProgress[courseId] || [])
        .filter((ch) => ch.isCompleted)
        .map((ch) => ch.chapterId);

      totalChaptersInPackage += allChapters.length;
      completedChaptersInPackage += completedChapters.length;
    }

    // Package progress: chapters completed out of total chapters
    const packageProgressFractionChapter = `${completedChaptersInPackage}/${totalChaptersInPackage}`;
    const packageProgressNumberChapter =
      totalChaptersInPackage > 0
        ? completedChaptersInPackage / totalChaptersInPackage
        : 0;

    return {
      packageProgress: {
        completedCourses,
        totalCourses,
        completedChapters: completedChaptersInPackage,
        totalChapter: totalChaptersInPackage,
        ChapterFraction: packageProgressFractionChapter,
        ChapterNumber: packageProgressNumberChapter,
        fraction: packageProgressFraction,
        number: packageProgressNumber,
      },
      courseProgress, // array with per-course progress
    };
  } catch (error) {
    console.error("Error fetching student progress:", error);
    throw error;
  }
}

export async function getActivePackageProgeess(chatId: string) {
  const packageProgress = await prisma.wpos_wpdatatable_23.findFirst({
    where: {
      chat_id: chatId,
    },
    select: {
      activePackage: {
        select: { id: true, name: true },
      },
    },
  });

  const progress = await prisma.studentProgress.count({
    where: {
      student: { chat_id: chatId },
      chapter: {
        // course: {
        //   packageId: packageProgress?.activePackage.id,
        // },
      },
    },
  });
}

export async function getStudentProgressPerChapter(
  chapterId: string,
  chatId: string
) {
  const progress = await prisma.studentProgress.findFirst({
    where: {
      chapterId: chapterId,
      student: { chat_id: chatId },
    },
    select: {
      isCompleted: true,
    },
  });
  return progress;
}

export async function getActivePackageProgress(chatId: string) {
  try {
    // Fetch student with active package, courses, and chapters
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
                chapters: {
                  select: { id: true },
                },
              },
            },
          },
        },
      },
    });

    if (!student || !student.activePackage) {
      return null;
    }

    // Count total chapters in all courses
    const totalChapters = student.activePackage.courses.reduce(
      (sum, course) => sum + course.chapters.length,
      0
    );

    // Get all chapter IDs in the package
    const chapterIds = student.activePackage.courses.flatMap((course) =>
      course.chapters.map((chapter) => chapter.id)
    );

    // Count completed chapters for this student
    const completedChapters = await prisma.studentProgress.count({
      where: {
        studentId: student.wdt_ID,
        chapterId: { in: chapterIds },
        isCompleted: true,
      },
    });

    const progress = { totalChapters, completedChapters };
    return progress;
  } catch (error) {
    console.error("Error in getActivePackageProgress:", error);
    return null;
  }
}
