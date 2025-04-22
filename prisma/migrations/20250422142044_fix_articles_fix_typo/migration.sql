/*
  Warnings:

  - You are about to drop the column `ArticleMarkdown` on the `Articles` table. All the data in the column will be lost.
  - Added the required column `articleMarkdown` to the `Articles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Articles" DROP COLUMN "ArticleMarkdown",
ADD COLUMN     "articleMarkdown" TEXT NOT NULL;
