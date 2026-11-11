import API_URL from "./api.js";

// Toda a comunicação com a rota /chamados do Back-end fica aqui

async function listarChamados() {
  const resposta = await fetch(`${API_URL}/chamados`);
  return resposta.json();
}

async function buscarChamado(id) {
  const resposta = await fetch(`${API_URL}/chamados/${id}`);
  return resposta.json();
}

async function inserirChamado(chamado) {
  const resposta = await fetch(`${API_URL}/chamados`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(chamado),
  });

  if (!resposta.ok) {
    throw new Error("Erro ao cadastrar o chamado");
  }

  return resposta.json();
}

async function atualizarChamado(id, chamado) {
  const resposta = await fetch(`${API_URL}/chamados/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(chamado),
  });

  if (!resposta.ok) {
    throw new Error("Erro ao alterar o chamado");
  }

  return resposta.json();
}

async function excluirChamado(id) {
  const resposta = await fetch(`${API_URL}/chamados/${id}`, {
    method: "DELETE",
  });

  if (!resposta.ok) {
    throw new Error("Erro ao excluir o chamado");
  }

  return resposta.json();
}

export {
  listarChamados,
  buscarChamado,
  inserirChamado,
  atualizarChamado,
  excluirChamado,
};
