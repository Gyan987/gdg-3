import { createServer } from "http";
import app from "./app";
import { connectToDatabase } from "./config/db";
import { env } from "./config/env";

const server = createServer(app);

const start = async () => {
  await connectToDatabase(env.MONGODB_URI);

  server.listen(env.PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${env.PORT}`);
  });
};

start().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
