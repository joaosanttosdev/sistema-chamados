const Chamado = require("../models/Chamado");

async function listar(req, res) {
  try {
    const chamados = await Chamado.findAll({
      order: [["cha_id", "DESC"]],
    });

    res.json(chamados);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
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
    res.status(500).json({ erro: erro.message });
  }
}

async function inserir(req, res) {
  try {
    const chamado = await Chamado.create({
      cha_titulo: req.body.cha_titulo,
      cha_descricao: req.body.cha_descricao,
      cha_solicitante: req.body.cha_solicitante,
      cha_setor: req.body.cha_setor,
      cha_prioridade: req.body.cha_prioridade,
      cha_status: req.body.cha_status,
    });

    res.status(201).json(chamado);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
}

async function atualizar(req, res) {
  try {
    const chamado = await Chamado.findByPk(req.params.id);

    if (!chamado) {
      return res.status(404).json({ mensagem: "Chamado não encontrado" });
    }

    await chamado.update({
      cha_titulo: req.body.cha_titulo,
      cha_descricao: req.body.cha_descricao,
      cha_solicitante: req.body.cha_solicitante,
      cha_setor: req.body.cha_setor,
      cha_prioridade: req.body.cha_prioridade,
      cha_status: req.body.cha_status,
    });

    res.json(chamado);
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
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
    res.status(500).json({ erro: erro.message });
  }
}

module.exports = {
  listar,
  buscar,
  inserir,
  atualizar,
  excluir,
};
