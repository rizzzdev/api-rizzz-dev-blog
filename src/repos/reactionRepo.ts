import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { Reactions } from "../server/prisma";
import { RequestReactionType } from "../types/reactionType";

export const getReactionsRepo = async () => {
  return await prisma.reactions.findMany({
    include: {
      article: true,
      user: true,
    },
  });
};

export const getReactionByIdRepo = async (id: string) => {
  return await prisma.reactions.findUnique({
    include: {
      article: true,
      user: true,
    },
    where: { id },
  });
};

export const createReactionRepo = async (data: RequestReactionType) => {
  return await prisma.reactions.create({
    data: {
      ...data,
      createdAt: datetime(),
    },
    include: {
      article: true,
      user: true,
    },
  });
};

export const updateReactionByIdRepo = async (
  id: string,
  data: RequestReactionType
) => {
  const reaction = (await getReactionByIdRepo(id)) as Reactions;
  return await prisma.reactions.update({
    data: {
      ...reaction,
      ...data,
    },
    where: {
      id,
    },
    include: {
      article: true,
      user: true,
    },
  });
};

export const deleteReactionsByIdRepo = async (id: string) => {
  const reactions = getReactionByIdRepo(id);
  return await prisma.reactions.update({
    data: {
      ...reactions,
      deletedAt: datetime(),
    },
    where: {
      id,
    },
    include: {
      article: true,
      user: true,
    },
  });
};
