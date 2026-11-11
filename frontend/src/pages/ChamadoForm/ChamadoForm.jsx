import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  buscarChamado,
  inserirChamado,
  atualizarChamado,
} from "../../services/chamadoService.js";
import Botao from "../../components/Botao/Botao.jsx";
import "./ChamadoForm.css";

const chamadoVazio = {
  cha_titulo: "",
  cha_descricao: "",
  cha_solicitante: "",
  cha_setor: "",
  cha_prioridade: "Média",
  cha_status: "Aberto",
};

// O mesmo formulário serve para cadastrar e para editar:
// /chamados/novo        -> cadastro (não tem id na URL)
// /chamados/editar/5    -> edição do chamado 5
function ChamadoForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [chamado, setChamado] = useState(chamadoVazio);

  useEffect(() => {
    if (id) {
      carregarChamado();
    } else {
      setChamado(chamadoVazio);
    }
  }, [id]);

  async function carregarChamado() {
    const dados = await buscarChamado(id);
    setChamado(dados);
  }

  function alterarCampo(evento) {
    setChamado({
      ...chamado,
      [evento.target.name]: evento.target.value,
    });
  }

  async function salvar(evento) {
    evento.preventDefault();

    try {
      if (id) {
        await atualizarChamado(id, chamado);
      } else {
        await inserirChamado(chamado);
      }

      navigate("/chamados");
    } catch (erro) {
      alert(erro.message);
    }
  }

  return (
    <div>
      <h2>{id ? `Editar chamado #${id}` : "Novo chamado"}</h2>

      <form className="form-chamado" onSubmit={salvar}>
        <label>
          Título
          <input
            name="cha_titulo"
            value={chamado.cha_titulo}
            onChange={alterarCampo}
            required
          />
        </label>

        <label>
          Descrição
          <textarea
            name="cha_descricao"
            rows="4"
            value={chamado.cha_descricao}
            onChange={alterarCampo}
            required
          />
        </label>

        <label>
          Solicitante
          <input
            name="cha_solicitante"
            value={chamado.cha_solicitante}
            onChange={alterarCampo}
            required
          />
        </label>

        <label>
          Setor
          <input
            name="cha_setor"
            value={chamado.cha_setor}
            onChange={alterarCampo}
            required
          />
        </label>

        <label>
          Prioridade
          <select
            name="cha_prioridade"
            value={chamado.cha_prioridade}
            onChange={alterarCampo}
          >
            <option>Baixa</option>
            <option>Média</option>
            <option>Alta</option>
          </select>
        </label>

        <label>
          Status
          <select
            name="cha_status"
            value={chamado.cha_status}
            onChange={alterarCampo}
          >
            <option>Aberto</option>
            <option>Em andamento</option>
            <option>Resolvido</option>
          </select>
        </label>

        <div className="form-botoes">
          <Botao
            texto="Cancelar"
            variante="secundario"
            onClick={() => navigate("/chamados")}
          />
          <Botao texto={id ? "Salvar alterações" : "Cadastrar"} tipo="submit" />
        </div>
      </form>
    </div>
  );
}

export default ChamadoForm;
