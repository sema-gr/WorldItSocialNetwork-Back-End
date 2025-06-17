/*
  Warnings:

  - You are about to drop the `_ImageToPost` table. If the table is not empty, all the data it contains will be lost.
  - The primary key for the `ProfileLikes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `post_id` on the `ProfileLikes` table. All the data in the column will be lost.
  - The primary key for the `ProfileViews` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `post_id` on the `ProfileViews` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "_ImageToPost_B_index";

-- DropIndex
DROP INDEX "_ImageToPost_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ImageToPost";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "PostLikes" (
    "post_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    CONSTRAINT "PostLikes_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PostViews" (
    "post_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    CONSTRAINT "PostViews_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PostImages" (
    "post_id" INTEGER NOT NULL,
    "image_id" INTEGER NOT NULL,

    PRIMARY KEY ("post_id", "image_id"),
    CONSTRAINT "PostImages_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PostImages_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "Image" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProfileLikes" (
    "profile_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    CONSTRAINT "ProfileLikes_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProfileLikes" ("profile_id") SELECT "profile_id" FROM "ProfileLikes";
DROP TABLE "ProfileLikes";
ALTER TABLE "new_ProfileLikes" RENAME TO "ProfileLikes";
CREATE TABLE "new_ProfileViews" (
    "profile_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    CONSTRAINT "ProfileViews_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProfileViews" ("profile_id") SELECT "profile_id" FROM "ProfileViews";
DROP TABLE "ProfileViews";
ALTER TABLE "new_ProfileViews" RENAME TO "ProfileViews";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
