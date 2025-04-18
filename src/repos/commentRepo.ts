import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { RequestCommentType } from "../types/commentType";

export const getCommentsRepo = async () => {
  return await prisma.comments.findMany({
    include: {
      likes: {
        include: {
          user: true,
        },
      },
      post: true,
      user: true,
    },
  });
};

export const getCommentByIdRepo = async (id: string) => {
  return await prisma.comments.findUnique({
    where: { id },
  });
};

export const createCommentRepo = async (data: RequestCommentType) => {
  return await prisma.comments.create({
    data: {
      ...data,
      createdAt: datetime(),
    },
  });
};

export const updateCommentByIdRepo = async (
  id: string,
  data: RequestCommentType
) => {
  const comment = await getCommentByIdRepo(id);
  return await prisma.comments.update({
    data: {
      ...comment,
      ...data,
    },
    where: {
      id,
    },
  });
};

export const deleteCommentsByIdRepo = async (id: string) => {
  const comments = getCommentByIdRepo(id);
  return await prisma.comments.update({
    data: {
      ...comments,
      deletedAt: datetime(),
    },
    where: {
      id,
    },
  });
};
