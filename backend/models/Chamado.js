const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Chamado = sequelize.define(
  "Chamado",
  {
    cha_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    cha_titulo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    cha_descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    cha_solicitante: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    cha_setor: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    cha_prioridade: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "Média",
    },

    cha_status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "Aberto",
    },

    cha_data_abertura: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "chamado",
    timestamps: false,
  },
);

module.exports = Chamado;
