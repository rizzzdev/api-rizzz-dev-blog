import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { RequestCategoryType } from "../types/categoryType";

export const getCategoriesRepo = async () => {
  return await prisma.categories.findMany({
    include: {
      posts: {
        include: {
          post: {
            include: {
              author: true,
              comments: true,
              likes: true,
              pageviews: true,
              stars: true,
            },
          },
        },
      },
    },
  });
};

export const getCategoryByIdRepo = async (id: string) => {
  return await prisma.categories.findUnique({
    where: {
      id,
    },
  });
};

export const createCategoryRepo = async (data: RequestCategoryType) => {
  return await prisma.categories.create({
    data: {
      ...data,
      createdAt: datetime(),
    },
  });
};

export const updateCategoryByIdRepo = async (
  id: string,
  data: RequestCategoryType
) => {
  const category = await getCategoryByIdRepo(id);
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

export const deleteCategoryByIdRepo = async (id: string) => {
  const category = getCategoryByIdRepo(id);
  return await prisma.categories.update({
    data: {
      ...category,
      deletedAt: datetime(),
    },
    where: {
      id,
    },
  });
};
