-- CreateEnum
CREATE TYPE "Type" AS ENUM ('CODE_GENERATION', 'DEBUGGING', 'CODE_REVIEW');

-- CreateEnum
CREATE TYPE "Language" AS ENUM ('ENGLISH', 'VIETNAMESE', 'JAPANESE', 'CHINESE', 'SPANISH', 'FRENCH', 'GERMAN', 'RUSSIAN', 'KOREAN');

-- CreateTable
CREATE TABLE "templates" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "language" "Language" NOT NULL,
    "type" "Type" NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "templates_pkey" PRIMARY KEY ("id")
);
