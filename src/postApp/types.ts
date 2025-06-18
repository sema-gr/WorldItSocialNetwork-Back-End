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

export type IUpdatePost = {
    title: string;
    content: string;
    links?: string[];
    tags?: string[];
    images?: {
        id?: number;
        url: string;
    }[]
    author_id: number;
};

export type CreatePostData = Prisma.PostImagesUncheckedCreateNestedManyWithoutPostInput;

export type Image = Prisma.ImageUncheckedCreateInput;

export type CreateImageData = Prisma.PostImagesUncheckedCreateNestedManyWithoutPostInput


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
export type ImageCreate = Prisma.ImageCreateNestedOneWithoutPostImagesInput

export type UpdateCreatePost = Prisma.PostUncheckedUpdateInput