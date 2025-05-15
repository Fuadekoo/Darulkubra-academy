import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

(async () => {
  // Clear existing data (optional)
  // await prisma.$transaction([
  //   prisma.studentQuizAnswer.deleteMany(),
  //   prisma.studentQuiz.deleteMany(),
  //   prisma.questionAnswer.deleteMany(),
  //   prisma.questionOption.deleteMany(),
  //   prisma.question.deleteMany(),
  //   prisma.studentProgress.deleteMany(),
  //   prisma.chapter.deleteMany(),
  //   prisma.studentPackage.deleteMany(),
  //   prisma.course.deleteMany(),
  //   prisma.package.deleteMany(),
  //   prisma.wpos_wpdatatable_23.deleteMany(),
  //   prisma.admin.deleteMany(),
  // ]);

  // Seed Admin
  await prisma.admin.create({
    data: {
      id: "admin_001",
      name: "System Admin",
      phoneno: "0911223344",
      passcode: "admin123",
    },
  });

  // Seed Students
  const students = await prisma.wpos_wpdatatable_23.createMany({
    data: [
      {
        wdt_ID: 1001,
        name: "John Doe (Completed Package 1)",
        passcode: "student1",
        phoneno: "0910203040",
        status: "active",
        chat_id: "chat_001",
      },
      {
        wdt_ID: 1002,
        name: "Jane Smith (In Progress)",
        passcode: "student2",
        phoneno: "0910203041",
        status: "active",
        chat_id: "chat_002",
      },
      {
        wdt_ID: 1003,
        name: "Bob Johnson (New Student)",
        passcode: "student3",
        phoneno: "0910203042",
        status: "active",
        chat_id: "chat_003",
      },
    ],
  });

  // Seed Packages
  const packages = await prisma.coursePackage.createMany({
    data: [
      {
        id: "pkg_001",
        name: "Programming Fundamentals",
        description: "Learn core programming concepts from scratch",
        // imageUrl: "https://example.com/prog-fundamentals.jpg",
        isPublished: true,
      },
      {
        id: "pkg_002",
        name: "Web Development",
        description: "Full-stack web development course",
        // imageUrl: "https://example.com/web-dev.jpg",
        isPublished: true,
      },
      {
        id: "pkg_003",
        name: "Data Science",
        description: "Introduction to data analysis and ML",
        // imageUrl: "https://example.com/data-science.jpg",
        isPublished: false, // Unpublished package for testing
      },
    ],
  });

  // Seed Courses for Programming Package
  const progCourses = await prisma.course.createMany({
    data: [
      {
        id: "course_001",
        userId: "admin_001",
        title: "Programming Basics",
        description: "Introduction to programming concepts",
        isPublished: true,
        order: 1,
        packageId: "pkg_001",
        imageUrl: "https://example.com/prog-basics.jpg",
      },
      {
        id: "course_002",
        userId: "admin_001",
        title: "Object-Oriented Programming",
        description: "Learn OOP principles",
        isPublished: true,
        order: 2,
        packageId: "pkg_001",
        imageUrl: "https://example.com/oop.jpg",
      },
    ],
  });

  // Seed Courses for Web Dev Package
  const webCourses = await prisma.course.createMany({
    data: [
      {
        id: "course_101",
        userId: "admin_001",
        title: "HTML & CSS Fundamentals",
        description: "Build beautiful web pages",
        isPublished: true,
        order: 1,
        packageId: "pkg_002",
        imageUrl: "https://example.com/html-css.jpg",
      },
      {
        id: "course_102",
        userId: "admin_001",
        title: "JavaScript Mastery",
        description: "Complete JS from basics to advanced",
        isPublished: true,
        order: 2,
        packageId: "pkg_002",
        imageUrl: "https://example.com/js-mastery.jpg",
      },
    ],
  });

  // Seed Chapters for Programming Basics Course
  const progChapters = await prisma.chapter.createMany({
    data: [
      {
        id: "chapter_001",
        title: "Variables and Data Types",
        description: "Learn about variables and basic data types",
        position: 1,
        isPublished: true,
        isFree: true,
        courseId: "course_001",
        videoUrl: "https://example.com/videos/variables.mp4",
      },
      {
        id: "chapter_002",
        title: "Control Structures",
        description: "If statements and loops",
        position: 2,
        isPublished: true,
        courseId: "course_001",
        videoUrl: "https://example.com/videos/control-structures.mp4",
      },
      {
        id: "chapter_003",
        title: "Functions",
        description: "Creating and using functions",
        position: 3,
        isPublished: true,
        courseId: "course_001",
        videoUrl: "https://example.com/videos/functions.mp4",
      },
    ],
  });

  // Seed Chapters for OOP Course
  await prisma.chapter.createMany({
    data: [
      {
        id: "chapter_011",
        title: "Classes and Objects",
        description: "Introduction to OOP concepts",
        position: 1,
        isPublished: true,
        courseId: "course_002",
        videoUrl: "https://example.com/videos/classes-objects.mp4",
      },
      {
        id: "chapter_012",
        title: "Inheritance",
        description: "Understanding class inheritance",
        position: 2,
        isPublished: true,
        courseId: "course_002",
        videoUrl: "https://example.com/videos/inheritance.mp4",
      },
    ],
  });

  // Seed Exam Questions for Programming Basics Course
  // Chapter 1 - Variables
  const varQuestion = await prisma.question.create({
    data: {
      chapterId: "chapter_001",
      question: "What is a variable in programming?",
      questionOptions: {
        create: [
          { id: "opt_001", option: "A fixed value that cannot change" },
          { id: "opt_002", option: "A named container for storing data" },
          { id: "opt_003", option: "A type of loop" },
          { id: "opt_004", option: "A programming language" },
        ],
      },
    },
    include: { questionOptions: true },
  });

  await prisma.questionAnswer.create({
    data: {
      questionId: varQuestion.id,
      answerId: varQuestion.questionOptions.find(
        (opt) => opt.option === "A named container for storing data"
      )!.id,
    },
  });

  // Chapter 1 - Second Question
  const typeQuestion = await prisma.question.create({
    data: {
      chapterId: "chapter_001",
      question:
        "Which of these is NOT a primitive data type in most languages?",
      questionOptions: {
        create: [
          { id: "opt_005", option: "String" },
          { id: "opt_006", option: "Number" },
          { id: "opt_007", option: "Boolean" },
          { id: "opt_008", option: "Array" },
        ],
      },
    },
    include: { questionOptions: true },
  });

  await prisma.questionAnswer.create({
    data: {
      questionId: typeQuestion.id,
      answerId: typeQuestion.questionOptions.find(
        (opt) => opt.option === "Array"
      )!.id,
    },
  });

  // Chapter 2 - Control Structures
  const loopQuestion = await prisma.question.create({
    data: {
      chapterId: "chapter_002",
      question: "Which loop is guaranteed to execute at least once?",
      questionOptions: {
        create: [
          { id: "opt_009", option: "for loop" },
          { id: "opt_010", option: "while loop" },
          { id: "opt_011", option: "do-while loop" },
          { id: "opt_012", option: "if statement" },
        ],
      },
    },
    include: { questionOptions: true },
  });

  await prisma.questionAnswer.create({
    data: {
      questionId: loopQuestion.id,
      answerId: loopQuestion.questionOptions.find(
        (opt) => opt.option === "do-while loop"
      )!.id,
    },
  });

  // Student 3 - No enrollments (new student)

  // Seed Student Progress for Completed Student
  await prisma.studentProgress.createMany({
    data: [
      // Student 1 completed all chapters in Course 1
      {
        studentId: 1001,
        chapterId: "chapter_001",
        isCompleted: true,
        completedAt: new Date("2023-02-01"),
      },
      {
        studentId: 1001,
        chapterId: "chapter_002",
        isCompleted: true,
        completedAt: new Date("2023-02-15"),
      },
      {
        studentId: 1001,
        chapterId: "chapter_003",
        isCompleted: true,
        completedAt: new Date("2023-02-28"),
      },
      // Student 1 completed all chapters in Course 2
      {
        studentId: 1001,
        chapterId: "chapter_011",
        isCompleted: true,
        completedAt: new Date("2023-03-10"),
      },
      {
        studentId: 1001,
        chapterId: "chapter_012",
        isCompleted: true,
        completedAt: new Date("2023-03-15"),
      },
    ],
  });

  // Seed Student Progress for In-Progress Student
  await prisma.studentProgress.createMany({
    data: [
      // Student 2 completed first chapter
      {
        studentId: 1002,
        chapterId: "chapter_001",
        isCompleted: true,
        completedAt: new Date("2023-03-05"),
      },
      // Student 2 started second chapter but didn't complete
      {
        studentId: 1002,
        chapterId: "chapter_002",
        isCompleted: false,
      },
    ],
  });

  // Seed Quiz Attempts for Student 1
  const quiz1 = await prisma.studentQuiz.create({
    data: {
      studentId: 1001,
      questionId: varQuestion.id,
      takenAt: new Date("2023-02-01T10:00:00"),
      studentQuizAnswers: {
        create: {
          selectedOptionId: "opt_002", // Correct answer
        },
      },
    },
  });

  const quiz2 = await prisma.studentQuiz.create({
    data: {
      studentId: 1001,
      questionId: typeQuestion.id,
      takenAt: new Date("2023-02-01T10:05:00"),
      studentQuizAnswers: {
        create: {
          selectedOptionId: "opt_008", // Correct answer
        },
      },
    },
  });

  console.log("🌱 Database seeded successfully with:");
  console.log("- 1 Admin user");
  console.log("- 3 Students with different progress levels");
  console.log("- 3 Packages (2 published, 1 unpublished)");
  console.log("- 4 Courses (2 in each published package)");
  console.log("- 5 Chapters with video content");
  console.log("- 3 Exam questions with answers");
  console.log("- Complete package history for testing");
  console.log("- Realistic student progress data");
  process.exit(0);
})().catch((e) => {
  console.error("❌ Seeding failed:", e);
  process.exit(1);
});
