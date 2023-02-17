/*
  Warnings:

  - You are about to drop the column `compressedSize` on the `photo` table. All the data in the column will be lost.
  - You are about to drop the column `originalSize` on the `photo` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `photo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "photo" DROP COLUMN "compressedSize",
DROP COLUMN "originalSize",
DROP COLUMN "type";
