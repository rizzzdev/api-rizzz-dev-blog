import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { RequestArticleToTopicType } from "../types/articleToTopicType";

export const getArticleToTopicsRepo = async () => {
  return await prisma.articleToTopics.findMany({
    include: {
      topic: true,
      article: true,
    },
  });
};

export const getArticleToTopicByIdRepo = async (id: string) => {
  return await prisma.articleToTopics.findUnique({
    where: {
      id,
    },
  });
};

export const createArticleToTopicRepo = async (
  data: RequestArticleToTopicType
) => {
  return await prisma.articleToTopics.create({
    data: {
      ...data,
      createdAt: datetime(),
    },
  });
};

export const updateArticleToTopicByIdRepo = async (
  id: string,
  data: RequestArticleToTopicType
) => {
  const ArticleToTopic = await getArticleToTopicByIdRepo(id);
  return await prisma.articleToTopics.update({
    data: {
      ...ArticleToTopic,
      ...data,
    },
    where: {
      id,
    },
  });
};

export const deleteArticleToTopicByIdRepo = async (id: string) => {
  const ArticleToTopic = getArticleToTopicByIdRepo(id);
  return await prisma.articleToTopics.update({
    data: {
      ...ArticleToTopic,
      deletedAt: datetime(),
    },
    where: {
      id,
    },
  });
};
