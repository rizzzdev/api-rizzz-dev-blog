import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { RequestLikeType } from "../types/likeType";

export const findLikes = async () => {
  return await prisma.likes.findMany();
};

export const findLikeById = async (id: string) => {
  return await prisma.likes.findUnique({
    where: { id },
  });
};

export const createLike = async (data: RequestLikeType) => {
  return await prisma.likes.create({
    data: {
      ...data,
      createdAt: datetime(),
    },
  });
};

export const updateLikeById = async (id: string, data: RequestLikeType) => {
  const like = await findLikeById(id);
  return await prisma.likes.update({
    data: {
      ...like,
      ...data,
    },
    where: {
      id,
    },
  });
};
