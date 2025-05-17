/*
  Warnings:

  - Made the column `completedAt` on table `studentprogress` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `studentprogress` MODIFY `completedAt` DATETIME(3) NOT NULL;
