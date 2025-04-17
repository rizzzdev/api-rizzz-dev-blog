import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { RequestCommentType } from "../types/commentType";

export const findComments = async () => {
  return await prisma.comments.findMany({
    include: {
      likes: true,
    },
  });
};

export const findCommentById = async (id: string) => {
  return await prisma.comments.findUnique({
    where: { id },
  });
};

export const createComment = async (data: RequestCommentType) => {
  return await prisma.comments.create({
    data: {
      ...data,
      createdAt: datetime(),
    },
  });
};

export const updateCommentById = async (
  id: string,
  data: RequestCommentType
) => {
  const comment = await findCommentById(id);
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
