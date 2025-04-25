import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { RequestAuthorType } from "../types/authorType";

export const getAuthorsRepo = async () => {
  return await prisma.authors.findMany({
    include: {
      sessions: true,
      articles: {
        include: {
          topics: true,
          reactions: true,
          stars: true,
          pageviews: true,
        },
      },
    },
  });
};

export const getAuthorByIdRepo = async (id: string) => {
  return await prisma.authors.findUnique({
    where: {
      id,
    },
  });
};

export const getAuthorByAuthorIdRepo = async (authorId: string) => {
  return await prisma.authors.findUnique({
    where: {
      authorId,
    },
  });
};

export const createAuthorRepo = async (data: RequestAuthorType) => {
  return await prisma.authors.create({
    data: {
      ...data,
      registeredAt: datetime(),
    },
  });
};

export const updateAuthorByIdRepo = async (
  id: string,
  data: RequestAuthorType
) => {
  const author = await getAuthorByIdRepo(id);
  return await prisma.authors.update({
    data: {
      ...author,
      ...data,
    },

    where: {
      id,
    },
  });
};

export const deleteAuthorByIdRepo = async (id: string) => {
  const author = getAuthorByIdRepo(id);
  return await prisma.authors.update({
    data: {
      ...author,
      deletedAt: datetime(),
    },
    where: {
      id,
    },
  });
};
