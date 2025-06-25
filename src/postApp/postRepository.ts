import prisma from "../client/prismaClient";
import { Prisma } from "../generated/prisma/client";
import { CreatePost, Post } from "./types";

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
        const postToDelete = await prisma.post.findUnique({
            where: { id },
            include: {
                images: {
                    include: {
                        image: true
                    }
                },
                tags: {
                    include: {
                        tag: true
                    }
                }
            }
        });

        if (!postToDelete) {
            throw console.log("Post not found!")
        }

        await prisma.post_app_post_image.deleteMany({
            where: { post_id: id }
        });

        const imageIds = postToDelete.images.map((img) => img.image.id);
        await prisma.image.deleteMany({
            where: { id: { in: imageIds } }
        });

        await prisma.post_app_post_tag.deleteMany({
            where: { post_id: id }
        });

        await prisma.post.delete({
            where: { id }
        });

        return postToDelete;
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