import client from "../client/prismaClient";
import { IErrors, errors } from "../config/errorCodes"
import { Prisma } from "../generated/prisma";
import { CreateUser, UpdateUser } from "./types"

async function findUserByEmail(email: string) {
    try {
        let user = await client.profile.findUnique({
            where: {
                email: email
            }
        })
        return user;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code in Object.keys(errors)) {
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}
async function createUser(data: CreateUser) {
    try {
        const user = await client.profile.create({
            data: data
        })
        return user;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code in Object.keys(errors)) {
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}


async function getUserById(id: number) {
    try {
        let user = await client.profile.findUnique({
            where: {
                id: id
            },
            select: {
                id: true,
                name: true,
                username: true,
                surname: true,
                date_of_birth: true,
                email: true,
                password: true,
                signature: true,
                image: true,
                friendship_from: true,
                friendship_to: true,
                chat_messages: true,
                chat_group_members: true,
                administered_groups: true,
                // about: true?
            },

        })
        return user;
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code in Object.keys(errors)) {
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function updateUserById(data: UpdateUser, id: number) {
    try {
        const currentUser = await client.profile.findUnique({
            where: {
                id: id,
            },
        });

        if (!currentUser) {
            throw new Error("User not found");
        }

        const updatedData = {
            ...currentUser,
            ...data,
        };

        const user = await client.profile.update({
            where: {
                id: id,
            },
            data: {
                name: updatedData.name,
                username: updatedData.username,
                surname: updatedData.surname,
                date_of_birth: updatedData.date_of_birth,
                email: updatedData.email,
                password: updatedData.password,
                signature: updatedData.signature,
                image: updatedData.image
            },
        });
        return user;

    } catch (err) {
        console.log(err);
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

async function getUsers() {
    try {
        const users = await client.profile.findMany({
            include: {
                post: true,
                friendship_from: { include: { profile1: true, profile2: true } },
                friendship_to: { include: { profile1: true, profile2: true } },
                chat_group_members: true,
                administered_groups: true,
                chat_messages: true
            }
        });
        return users;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const userRepository = {
    findUserByEmail: findUserByEmail,
    createUser: createUser,
    getUserById: getUserById,
    updateUserById: updateUserById,
    getUsers: getUsers
}

export default userRepository;