import express, { Request, Response, NextFunction } from "express";
import routes from "./routes";
import { swaggerUi, swaggerSpec } from "./docs/swagger";

const app = express();

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "Student management API. Use /api for Swagger UI.",
  });
});

app.get("/api-docs.json", (_req: Request, res: Response) => {
  res.status(200).json(swaggerSpec);
});

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(routes);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

export default app;
