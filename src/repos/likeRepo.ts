import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { RequestLikeType } from "../types/likeType";

export const getLikesRepo = async () => {
  return await prisma.likes.findMany({
    include: {
      comment: true,
      post: true,
      user: true,
    },
  });
};

export const getLikeByIdRepo = async (id: string) => {
  return await prisma.likes.findUnique({
    where: { id },
  });
};

export const createLikeRepo = async (data: RequestLikeType) => {
  return await prisma.likes.create({
    data: {
      ...data,
      createdAt: datetime(),
    },
  });
};

export const updateLikeByIdRepo = async (id: string, data: RequestLikeType) => {
  const like = await getLikeByIdRepo(id);
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

export const deleteLikeByIdRepo = async (id: string) => {
  const like = getLikeByIdRepo(id);
  return await prisma.likes.update({
    data: {
      ...like,
      deletedAt: datetime(),
    },
    where: {
      id,
    },
  });
};
