-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ChatGroup" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "is_personal_chat" BOOLEAN NOT NULL DEFAULT false,
    "avatar" TEXT NOT NULL,
    "admin_id" INTEGER NOT NULL,
    CONSTRAINT "ChatGroup_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "Profile" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ChatGroup" ("admin_id", "avatar", "id", "is_personal_chat", "name") SELECT "admin_id", "avatar", "id", "is_personal_chat", "name" FROM "ChatGroup";
DROP TABLE "ChatGroup";
ALTER TABLE "new_ChatGroup" RENAME TO "ChatGroup";
CREATE TABLE "new_ChatMessage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "sent_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "attached_image" TEXT NOT NULL,
    "author_id" INTEGER NOT NULL,
    "chat_groupId" INTEGER NOT NULL,
    CONSTRAINT "ChatMessage_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ChatMessage_chat_groupId_fkey" FOREIGN KEY ("chat_groupId") REFERENCES "ChatGroup" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ChatMessage" ("attached_image", "author_id", "chat_groupId", "content", "id", "sent_at") SELECT "attached_image", "author_id", "chat_groupId", "content", "id", "sent_at" FROM "ChatMessage";
DROP TABLE "ChatMessage";
ALTER TABLE "new_ChatMessage" RENAME TO "ChatMessage";
CREATE TABLE "new_chat_app_chatgroup_members" (
    "chat_groupId" INTEGER NOT NULL,
    "profile_id" INTEGER NOT NULL,

    PRIMARY KEY ("chat_groupId", "profile_id"),
    CONSTRAINT "chat_app_chatgroup_members_chat_groupId_fkey" FOREIGN KEY ("chat_groupId") REFERENCES "ChatGroup" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "chat_app_chatgroup_members_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_chat_app_chatgroup_members" ("chat_groupId", "profile_id") SELECT "chat_groupId", "profile_id" FROM "chat_app_chatgroup_members";
DROP TABLE "chat_app_chatgroup_members";
ALTER TABLE "new_chat_app_chatgroup_members" RENAME TO "chat_app_chatgroup_members";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
