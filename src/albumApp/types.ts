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

export type AlbumUpdateBody = {
    name?: string,
    tags?: string[],
    images?: {
        id?: number;
        url: string;
    }[],
    created_at?: Date
}

export type AlbumBody = {
    name: string,
    tags?: string[];
}
