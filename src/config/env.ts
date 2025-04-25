import "dotenv/config";

const mode = process.env.NODE_ENV ?? "DEV";
const port = process.env.PORT;
const databaseUrl =
  mode === "DEV" ? process.env.DEV_DATABASE_URL : process.env.PROD_DATABASE_URL;
const clientUrl =
  mode === "DEV" ? process.env.DEV_CLIENT_URL : process.env.PROD_CLIENT_URL;

export const env = {
  port,
  databaseUrl,
  clientUrl,
};
