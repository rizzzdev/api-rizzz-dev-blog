import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { RequestPageviewType } from "../types/pageviewType";

export const getPageviewsRepo = async () => {
  return await prisma.pageviews.findMany({
    include: {
      post: true,
      user: true,
    },
  });
};

export const getPageviewByIdRepo = async (id: string) => {
  return await prisma.pageviews.findUnique({
    where: {
      id,
    },
  });
};

export const createPageviewRepo = async (data: RequestPageviewType) => {
  return await prisma.pageviews.create({
    data: {
      ...data,
      createdAt: datetime(),
    },
  });
};

export const updatePageviewByIdRepo = async (
  id: string,
  data: RequestPageviewType
) => {
  const pageview = await getPageviewByIdRepo(id);
  return await prisma.pageviews.update({
    data: {
      ...pageview,
      ...data,
    },
    where: {
      id,
    },
  });
};

export const deletePageviewByIdRepo = async (id: string) => {
  const pageview = await getPageviewByIdRepo(id);
  return await prisma.pageviews.update({
    data: {
      ...pageview,
      deletedAt: datetime(),
    },
    where: {
      id,
    },
  });
};
