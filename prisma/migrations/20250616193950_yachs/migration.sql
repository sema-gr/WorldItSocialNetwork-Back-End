/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserPostTags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `theme` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `Album` table. All the data in the column will be lost.
  - You are about to drop the column `albumId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `userPostId` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `likes` on the `UserPost` table. All the data in the column will be lost.
  - You are about to drop the column `links` on the `UserPost` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `UserPost` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `UserPost` table. All the data in the column will be lost.
  - You are about to drop the column `theme` on the `UserPost` table. All the data in the column will be lost.
  - You are about to drop the column `views` on the `UserPost` table. All the data in the column will be lost.
  - Added the required column `content` to the `UserPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `UserPost` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "User_username_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UserPostTags";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ChatGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "isPersonalChat" BOOLEAN NOT NULL DEFAULT false,
    "adminId" INTEGER NOT NULL,
    "avatar" TEXT NOT NULL,
    CONSTRAINT "ChatGroup_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ChatMessage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "sentAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" INTEGER NOT NULL,
    "chatGroupId" INTEGER NOT NULL,
    "attachedImage" TEXT NOT NULL,
    CONSTRAINT "ChatMessage_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ChatMessage_chatGroupId_fkey" FOREIGN KEY ("chatGroupId") REFERENCES "ChatGroup" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Link" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "userPostId" INTEGER NOT NULL,
    CONSTRAINT "Link_userPostId_fkey" FOREIGN KEY ("userPostId") REFERENCES "UserPost" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "username" TEXT,
    "surname" TEXT,
    "dateOfBirth" DATETIME,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "about" TEXT,
    "signature" TEXT
);

-- CreateTable
CREATE TABLE "Avatar" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "profileId" INTEGER NOT NULL,
    "shown" BOOLEAN NOT NULL DEFAULT true,
    "active" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Avatar_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_AlbumToImage" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_AlbumToImage_A_fkey" FOREIGN KEY ("A") REFERENCES "Album" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AlbumToImage_B_fkey" FOREIGN KEY ("B") REFERENCES "Image" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_groupMembers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_groupMembers_A_fkey" FOREIGN KEY ("A") REFERENCES "ChatGroup" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_groupMembers_B_fkey" FOREIGN KEY ("B") REFERENCES "Profile" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ImageToUserPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ImageToUserPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Image" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ImageToUserPost_B_fkey" FOREIGN KEY ("B") REFERENCES "UserPost" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_TagsToUserPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_TagsToUserPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Tags" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_TagsToUserPost_B_fkey" FOREIGN KEY ("B") REFERENCES "UserPost" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_views" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_views_A_fkey" FOREIGN KEY ("A") REFERENCES "Profile" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_views_B_fkey" FOREIGN KEY ("B") REFERENCES "UserPost" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_likes" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_likes_A_fkey" FOREIGN KEY ("A") REFERENCES "Profile" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_likes_B_fkey" FOREIGN KEY ("B") REFERENCES "UserPost" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Album" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shown" BOOLEAN NOT NULL DEFAULT false,
    "topic" TEXT,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "Album_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Album" ("authorId", "id", "name") SELECT "authorId", "id", "name" FROM "Album";
DROP TABLE "Album";
ALTER TABLE "new_Album" RENAME TO "Album";
CREATE TABLE "new_Friendship" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idFrom" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Friendship_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Friendship" ("id", "idFrom", "status", "userId") SELECT "id", "idFrom", "status", "userId" FROM "Friendship";
DROP TABLE "Friendship";
ALTER TABLE "new_Friendship" RENAME TO "Friendship";
CREATE TABLE "new_Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "uploadedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Image" ("id", "url") SELECT "id", "url" FROM "Image";
DROP TABLE "Image";
ALTER TABLE "new_Image" RENAME TO "Image";
CREATE TABLE "new_UserPost" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "UserPost_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserPost" ("authorId", "id") SELECT "authorId", "id" FROM "UserPost";
DROP TABLE "UserPost";
ALTER TABLE "new_UserPost" RENAME TO "UserPost";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Profile_username_key" ON "Profile"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_email_key" ON "Profile"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Avatar_profileId_key" ON "Avatar"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "_AlbumToImage_AB_unique" ON "_AlbumToImage"("A", "B");

-- CreateIndex
CREATE INDEX "_AlbumToImage_B_index" ON "_AlbumToImage"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_groupMembers_AB_unique" ON "_groupMembers"("A", "B");

-- CreateIndex
CREATE INDEX "_groupMembers_B_index" ON "_groupMembers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ImageToUserPost_AB_unique" ON "_ImageToUserPost"("A", "B");

-- CreateIndex
CREATE INDEX "_ImageToUserPost_B_index" ON "_ImageToUserPost"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_TagsToUserPost_AB_unique" ON "_TagsToUserPost"("A", "B");

-- CreateIndex
CREATE INDEX "_TagsToUserPost_B_index" ON "_TagsToUserPost"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_views_AB_unique" ON "_views"("A", "B");

-- CreateIndex
CREATE INDEX "_views_B_index" ON "_views"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_likes_AB_unique" ON "_likes"("A", "B");

-- CreateIndex
CREATE INDEX "_likes_B_index" ON "_likes"("B");
