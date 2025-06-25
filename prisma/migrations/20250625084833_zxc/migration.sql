/*
  Warnings:

  - You are about to drop the `AlbumImages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AlbumTags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ChatGroupMembers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PostImages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PostLikes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PostTags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PostViews` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProfileLikes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProfileViews` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "AlbumImages";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "AlbumTags";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ChatGroupMembers";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PostImages";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PostLikes";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PostTags";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PostViews";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ProfileLikes";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ProfileViews";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "post_app_album_images" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "album_id" INTEGER NOT NULL,
    "image_id" INTEGER NOT NULL,
    CONSTRAINT "post_app_album_images_album_id_fkey" FOREIGN KEY ("album_id") REFERENCES "Album" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "post_app_album_images_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "Image" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "post_app_album_tags" (
    "album_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    CONSTRAINT "post_app_album_tags_album_id_fkey" FOREIGN KEY ("album_id") REFERENCES "Album" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "post_app_album_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "chat_app_chatgroup_members" (
    "chat_groupId" INTEGER NOT NULL,
    "profile_id" INTEGER NOT NULL,

    PRIMARY KEY ("chat_groupId", "profile_id"),
    CONSTRAINT "chat_app_chatgroup_members_chat_groupId_fkey" FOREIGN KEY ("chat_groupId") REFERENCES "ChatGroup" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "chat_app_chatgroup_members_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "post_app_post_tag" (
    "post_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    CONSTRAINT "post_app_post_tag_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "post_app_post_tag_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "post_app_post_likes" (
    "post_id" INTEGER NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    CONSTRAINT "post_app_post_likes_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "post_app_post_views" (
    "post_id" INTEGER NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    CONSTRAINT "post_app_post_views_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "post_app_post_image" (
    "post_id" INTEGER NOT NULL,
    "image_id" INTEGER NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    CONSTRAINT "post_app_post_image_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "post_app_post_image_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "Image" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
