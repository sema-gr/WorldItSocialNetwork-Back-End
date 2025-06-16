/*
  Warnings:

  - You are about to drop the column `userPostId` on the `Link` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Link" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL
);
INSERT INTO "new_Link" ("id", "url") SELECT "id", "url" FROM "Link";
DROP TABLE "Link";
ALTER TABLE "new_Link" RENAME TO "Link";
CREATE TABLE "new_UserPost" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "linkId" INTEGER,
    CONSTRAINT "UserPost_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserPost_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Link" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_UserPost" ("authorId", "content", "id", "title") SELECT "authorId", "content", "id", "title" FROM "UserPost";
DROP TABLE "UserPost";
ALTER TABLE "new_UserPost" RENAME TO "UserPost";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
