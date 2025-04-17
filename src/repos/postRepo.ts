import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { RequestPostType } from "../types/postType";

export const findPosts = async () => {
  return await prisma.posts.findMany({
    include: {
      categories: true,
      comments: true,
      likes: true,
      starts: true,
    },
  });
};

export const findPostById = async (id: string) => {
  return await prisma.posts.findUnique({
    where: {
      id,
    },
  });
};

export const createPost = async (data: RequestPostType) => {
  return await prisma.posts.create({
    data: {
      ...data,
      createdAt: datetime(),
    },
  });
};

export const updatePostById = async (id: string, data: RequestPostType) => {
  const post = await findPostById(id);
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
