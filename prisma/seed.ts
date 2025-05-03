import { prisma } from "../lib/db";
import bcrypt from "bcryptjs";

(async () => {
  // Seed Admin
  await prisma.admin.create({
    data: {
      name: "admin",
      email: "admin@gmail.com",
      passcode: await bcrypt.hash("admin123", 10),
    },
  });

  // Seed Teacher
  await prisma.teacher.create({
    data: {
      name: "teacher",
      email: "teacher1@gmail.com",
      passcode: await bcrypt.hash("teacher123", 10),
      isActive: true,
    },
  });

  // Seed Student
  await prisma.student.create({
    data: {
      name: "student",
      passcode: await bcrypt.hash("student1", 10),
      phoneNo: "0911223344",
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
