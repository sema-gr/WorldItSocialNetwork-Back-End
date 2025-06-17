/*
  Warnings:

  - You are about to drop the `UserPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ImageToUserPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_groupMembers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_likes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_views` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `authorId` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `topic` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `Avatar` table. All the data in the column will be lost.
  - You are about to drop the column `adminId` on the `ChatGroup` table. All the data in the column will be lost.
  - You are about to drop the column `isPersonalChat` on the `ChatGroup` table. All the data in the column will be lost.
  - You are about to drop the column `attachedImage` on the `ChatMessage` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `ChatMessage` table. All the data in the column will be lost.
  - You are about to drop the column `chatGroupId` on the `ChatMessage` table. All the data in the column will be lost.
  - You are about to drop the column `sentAt` on the `ChatMessage` table. All the data in the column will be lost.
  - You are about to drop the column `idFromId` on the `Friendship` table. All the data in the column will be lost.
  - You are about to drop the column `idTo` on the `Friendship` table. All the data in the column will be lost.
  - You are about to drop the column `uploadedAt` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `dateOfBirth` on the `Profile` table. All the data in the column will be lost.
  - The primary key for the `UserPostTags` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tagId` on the `UserPostTags` table. All the data in the column will be lost.
  - You are about to drop the column `userPostId` on the `UserPostTags` table. All the data in the column will be lost.
  - Added the required column `author_id` to the `Album` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_id` to the `Avatar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `admin_id` to the `ChatGroup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attached_image` to the `ChatMessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author_id` to the `ChatMessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chat_groupId` to the `ChatMessage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile1_id` to the `Friendship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile2_id` to the `Friendship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `file` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `filename` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `post_id` to the `UserPostTags` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag_id` to the `UserPostTags` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_ImageToUserPost_B_index";

-- DropIndex
DROP INDEX "_ImageToUserPost_AB_unique";

-- DropIndex
DROP INDEX "_groupMembers_B_index";

-- DropIndex
DROP INDEX "_groupMembers_AB_unique";

-- DropIndex
DROP INDEX "_likes_B_index";

-- DropIndex
DROP INDEX "_likes_AB_unique";

-- DropIndex
DROP INDEX "_views_B_index";

-- DropIndex
DROP INDEX "_views_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UserPost";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ImageToUserPost";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_groupMembers";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_likes";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_views";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "AlbumImages" (
    "album_id" INTEGER NOT NULL,
    "image_id" INTEGER NOT NULL,

    PRIMARY KEY ("album_id", "image_id"),
    CONSTRAINT "AlbumImages_album_id_fkey" FOREIGN KEY ("album_id") REFERENCES "Album" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AlbumImages_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "Image" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AlbumTags" (
    "album_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,

    PRIMARY KEY ("album_id", "tag_id"),
    CONSTRAINT "AlbumTags_album_id_fkey" FOREIGN KEY ("album_id") REFERENCES "Album" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "AlbumTags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ChatGroupMembers" (
    "chat_groupId" INTEGER NOT NULL,
    "profile_id" INTEGER NOT NULL,

    PRIMARY KEY ("chat_groupId", "profile_id"),
    CONSTRAINT "ChatGroupMembers_chat_groupId_fkey" FOREIGN KEY ("chat_groupId") REFERENCES "ChatGroup" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ChatGroupMembers_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author_id" INTEGER NOT NULL,
    "linkId" INTEGER,
    CONSTRAINT "Post_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Post_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Link" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProfileViews" (
    "profile_id" INTEGER NOT NULL,
    "post_id" INTEGER NOT NULL,

    PRIMARY KEY ("profile_id", "post_id"),
    CONSTRAINT "ProfileViews_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProfileViews_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProfileLikes" (
    "profile_id" INTEGER NOT NULL,
    "post_id" INTEGER NOT NULL,

    PRIMARY KEY ("profile_id", "post_id"),
    CONSTRAINT "ProfileLikes_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProfileLikes_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ImageToPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ImageToPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Image" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ImageToPost_B_fkey" FOREIGN KEY ("B") REFERENCES "Post" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Album" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shown" BOOLEAN NOT NULL DEFAULT false,
    "author_id" INTEGER NOT NULL,
    CONSTRAINT "Album_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Album" ("created_at", "id", "name", "shown") SELECT "created_at", "id", "name", "shown" FROM "Album";
DROP TABLE "Album";
ALTER TABLE "new_Album" RENAME TO "Album";
CREATE TABLE "new_Avatar" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "profile_id" INTEGER NOT NULL,
    "shown" BOOLEAN NOT NULL DEFAULT true,
    "active" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Avatar_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Avatar" ("active", "id", "image", "shown") SELECT "active", "id", "image", "shown" FROM "Avatar";
DROP TABLE "Avatar";
ALTER TABLE "new_Avatar" RENAME TO "Avatar";
CREATE UNIQUE INDEX "Avatar_profile_id_key" ON "Avatar"("profile_id");
CREATE TABLE "new_ChatGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "is_personal_chat" BOOLEAN NOT NULL DEFAULT false,
    "admin_id" INTEGER NOT NULL,
    "avatar" TEXT NOT NULL,
    CONSTRAINT "ChatGroup_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ChatGroup" ("avatar", "id", "name") SELECT "avatar", "id", "name" FROM "ChatGroup";
DROP TABLE "ChatGroup";
ALTER TABLE "new_ChatGroup" RENAME TO "ChatGroup";
CREATE TABLE "new_ChatMessage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "sent_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author_id" INTEGER NOT NULL,
    "chat_groupId" INTEGER NOT NULL,
    "attached_image" TEXT NOT NULL,
    CONSTRAINT "ChatMessage_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ChatMessage_chat_groupId_fkey" FOREIGN KEY ("chat_groupId") REFERENCES "ChatGroup" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ChatMessage" ("content", "id") SELECT "content", "id" FROM "ChatMessage";
DROP TABLE "ChatMessage";
ALTER TABLE "new_ChatMessage" RENAME TO "ChatMessage";
CREATE TABLE "new_Friendship" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "profile1_id" INTEGER NOT NULL,
    "profile2_id" INTEGER NOT NULL,
    "accepted" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Friendship_profile1_id_fkey" FOREIGN KEY ("profile1_id") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Friendship_profile1_id_fkey" FOREIGN KEY ("profile1_id") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Friendship" ("accepted", "id") SELECT "accepted", "id" FROM "Friendship";
DROP TABLE "Friendship";
ALTER TABLE "new_Friendship" RENAME TO "Friendship";
CREATE TABLE "new_Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "filename" TEXT NOT NULL,
    "file" TEXT NOT NULL,
    "uploaded_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Image" ("id") SELECT "id" FROM "Image";
DROP TABLE "Image";
ALTER TABLE "new_Image" RENAME TO "Image";
CREATE TABLE "new_Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "username" TEXT,
    "surname" TEXT,
    "date_of_birth" DATETIME,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "about" TEXT,
    "signature" TEXT
);
INSERT INTO "new_Profile" ("about", "email", "id", "image", "name", "password", "signature", "surname", "username") SELECT "about", "email", "id", "image", "name", "password", "signature", "surname", "username" FROM "Profile";
DROP TABLE "Profile";
ALTER TABLE "new_Profile" RENAME TO "Profile";
CREATE UNIQUE INDEX "Profile_username_key" ON "Profile"("username");
CREATE UNIQUE INDEX "Profile_email_key" ON "Profile"("email");
CREATE TABLE "new_UserPostTags" (
    "post_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,

    PRIMARY KEY ("post_id", "tag_id"),
    CONSTRAINT "UserPostTags_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserPostTags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
DROP TABLE "UserPostTags";
ALTER TABLE "new_UserPostTags" RENAME TO "UserPostTags";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_ImageToPost_AB_unique" ON "_ImageToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_ImageToPost_B_index" ON "_ImageToPost"("B");
