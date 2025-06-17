import { Prisma } from "../generated/prisma";

export type Post = Prisma.PostGetPayload<{
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
}>;


export type CreatePost = Prisma.PostUncheckedCreateInput;

export type IUpdatePost = Prisma.PostUpdateInput;

export type CreatePostData = Prisma.PostImagesUncheckedCreateNestedManyWithoutPostInput;

export type Image = Prisma.ImageUncheckedCreateInput;

export interface CreatePostBody {
    title: string;
    content: string;
    links?: string[];
    tags?: string[];
    images?: {
        url: string;
    }[]
    author_id: number;
}