import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { RequestSessionType } from "../types/sessionType";

export const getSessionsRepo = async () => {
  return await prisma.sessions.findMany({
    include: {
      author: true,
    },
  });
};

export const getSessionByIdRepo = async (id: string) => {
  return await prisma.sessions.findUnique({
    where: { id },
  });
};

export const createSessionRepo = async (data: RequestSessionType) => {
  return await prisma.sessions.create({
    data: {
      ...data,
      loggedInAt: datetime(),
    },
  });
};

export const updateSessionByIdRepo = async (
  id: string,
  data: RequestSessionType
) => {
  const session = await getSessionByIdRepo(id);
  return await prisma.sessions.update({
    data: {
      ...session,
      ...data,
    },
    where: {
      id,
    },
  });
};

export const deleteSessionByIdRepo = async (id: string) => {
  const session = getSessionByIdRepo(id);
  return await prisma.sessions.update({
    data: {
      ...session,
      loggedOutAdt: datetime(),
    },
    where: {
      id,
    },
  });
};
