const path = require("path");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API - Sistema de Chamados",
      version: "1.0.0",
      description: "Documentação da API REST do Sistema de Chamados",
    },
    servers: [{ url: "http://localhost:3000" }],
  },
  apis: [path.join(__dirname, "swagger", "*.js")],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
