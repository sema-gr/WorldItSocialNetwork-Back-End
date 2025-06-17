import prisma from "../client/prismaClient";
import { Prisma } from "../generated/prisma/client";
import { CreatePost } from "./types";

async function getPosts() {
    try {
        let post = await prisma.post.findMany(
            {
                include: {
                    images: {
                        select: {
                            image: true
                        }
                    },
                    tags: {
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

async function createPost(data: CreatePost) {
    try {
        let createPost = await prisma.post.create({
            data: data,
            include: {
                images: {
                    select: {
                        image: true
                    }
                },
                tags: {
                    select: {
                        tag: true
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
        return await prisma.post.update({
            where: { id },
            data,
            include: {
                images: {
                    select: {
                        image: true
                    }
                },
                tags: {
                    select: {
                        tag: true
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
        const deletedPost = await prisma.post.delete({
            where: { id },
            include: {
                images: {
                    select: {
                        image: true
                    }
                },
                tags: {
                    select: {
                        tag: true
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