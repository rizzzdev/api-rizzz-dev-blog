const mode: "PROD" | "DEV" = "DEV";
const port = process.env.PORT ?? 3201;
const databaseUrl =
  mode === "DEV" ? process.env.DEV_DATABASE_URL : process.env.PROD_DATABASE_URL;
const clientUrl =
  mode === "DEV" ? process.env.DEV_CLIENT_URL : process.env.PROD_CLIENT_URL;

export const env = {
  port,
  databaseUrl,
  clientUrl,
};
