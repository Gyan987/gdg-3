import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { env } from "../config/env";

const baseUrl = env.PUBLIC_BASE_URL ?? `http://0.0.0.0:${env.PORT}`;

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Student API",
      version: "1.0.0",
      description: "API documentation",
    },
    servers: [{ url: baseUrl }],
    components: {
      schemas: {
        StudentInput: {
          type: "object",
          required: ["name"],
          properties: {
            name: { type: "string" },
            email: { type: "string" },
            age: { type: "number" },
            course: { type: "string" },
          },
        },
        StudentUpdateInput: {
          type: "object",
          required: ["id"],
          properties: {
            id: { type: "string" },
            name: { type: "string" },
            email: { type: "string" },
            age: { type: "number" },
            course: { type: "string" },
          },
        },
        SignupInput: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: { type: "string" },
            email: { type: "string" },
            password: { type: "string" },
          },
        },
        LoginInput: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: { type: "string" },
            password: { type: "string" },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"],
});

export { swaggerUi };
