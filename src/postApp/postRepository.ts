import prisma from "../client/prismaClient";
import { Prisma } from "../generated/prisma/client";
import { CreatePost } from "./types";

async function getPosts() {
    try {
        let post = await prisma.userPost.findMany(
            {
                include: {
                    images: {
                        select: {
                            id: true,
                            url: true,
                            uploadedAt: true
                        }
                    },
                    tags: {
                        select: {
                            name: true
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

async function createPost(data: CreatePost) {
    try {
        let createPost = await prisma.userPost.create({
            data: data,
            include: {
                images: {
                    select: {
                        id: true,
                        url: true,
                        uploadedAt: true
                    }
                },
                tags: {
                    select: {
                        name: true
                    }
                }
            }
        })
        return createPost
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            if (err.code == 'P2002') {
                console.log(err.message)
                throw err
            }
        }
    }
}

async function editPost(data: any, id: number) {
    try {
        return await prisma.userPost.update({
            where: { id },
            data,
            include: {
                images: {
                    select: {
                        id: true,
                        url: true,
                        uploadedAt: true
                    }
                },
                tags: {
                    select: {
                        name: true
                    }
                }
            }
        });
    } catch (err) {
        console.log("Error in editPost:", err);
        throw err;
    }
}

async function deletePost(id: number) {
    try {
        // Спочатку видаляємо зв'язані записи
        // await prisma.userPostTags.deleteMany({
        //     where: { userPostId: id }
        // });

        // await prisma.image.deleteMany({
        //     where: { userPostId: id }
        // });

        // Потім видаляємо сам пост
        const deletedPost = await prisma.userPost.delete({
            where: { id },
            include: {
                images: {
                    select: {
                        id: true,
                        url: true,
                        uploadedAt: true
                    }
                },
                tags: {
                    select: {
                        name: true
                    }
                }
            }
        });

        return deletedPost;
    } catch (error) {
        console.error("Error deleting post:", error);
        throw error;
    }
}



const postRepository = {
    getPosts,
    createPost,
    editPost,
    deletePost,

}
export { postRepository }