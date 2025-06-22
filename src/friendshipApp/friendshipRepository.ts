import { Prisma } from "../generated/prisma";
import client from "../client/prismaClient";
import { errors, IErrors } from "../config/errorCodes";
import { CreateFriendship, UpdateFriendship, WhereFriendship } from "./types";

async function createFriendship(data: CreateFriendship) {
    try {
        console.log(data)
        const friendship = await client.friendship.create({
            data: {
                profile2_id: data.profile2_id,
                profile1_id: data.profile1_id
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
        console.log("Error in editAlbum:", err);
        throw err;
    }
}

const friendshipRepository = {
    createFriendship: createFriendship,
    getFriendship: getFriendship,
    updateFriendship: updateFriendship
}
export default friendshipRepository;