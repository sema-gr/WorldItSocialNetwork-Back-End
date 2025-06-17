/*
  Warnings:

  - You are about to drop the `_TagsToUserPost` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_TagsToUserPost";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_UserPostTags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_UserPostTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Tags" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_UserPostTags_B_fkey" FOREIGN KEY ("B") REFERENCES "UserPost" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserPostTags_AB_unique" ON "_UserPostTags"("A", "B");

-- CreateIndex
CREATE INDEX "_UserPostTags_B_index" ON "_UserPostTags"("B");
