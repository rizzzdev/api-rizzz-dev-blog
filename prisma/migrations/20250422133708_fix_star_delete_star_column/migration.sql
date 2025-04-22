/*
  Warnings:

  - You are about to drop the `Stars` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Stars" DROP CONSTRAINT "Stars_postId_fkey";

-- DropForeignKey
ALTER TABLE "Stars" DROP CONSTRAINT "Stars_userId_fkey";

-- DropTable
DROP TABLE "Stars";
