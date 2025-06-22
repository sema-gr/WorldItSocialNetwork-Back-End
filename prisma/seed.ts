import { PrismaClient } from "../src/generated/prisma";

const client = new PrismaClient()

async function updateFriendship() {
    try {
        return await client.friendship.delete({
            where: {
                id: 2
            }
        });
    } catch (err) {
        console.log("Error in editAlbum:", err);
        throw err;
    }
}

updateFriendship()