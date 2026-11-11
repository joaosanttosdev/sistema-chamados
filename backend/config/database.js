const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("chamados", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
