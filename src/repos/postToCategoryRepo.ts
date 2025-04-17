import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { RequestPostToCategoryType } from "../types/postToCategoryType";
import { RequestUserType } from "../types/userType";

export const findPostToCategories = async () => {
  return await prisma.postToCategories.findMany();
};

export const findPostToCategoryById = async (id: string) => {
  return await prisma.postToCategories.findUnique({
    where: {
      id,
    },
  });
};

export const createPostToCategory = async (data: RequestPostToCategoryType) => {
  return await prisma.postToCategories.create({
    data: {
      ...data,
      createdAt: datetime(),
    },
  });
};

export const updatePostToCategoryById = async (
  id: string,
  data: RequestUserType
) => {
  const postToCategory = await findPostToCategoryById(id);
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
