import client from "../client/prismaClient";
import { IErrors, errors } from "../config/errorCodes"
import { Prisma } from "../generated/prisma";
import { IError } from "../types/types"
import { User, CreateUser, UpdateUser } from "./types"

async function findUserByEmail(email: string){
    try {
        let user = await client.user.findUnique({
            where: {
                email: email
            }
        })
        return user;
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}
async function createUser(data: CreateUser){
    try{
        const user = await client.user.create({
            data: data
        })
        return user;
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }}


async function getUserById(id: number){
    try {
        let user = await client.user.findUnique({
            where: {
                id: id
            },
            select:{
                id: true,
                name: true,
                username: true,
                surname: true,
                dateOfBirth: true,
                email: true,
                password: true,
                signature: true,

                // image: true,
                // about: true?
            }
        })
        return user;
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function updateUserById(data: UpdateUser, id: number) {
    try {
        const currentUser = await client.user.findUnique({
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

        const user = await client.user.update({
            where: {
                id: id,
            },
            data: {
                name: updatedData.name,
                username: updatedData.username,
                surname: updatedData.surname,
                dateOfBirth: updatedData.dateOfBirth,
                email: updatedData.email,
                password: updatedData.password,
                signature: updatedData.signature,
            },
        });
        return user;

    } catch (err) {
        console.log(err);
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message);
                throw err;
            }
            if (err.code == 'P2015'){
                console.log(err.message);
                throw err;
            }
            if (err.code == 'P20019'){
                console.log(err.message);
                throw err;
            }
        }
    }
}

const userRepository = {
    findUserByEmail: findUserByEmail,
    createUser: createUser,
    getUserById: getUserById,
    updateUserById: updateUserById
}

export default userRepository;