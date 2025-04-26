/*
  Warnings:

  - A unique constraint covering the columns `[fullName]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Users_fullName_key" ON "Users"("fullName");
