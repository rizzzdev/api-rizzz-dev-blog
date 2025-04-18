import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { RequestUserType } from "../types/userType";

export const getUsersRepo = async () => {
  return await prisma.users.findMany({
    include: {
      comments: true,
      likes: true,
      stars: true,
    },
  });
};

export const getUserByIdRepo = async (id: string) => {
  return await prisma.users.findUnique({
    where: {
      id,
    },
  });
};

export const createUserRepo = async (data: RequestUserType) => {
  return await prisma.users.create({
    data: {
      ...data,
      registeredAt: datetime(),
    },
  });
};

export const updateUserByIdRepo = async (id: string, data: RequestUserType) => {
  const user = await getUserByIdRepo(id);
  return await prisma.users.update({
    data: {
      ...user,
      ...data,
    },
    where: {
      id,
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
  });
};
