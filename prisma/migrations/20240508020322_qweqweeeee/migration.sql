/*
  Warnings:

  - Added the required column `test2` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Users` ADD COLUMN `test2` VARCHAR(191) NOT NULL;
