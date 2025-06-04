-- CreateTable
CREATE TABLE "Album" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "Album_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "userPostId" INTEGER,
    "albumId" INTEGER,
    CONSTRAINT "Image_userPostId_fkey" FOREIGN KEY ("userPostId") REFERENCES "UserPost" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Image_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserPost" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "theme" TEXT,
    "text" TEXT NOT NULL,
    "links" TEXT,
    "views" INTEGER,
    "likes" INTEGER,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "UserPost_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tags" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UserPostTags" (
    "userPostId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    PRIMARY KEY ("userPostId", "tagId"),
    CONSTRAINT "UserPostTags_userPostId_fkey" FOREIGN KEY ("userPostId") REFERENCES "UserPost" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserPostTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "username" TEXT,
    "surname" TEXT,
    "dateOfBirth" DATETIME,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "signature" TEXT,
    "image" TEXT,
    "about" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
