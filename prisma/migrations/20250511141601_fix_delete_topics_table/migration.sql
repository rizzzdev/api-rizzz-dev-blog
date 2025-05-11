/*
  Warnings:

  - You are about to drop the `ArticleToTopics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Topics` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ArticleToTopics" DROP CONSTRAINT "ArticleToTopics_articleId_fkey";

-- DropForeignKey
ALTER TABLE "ArticleToTopics" DROP CONSTRAINT "ArticleToTopics_topicId_fkey";

-- DropTable
DROP TABLE "ArticleToTopics";

-- DropTable
DROP TABLE "Topics";
