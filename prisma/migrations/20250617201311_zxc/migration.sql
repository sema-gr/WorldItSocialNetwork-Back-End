/*
  Warnings:

  - You are about to drop the `UserPostTags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UserPostTags";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "PostTags" (
    "post_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,

    PRIMARY KEY ("post_id", "tag_id"),
    CONSTRAINT "PostTags_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PostTags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
