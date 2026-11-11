const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

const swaggerSpec = require("./swagger");
const sequelize = require("./config/database");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const chamadoRoutes = require("./routes/chamadoRoutes");
app.use("/chamados", chamadoRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Cria a tabela "chamado" no banco caso ela ainda não exista
sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
      console.log(`Swagger em http://localhost:${port}/api-docs`);
    });
  })
  .catch((erro) => {
    console.log("Erro ao conectar no banco:", erro.message);
  });
