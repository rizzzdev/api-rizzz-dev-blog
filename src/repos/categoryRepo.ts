import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { RequestCategoryType } from "../types/categoryType";

export const findCategories = async () => {
  return await prisma.categories.findMany({
    include: {
      posts: true,
    },
  });
};

export const findCategoryById = async (id: string) => {
  return await prisma.categories.findUnique({
    where: {
      id,
    },
  });
};

export const createCategory = async (data: RequestCategoryType) => {
  return await prisma.categories.create({
    data: {
      ...data,
      createdAt: datetime(),
    },
  });
};

export const updateCategoryById = async (
  id: string,
  data: RequestCategoryType
) => {
  const category = await findCategoryById(id);
  return await prisma.categories.update({
    data: {
      ...category,
      ...data,
    },

    where: {
      id,
    },
  });
};
