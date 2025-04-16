import { env } from "./config/env";
import server from "./server";

const port = env.port;

const app = server();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
