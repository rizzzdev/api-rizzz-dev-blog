import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { RequestUserType } from "../types/userType";

export const findUsers = async () => {
  return await prisma.users.findMany({
    include: {
      comments: true,
      likes: true,
      stars: true,
    },
  });
};

export const findUserById = async (id: string) => {
  return await prisma.users.findUnique({
    where: {
      id,
    },
  });
};

export const createUser = async (data: RequestUserType) => {
  return await prisma.users.create({
    data: {
      ...data,
      registeredAt: datetime(),
    },
  });
};

export const updateUserById = async (id: string, data: RequestUserType) => {
  const user = await findUserById(id);
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
