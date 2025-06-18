import { Prisma } from "../generated/prisma";

export type Album = Prisma.AlbumGetPayload<{
    include: {
        images: {
            select: {
                image: true
            }
        },
        topic: {
            select: {
                tag: true
            }
        }
    }
}>;

export type CreateAlbum = Prisma.AlbumUncheckedCreateInput

export type UpdateAlbum = Prisma.AlbumUpdateInput

export type CreateAlbumData = Prisma.AlbumImagesUncheckedCreateNestedManyWithoutAlbumInput

export type AlbumBody = {
    name: string,
    tags?: string[];
}
