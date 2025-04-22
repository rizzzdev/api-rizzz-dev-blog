import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { RequestTopicType } from "../types/topicType";

export const getTopicsRepo = async () => {
  return await prisma.topics.findMany({
    include: {
      articles: {
        include: {
          article: {
            include: {
              author: true,
              reaction: true,
              pageviews: true,
              stars: true,
            },
          },
        },
      },
    },
  });
};

export const getTopicByIdRepo = async (id: string) => {
  return await prisma.topics.findUnique({
    where: {
      id,
    },
  });
};

export const createTopicRepo = async (data: RequestTopicType) => {
  return await prisma.topics.create({
    data: {
      ...data,
      createdAt: datetime(),
    },
  });
};

export const updateTopicByIdRepo = async (
  id: string,
  data: RequestTopicType
) => {
  const topic = await getTopicByIdRepo(id);
  return await prisma.topics.update({
    data: {
      ...topic,
      ...data,
    },

    where: {
      id,
    },
  });
};

export const deleteTopicByIdRepo = async (id: string) => {
  const topic = getTopicByIdRepo(id);
  return await prisma.topics.update({
    data: {
      ...topic,
      deletedAt: datetime(),
    },
    where: {
      id,
    },
  });
};
