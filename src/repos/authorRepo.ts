import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { RequestAuthorType } from "../types/authorType";

export const findAuthors = async () => {
  return await prisma.authors.findMany({
    include: {
      posts: true,
    },
  });
};

export const findAuthorById = async (id: string) => {
  return await prisma.authors.findUnique({
    where: {
      id,
    },
  });
};

export const createAuthor = async (data: RequestAuthorType) => {
  return await prisma.authors.create({
    data: {
      ...data,
      registeredAt: datetime(),
    },
  });
};

export const updateAuthorById = async (id: string, data: RequestAuthorType) => {
  const author = await findAuthorById(id);
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
