import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { RequestPostToCategoryType } from "../types/postToCategoryType";

export const getPostToCategoriesRepo = async () => {
  return await prisma.postToCategories.findMany({
    include: {
      category: true,
      post: true,
    },
  });
};

export const getPostToCategoryByIdRepo = async (id: string) => {
  return await prisma.postToCategories.findUnique({
    where: {
      id,
    },
  });
};

export const createPostToCategoryRepo = async (
  data: RequestPostToCategoryType
) => {
  return await prisma.postToCategories.create({
    data: {
      ...data,
      createdAt: datetime(),
    },
  });
};

export const updatePostToCategoryByIdRepo = async (
  id: string,
  data: RequestPostToCategoryType
) => {
  const postToCategory = await getPostToCategoryByIdRepo(id);
  return await prisma.postToCategories.update({
    data: {
      ...postToCategory,
      ...data,
    },
    where: {
      id,
    },
  });
};

export const deletePostToCategoryByIdRepo = async (id: string) => {
  const postToCategory = getPostToCategoryByIdRepo(id);
  return await prisma.postToCategories.update({
    data: {
      ...postToCategory,
      deletedAt: datetime(),
    },
    where: {
      id,
    },
  });
};
