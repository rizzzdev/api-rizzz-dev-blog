import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { Users } from "../server/prisma";
import { RequestUserType } from "../types/userType";

export const getUsersRepo = async () => {
  return await prisma.users.findMany({
    include: {
      reaction: true,
      stars: true,
      pageviews: {
        include: {
          article: true,
        },
      },
    },
  });
};

export const getUserByIdRepo = async (id: string) => {
  return await prisma.users.findUnique({
    where: {
      id,
    },
    include: {
      reaction: true,
      stars: true,
      pageviews: {
        include: {
          article: true,
        },
      },
    },
  });
};

export const getUserByFullName = async (fullName: string) => {
  return await prisma.users.findUnique({
    where: {
      fullName,
    },
    include: {
      reaction: true,
      stars: true,
      pageviews: {
        include: {
          article: true,
        },
      },
    },
  });
};

export const createUserRepo = async (data: RequestUserType) => {
  return await prisma.users.create({
    data: {
      ...data,
      registeredAt: datetime(),
    },
    include: {
      reaction: true,
      stars: true,
      pageviews: {
        include: {
          article: true,
        },
      },
    },
  });
};

export const updateUserByIdRepo = async (id: string, data: RequestUserType) => {
  const user = (await getUserByIdRepo(id)) as Users;
  return await prisma.users.update({
    data: {
      ...user,
      ...data,
    },
    where: {
      id,
    },
    include: {
      reaction: true,
      stars: true,
      pageviews: {
        include: {
          article: true,
        },
      },
    },
  });
};

export const deleteUserByIdRepo = async (id: string) => {
  const user = getUserByIdRepo(id);
  return await prisma.users.update({
    data: {
      ...user,
      deletedAt: datetime(),
    },
    where: {
      id,
    },
    include: {
      reaction: true,
      stars: true,
      pageviews: {
        include: {
          article: true,
        },
      },
    },
  });
};
