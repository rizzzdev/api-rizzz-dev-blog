import { datetime } from "../libs/datetime";
import { prisma } from "../server";
import { RequestSeriesType } from "../types/seriesType";

export const getSeriesRepo = async () => {
  return await prisma.series.findMany({
    include: {
      articles: true,
    },
  });
};

export const getSeriesByIdRepo = async (id: string) => {
  return await prisma.series.findUnique({
    where: {
      id,
    },
  });
};

export const createSeriesRepo = async (data: RequestSeriesType) => {
  return await prisma.series.create({
    data: {
      ...data,
      createdAt: datetime(),
    },
  });
};

export const updateSeriesByIdRepo = async (
  id: string,
  data: RequestSeriesType
) => {
  const series = await getSeriesByIdRepo(id);
  return await prisma.series.update({
    data: {
      ...series,
      ...data,
    },

    where: {
      id,
    },
    include: {
      articles: true,
    },
  });
};

export const deleteSeriesByIdRepo = async (id: string) => {
  const series = getSeriesByIdRepo(id);
  return await prisma.series.update({
    data: {
      ...series,
      deletedAt: datetime(),
    },
    where: {
      id,
    },
  });
};
