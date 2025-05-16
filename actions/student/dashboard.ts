"use server";
import { prisma } from "@/lib/db";

export async function getpackage(chatId: string) {
  const myPackageList = await prisma.studentProgress.findMany({
    where: { student: { chat_id: chatId } },
    select: {
      chapter: {
        select: {
          course: {
            select: {
                
              _count: { select: { chapters: true } },
              package: {
                select: { name: true },
              },
            },
          },
        },
      },
    },
  });
  return myPackageList;
}
