/*
  Warnings:

  - The primary key for the `AlbumImages` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `AlbumTags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PostImages` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PostLikes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PostTags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PostViews` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `AlbumImages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `AlbumTags` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `PostImages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `PostLikes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `PostTags` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `PostViews` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AlbumImages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "album_id" INTEGER NOT NULL,
    "image_id" INTEGER NOT NULL,
    CONSTRAINT "AlbumImages_album_id_fkey" FOREIGN KEY ("album_id") REFERENCES "Album" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AlbumImages_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "Image" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AlbumImages" ("album_id", "image_id") SELECT "album_id", "image_id" FROM "AlbumImages";
DROP TABLE "AlbumImages";
ALTER TABLE "new_AlbumImages" RENAME TO "AlbumImages";
CREATE TABLE "new_AlbumTags" (
    "album_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    CONSTRAINT "AlbumTags_album_id_fkey" FOREIGN KEY ("album_id") REFERENCES "Album" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AlbumTags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_AlbumTags" ("album_id", "tag_id") SELECT "album_id", "tag_id" FROM "AlbumTags";
DROP TABLE "AlbumTags";
ALTER TABLE "new_AlbumTags" RENAME TO "AlbumTags";
CREATE TABLE "new_PostImages" (
    "post_id" INTEGER NOT NULL,
    "image_id" INTEGER NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    CONSTRAINT "PostImages_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PostImages_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "Image" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PostImages" ("image_id", "post_id") SELECT "image_id", "post_id" FROM "PostImages";
DROP TABLE "PostImages";
ALTER TABLE "new_PostImages" RENAME TO "PostImages";
CREATE TABLE "new_PostLikes" (
    "post_id" INTEGER NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    CONSTRAINT "PostLikes_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PostLikes" ("post_id") SELECT "post_id" FROM "PostLikes";
DROP TABLE "PostLikes";
ALTER TABLE "new_PostLikes" RENAME TO "PostLikes";
CREATE TABLE "new_PostTags" (
    "post_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    CONSTRAINT "PostTags_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PostTags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PostTags" ("post_id", "tag_id") SELECT "post_id", "tag_id" FROM "PostTags";
DROP TABLE "PostTags";
ALTER TABLE "new_PostTags" RENAME TO "PostTags";
CREATE TABLE "new_PostViews" (
    "post_id" INTEGER NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    CONSTRAINT "PostViews_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PostViews" ("post_id") SELECT "post_id" FROM "PostViews";
DROP TABLE "PostViews";
ALTER TABLE "new_PostViews" RENAME TO "PostViews";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
