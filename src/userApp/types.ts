import { Prisma } from "../generated/prisma";

export type User = Prisma.UserGetPayload<{
    select: {
        id: true,
        name: true,
        username: true,
        surname: true,
        dateOfBirth: true,
        email: true,
        password: true,
        signature: true,
        image: true,
    }
}>


export type CreateUser = Prisma.UserUncheckedCreateInput

export type UpdateUser = Prisma.UserUncheckedUpdateInput
