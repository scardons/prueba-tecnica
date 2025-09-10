import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Clientes - Prueba Técnica",
      version: "1.0.0",
      description: "Servicio REST para consultar información básica de un cliente",
    },
  },
  apis: ["./src/interfaces/routes/*.ts"], // 👈 Rutas donde pondremos anotaciones Swagger
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app: Express, port: number) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  console.log(`📑 Swagger docs disponibles en http://localhost:${port}/api-docs`);
};
