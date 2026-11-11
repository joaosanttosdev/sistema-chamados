const Chamado = require("../models/Chamado");

const CAMPOS = [
  "cha_titulo",
  "cha_descricao",
  "cha_solicitante",
  "cha_setor",
  "cha_prioridade",
  "cha_status",
];

function extrairCampos(body = {}) {
  const dados = {};
  for (const campo of CAMPOS) {
    if (body[campo] !== undefined) dados[campo] = body[campo];
  }
  return dados;
}

function tratarErro(res, erro) {
  if (erro.name === "SequelizeValidationError") {
    return res.status(400).json({ erro: erro.errors.map((e) => e.message) });
  }
  res.status(500).json({ erro: erro.message });
}

async function listar(req, res) {
  try {
    const chamados = await Chamado.findAll({
      order: [["cha_id", "DESC"]],
    });

    res.json(chamados);
  } catch (erro) {
    tratarErro(res, erro);
  }
}

async function buscar(req, res) {
  try {
    const chamado = await Chamado.findByPk(req.params.id);

    if (!chamado) {
      return res.status(404).json({ mensagem: "Chamado não encontrado" });
    }

    res.json(chamado);
  } catch (erro) {
    tratarErro(res, erro);
  }
}

async function inserir(req, res) {
  try {
    const chamado = await Chamado.create(extrairCampos(req.body));

    res.status(201).json(chamado);
  } catch (erro) {
    tratarErro(res, erro);
  }
}

async function atualizar(req, res) {
  try {
    const chamado = await Chamado.findByPk(req.params.id);

    if (!chamado) {
      return res.status(404).json({ mensagem: "Chamado não encontrado" });
    }

    await chamado.update(extrairCampos(req.body));

    res.json(chamado);
  } catch (erro) {
    tratarErro(res, erro);
  }
}

async function excluir(req, res) {
  try {
    const chamado = await Chamado.findByPk(req.params.id);

    if (!chamado) {
      return res.status(404).json({ mensagem: "Chamado não encontrado" });
    }

    await chamado.destroy();

    res.json({
      mensagem: "Chamado excluído com sucesso",
    });
  } catch (erro) {
    tratarErro(res, erro);
  }
}

module.exports = {
  listar,
  buscar,
  inserir,
  atualizar,
  excluir,
};
