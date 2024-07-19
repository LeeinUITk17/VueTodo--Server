/*
  Warnings:

  - You are about to drop the column `passwordHash` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `refreshToken` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `rt_token` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `tokenExpiry` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "passwordHash",
DROP COLUMN "refreshToken",
DROP COLUMN "rt_token",
DROP COLUMN "tokenExpiry",
ALTER COLUMN "email" DROP NOT NULL;
