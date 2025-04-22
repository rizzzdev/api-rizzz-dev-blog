import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { RequestStarType } from "../types/starType";

export const getStarsRepo = async () => {
  return await prisma.stars.findMany({
    include: {
      article: true,
      user: true,
    },
  });
};

export const getStarByIdRepo = async (id: string) => {
  return await prisma.stars.findUnique({
    where: { id },
  });
};

export const createStarRepo = async (data: RequestStarType) => {
  return await prisma.stars.create({
    data: {
      ...data,
      createdAt: datetime(),
    },
  });
};

export const updateStarByIdRepo = async (id: string, data: RequestStarType) => {
  const star = await getStarByIdRepo(id);
  return await prisma.stars.update({
    data: {
      ...star,
      ...data,
    },
    where: {
      id,
    },
  });
};

export const deleteStarByIdRepo = async (id: string) => {
  const star = getStarByIdRepo(id);
  return await prisma.stars.update({
    data: {
      ...star,
      deletedAt: datetime(),
    },
    where: {
      id,
    },
  });
};
