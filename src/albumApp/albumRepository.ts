import prisma from "../client/prismaClient";
import { Prisma } from "../generated/prisma/client";
import { CreateAlbum, CreateAlbumBody, UpdateAlbum } from "./types";


async function getAlbums() {
    try {
        let post = await prisma.album.findMany(
            {
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
            })
        return post
    } catch (err) {
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

async function createAlbum(data: CreateAlbum) {
    console.log(data)
    try {
        let createAlbum = await prisma.album.create({
            data: data,
            include: {
                topic: {
                    select: {
                        tag: true
                    }
                },
                images: {
                    select: {
                        image: true
                    }
                }
            }
        })
        return createAlbum
    } catch (err) {
        console.log("==================")
        console.log(err)

        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            if (err.code == 'P2002') {
                console.log(err.message)
                throw err
            }
        }
    }
}

async function editAlbum(data: UpdateAlbum, id: number) {
    try {
        console.log(id)
        return await prisma.album.update({
            where: { id },
            data,
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
        });
    } catch (err) {
        console.log("Error in editAlbum:", err);
        throw err;
    }
}

async function deleteAlbum(id: number) {
    try {
        // Спочатку видаляємо зв'язані записи
        await prisma.albumImages.deleteMany({
            where: { album_id: id }
        });

        await prisma.image.deleteMany({
            where: { id: id }
        });

        await prisma.albumTags.deleteMany({
            where: { album_id: id }
        });

        await prisma.tags.deleteMany({
            where: { id: id }
        });

        // Потім видаляємо сам пост
        const deletedAlbum = await prisma.album.delete({
            where: { id },
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
        });

        return deletedAlbum;
    } catch (error) {
        console.error("Error deleting post:", error);
        throw error;
    }
}



const albumRepository = {
    getAlbums,
    createAlbum,
    editAlbum,
    deleteAlbum,

}
export { albumRepository }