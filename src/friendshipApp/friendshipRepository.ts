import { Prisma } from "../generated/prisma";
import client from "../client/prismaClient";
import { errors, IErrors } from "../config/errorCodes";
import { CreateFriendship, UpdateFriendship, WhereFriendship } from "./types";

async function createFriendship(data: CreateFriendship) {
    try {
        console.log(data)
        const friendship = await client.friendship.create({
            data: {
                profile1_id: data.profile1_id,
                profile2_id: data.profile2_id,
            }
        })
        return friendship;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code in Object.keys(errors)) {
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}



async function getFriendship() {
    try {
        let friendship = await client.friendship.findMany()
        return friendship
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            if (err.code == 'P2002') {
                console.log(err.message);
                throw err;
            }
            if (err.code == 'P2015') {
                console.log(err.message);
                throw err;
            }
            if (err.code == 'P20019') {
                console.log(err.message);
                throw err;
            }
        }
    }
}

async function updateFriendship(data: UpdateFriendship, where: WhereFriendship) {
    try {
        return await client.friendship.update({
            where: where,
            data,
        });
    } catch (err) {
        console.log("Error in updateFriendship:", err);
        throw err;
    }
}
async function deleteFriendship(where: WhereFriendship) {
    try {
        // Перевіряємо, чи існує запис дружби
        const friendToDelete = await client.friendship.findUnique({
            where: where,
            include: {
                profile1: true,
                profile2: true, // Включаємо profile2 для повноти даних
            },
        });

        // Якщо запис не знайдено, викидаємо помилку
        if (!friendToDelete) {
            console.error("Friendship not found for where:", where);
            throw new Error("Friendship not found!");
        }

        // Видаляємо запис дружби
        await client.friendship.delete({
            where: where,
        });

        // Повертаємо видалений запис
        return friendToDelete;
    } catch (err) {
        console.error("Error deleting friendship:", err);
        throw err;
    }
}

const friendshipRepository = {
    createFriendship: createFriendship,
    getFriendship: getFriendship,
    updateFriendship: updateFriendship,
    deleteFriendship: deleteFriendship
}
export default friendshipRepository;