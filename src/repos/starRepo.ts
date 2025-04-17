import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { RequestStarType } from "../types/starType";

export const findAStars = async () => {
  return await prisma.stars.findMany();
};

export const findStarById = async (id: string) => {
  return await prisma.stars.findUnique({
    where: {
      id,
    },
  });
};

export const createStar = async (data: RequestStarType) => {
  return await prisma.stars.create({
    data: {
      ...data,
      createdAt: datetime(),
    },
  });
};

export const updateStarById = async (id: string, data: RequestStarType) => {
  const star = await findStarById(id);
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
