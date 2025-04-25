import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { Articles } from "../server/prisma";
import { RequestArticleType } from "../types/articleType";

export const getArticlesRepo = async () => {
  return await prisma.articles.findMany({
    include: {
      topics: {
        include: {
          topic: true,
        },
      },
      reactions: {
        include: {
          user: true,
        },
      },
      stars: {
        include: {
          user: true,
        },
      },
      author: true,
      pageviews: {
        include: {
          user: true,
        },
      },
    },
  });
};

export const getArticleByIdRepo = async (id: string) => {
  return await prisma.articles.findUnique({
    where: {
      id,
    },
    include: {
      topics: {
        include: {
          topic: true,
        },
      },
      reactions: {
        include: {
          user: true,
        },
      },
      stars: {
        include: {
          user: true,
        },
      },
      author: true,
      pageviews: {
        include: {
          user: true,
        },
      },
    },
  });
};

export const createArticleRepo = async (data: RequestArticleType) => {
  return await prisma.articles.create({
    data: {
      ...data,
      createdAt: datetime(),
    },
  });
};

export const updateArticleByIdRepo = async (
  id: string,
  data: RequestArticleType
) => {
  const article = (await getArticleByIdRepo(id)) as Articles;
  return await prisma.articles.update({
    data: {
      ...article,
      ...data,
    },
    where: {
      id,
    },
  });
};

export const deleteArticleByIdRepo = async (id: string) => {
  const article = getArticleByIdRepo(id);
  return await prisma.articles.update({
    data: {
      ...article,
      deletedAt: datetime(),
    },
    where: {
      id,
    },
  });
};
