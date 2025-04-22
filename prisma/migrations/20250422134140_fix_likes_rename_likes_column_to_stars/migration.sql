/*
  Warnings:

  - You are about to drop the `Likes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Likes" DROP CONSTRAINT "Likes_commentId_fkey";

-- DropForeignKey
ALTER TABLE "Likes" DROP CONSTRAINT "Likes_postId_fkey";

-- DropForeignKey
ALTER TABLE "Likes" DROP CONSTRAINT "Likes_userId_fkey";

-- DropTable
DROP TABLE "Likes";

-- CreateTable
CREATE TABLE "Stars" (
    "id" TEXT NOT NULL,
    "postId" TEXT,
    "userId" TEXT NOT NULL,
    "commentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Stars_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Stars" ADD CONSTRAINT "Stars_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stars" ADD CONSTRAINT "Stars_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stars" ADD CONSTRAINT "Stars_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comments"("id") ON DELETE SET NULL ON UPDATE CASCADE;
