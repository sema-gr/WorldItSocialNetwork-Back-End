import { Prisma } from "../generated/prisma";

export type Post = Prisma.UserPostGetPayload<{
    include: {
        images: {
            select: {
                id: true;
                url: true;
                uploadedAt: true;
            }
        },
        tags: {
            select: {
                name: true
            }
        }
    }
}>;


export type CreatePost = Prisma.UserPostUncheckedCreateInput;

export type IUpdatePost = Prisma.UserPostUpdateInput;

export type CreatePostData = Prisma.ImageUncheckedCreateNestedManyWithoutUserPostInput;
