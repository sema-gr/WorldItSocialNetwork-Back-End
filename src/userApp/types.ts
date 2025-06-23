import { Prisma } from "../generated/prisma";

export type User = Prisma.ProfileGetPayload<{
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
        chat_group_members: true, 
        chat_messages: true,
        administered_groups: true
    } 
}>


export type CreateUser = Prisma.ProfileUncheckedCreateInput

export type UpdateUser = Prisma.ProfileUncheckedUpdateInput
