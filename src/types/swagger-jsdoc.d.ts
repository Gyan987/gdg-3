declare module "swagger-jsdoc" {
  const swaggerJSDoc: (options: {
    definition: Record<string, unknown>;
    apis: string[];
  }) => object;
  export default swaggerJSDoc;
}
