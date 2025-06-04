import { Prisma } from "../generated/prisma";

export type Album = Prisma.AlbumGetPayload<{
    include: {
        images: {
            select: {
                id: true,
                url: true,
                albumId: true
            }
        },
    }
}>;

export type CreateAlbum = Prisma.AlbumUncheckedCreateInput

export type UpdateAlbum = Prisma.AlbumUpdateInput

export type CreateAlbumData = Prisma.ImageUncheckedCreateNestedManyWithoutAlbumInput
