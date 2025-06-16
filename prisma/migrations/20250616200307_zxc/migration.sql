/*
  Warnings:

  - You are about to drop the column `idFrom` on the `Friendship` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Friendship` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Friendship` table. All the data in the column will be lost.
  - Added the required column `idFromId` to the `Friendship` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idTo` to the `Friendship` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Friendship" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idTo" INTEGER NOT NULL,
    "idFromId" INTEGER NOT NULL,
    "accepted" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Friendship_idFromId_fkey" FOREIGN KEY ("idFromId") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Friendship_idTo_fkey" FOREIGN KEY ("idTo") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Friendship" ("id") SELECT "id" FROM "Friendship";
DROP TABLE "Friendship";
ALTER TABLE "new_Friendship" RENAME TO "Friendship";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
