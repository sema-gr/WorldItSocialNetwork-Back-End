/*
  Warnings:

  - You are about to drop the `_UserPostTags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_UserPostTags";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "UserPostTags" (
    "userPostId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    PRIMARY KEY ("userPostId", "tagId"),
    CONSTRAINT "UserPostTags_userPostId_fkey" FOREIGN KEY ("userPostId") REFERENCES "UserPost" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserPostTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
