/*
  Warnings:

  - The values [ENGLISH,VIETNAMESE,JAPANESE,CHINESE,SPANISH,FRENCH,GERMAN,RUSSIAN,KOREAN] on the enum `Language` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Language_new" AS ENUM ('JAVA', 'JAVASCRIPT', 'PYTHON', 'CSHARP', 'PHP', 'RUBY', 'GO', 'SWIFT', 'KOTLIN', 'TYPESCRIPT', 'HTML', 'CSS', 'SQL', 'PERL', 'LUA');
ALTER TABLE "templates" ALTER COLUMN "language" TYPE "Language_new" USING ("language"::text::"Language_new");
ALTER TYPE "Language" RENAME TO "Language_old";
ALTER TYPE "Language_new" RENAME TO "Language";
DROP TYPE "Language_old";
COMMIT;
