/*
  Warnings:

  - Added the required column `title` to the `Expenses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expenses" ADD COLUMN     "title" TEXT NOT NULL;
