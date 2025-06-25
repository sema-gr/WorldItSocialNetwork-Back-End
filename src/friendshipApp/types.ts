import { Prisma } from "../generated/prisma"

export type IFriendship = Prisma.FriendshipGetPayload<{}>
export type CreateFriendship = Prisma.FriendshipUncheckedCreateInput
export type WhereFriendship = Prisma.FriendshipWhereUniqueInput
export type UpdateFriendship = Prisma.FriendshipUncheckedUpdateInput

export type AcceptedFriendshipBody = {
    id: number
}

export type AcceptedFriendshipWhere = Prisma.FriendshipProfile1_idProfile2_idCompoundUniqueInput

