import { Prisma } from "../generated/prisma";
import client from "../client/prismaClient";
import { errors, IErrors } from "../config/errorCodes";
import { CreateFriendship} from "./types";
async function createFriendship(data: CreateFriendship){
    try{
        const friendship = await client.friendship.create({
            data: data
        })
        return friendship;
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }}

const friendshipRepository = {
    createFriendship: createFriendship
}

export default friendshipRepository;