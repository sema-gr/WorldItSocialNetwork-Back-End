-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Friendship" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "profile1_id" INTEGER NOT NULL,
    "profile2_id" INTEGER NOT NULL,
    "accepted" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Friendship_profile1_id_fkey" FOREIGN KEY ("profile1_id") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Friendship_profile2_id_fkey" FOREIGN KEY ("profile2_id") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Friendship" ("accepted", "id", "profile1_id", "profile2_id") SELECT "accepted", "id", "profile1_id", "profile2_id" FROM "Friendship";
DROP TABLE "Friendship";
ALTER TABLE "new_Friendship" RENAME TO "Friendship";
CREATE UNIQUE INDEX "Friendship_profile1_id_profile2_id_key" ON "Friendship"("profile1_id", "profile2_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
