import { prisma } from "../lib/db";
import bcrypt from "bcryptjs";

(async () => {
  // Seed Admin
  await prisma.admin.create({
    data: {
      name: "admin",
      phoneno: "0911223344",
      passcode: "admin123",
    },
  });

  // Seed Teacher
  const teacher = await prisma.teacher.create({
    data: {
      name: "teacher",
      phoneno: "0910737199",
      passcode: "teacher123",
      isActive: true,
    },
  });

  // Seed Student
  await prisma.student.create({
    data: {
      name: "student",
      passcode: "student1",
      phoneno: "0910203040",
      status: true,
      startDate: new Date(),
      chatId: "chat_001",
    },
  });

  // Seed Course
  const course = await prisma.course.create({
    data: {
      title: "Introduction to Programming",
      description: "Learn the basics of programming.",
      teacherId: teacher.id,
    },
  });

  // Seed Lesson
  const lesson = await prisma.lesson.create({
    data: {
      title: "Lesson 1: What is Programming?",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      order: 1,
      courseId: course.id,
    },
  });

  // Seed Question
  const question = await prisma.question.create({
    data: {
      lessonId: lesson.id,
      question: "What is the output of 1 + 1?",
      questionOptions: {
        create: [
          { option: "1" },
          { option: "2" },
          { option: "3" },
          { option: "4" },
        ],
      },
    },
    include: { questionOptions: true },
  });

  // Seed QuestionAnswer (correct answer is "2")
  await prisma.questionAnswer.create({
    data: {
      questionId: question.id,
      answerId: question.questionOptions.find((opt) => opt.option === "2")!.id,
    },
  });
})()
  .then(() => {
    console.log("Seed Successfully 👌");
  })
  .catch((e) => {
    console.error(e);
    console.log("Failed to Seed 😞");
  });
