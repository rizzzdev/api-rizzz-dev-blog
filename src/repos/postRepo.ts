import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { RequestPostType } from "../types/postType";

export const getPostsRepo = async () => {
  return await prisma.posts.findMany({
    include: {
      categories: {
        include: {
          category: true,
        },
      },
      comments: {
        include: {
          user: true,
        },
      },
      likes: {
        include: {
          user: true,
        },
      },
      stars: {
        include: {
          user: true,
        },
      },
      author: true,
    },
  });
};

export const getPostByIdRepo = async (id: string) => {
  return await prisma.posts.findUnique({
    where: {
      id,
    },
  });
};

export const createPostRepo = async (data: RequestPostType) => {
  return await prisma.posts.create({
    data: {
      ...data,
      createdAt: datetime(),
    },
  });
};

export const updatePostByIdRepo = async (id: string, data: RequestPostType) => {
  const post = await getPostByIdRepo(id);
  return await prisma.posts.update({
    data: {
      ...post,
      ...data,
    },
    where: {
      id,
    },
  });
};

export const deletePostByIdRepo = async (id: string) => {
  const post = getPostByIdRepo(id);
  return await prisma.posts.update({
    data: {
      ...post,
      deletedAt: datetime(),
    },
    where: {
      id,
    },
  });
};
