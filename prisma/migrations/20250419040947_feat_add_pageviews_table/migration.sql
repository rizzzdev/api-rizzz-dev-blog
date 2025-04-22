-- CreateTable
CREATE TABLE "Pageviews" (
    "id" TEXT NOT NULL,
    "postId" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Pageviews_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pageviews" ADD CONSTRAINT "Pageviews_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Posts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pageviews" ADD CONSTRAINT "Pageviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
