import { prisma } from "../lib/db";
import bcrypt from "bcryptjs";

(async () => {
  // Seed Admin
  await prisma.admin.create({
    data: {
      name: "admin",
      phoneno: "0911223344",
      passcode: await bcrypt.hash("admin123", 12),
    },
  });

  // Seed Teacher
  await prisma.teacher.create({
    data: {
      name: "teacher",
      phoneno: "0910737199",
      passcode: await bcrypt.hash("teacher123", 12),
      isActive: true,
    },
  });

  // Seed Student
  await prisma.student.create({
    data: {
      name: "student",
      passcode: await bcrypt.hash("student1", 12),
      phoneno: "0910203040",
      status: true,
      startDate: new Date(),
      chatId: "chat_001",
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
