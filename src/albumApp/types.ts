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

export type AlbumCorrect = Prisma.AlbumGetPayload<{
    include: {
        topic: {
            select: {
                tag: true
            }
        }
    }
}>;

export type CreateAlbum = Prisma.AlbumUncheckedCreateInput

export type UpdateAlbum = Prisma.AlbumUncheckedUpdateInput

export type CreateAlbumData = Prisma.AlbumImagesUncheckedCreateNestedManyWithoutAlbumInput

export type AlbumUpdateBody = {
    name?: string,
    tags?: string[],
    images?: {
        image: {
            id?: number;
            filename: string;
        }
    }[],
    created_at?: Date
}

export type AlbumBody = {
    name: string,
    topic?: string[];
}

export type CreateAlbumBody = {
    name: string,
    topic: string[],
    author_id: number,
    images: undefined
}
