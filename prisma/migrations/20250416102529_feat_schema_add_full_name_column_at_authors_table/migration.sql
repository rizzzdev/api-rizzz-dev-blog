/*
  Warnings:

  - Added the required column `fullName` to the `Authors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Authors" ADD COLUMN     "fullName" TEXT NOT NULL;
