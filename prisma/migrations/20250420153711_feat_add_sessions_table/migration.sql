-- CreateTable
CREATE TABLE "Sessions" (
    "id" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "loggedInAt" TIMESTAMP(3) NOT NULL,
    "loggedOutAdt" TIMESTAMP(3),

    CONSTRAINT "Sessions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Sessions" ADD CONSTRAINT "Sessions_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Authors"("authorId") ON DELETE RESTRICT ON UPDATE CASCADE;
