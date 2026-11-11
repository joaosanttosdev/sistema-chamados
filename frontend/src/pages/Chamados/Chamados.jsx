import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  listarChamados,
  excluirChamado,
} from "../../services/chamadoService.js";
import Botao from "../../components/Botao/Botao.jsx";
import "./Chamados.css";

function Chamados() {
  const [chamados, setChamados] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    buscarChamados();
  }, []);

  async function buscarChamados() {
    const dados = await listarChamados();
    setChamados(dados);
  }

  async function excluir(chamado) {
    const confirmou = window.confirm(
      `Excluir o chamado "${chamado.cha_titulo}"?`,
    );

    if (!confirmou) {
      return;
    }

    await excluirChamado(chamado.cha_id);
    buscarChamados();
  }

  return (
    <div>
      <h2>Chamados cadastrados</h2>

      {chamados.length === 0 && <p>Nenhum chamado cadastrado.</p>}

      <table className="tabela-chamados">
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Solicitante</th>
            <th>Setor</th>
            <th>Prioridade</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {chamados.map((chamado) => (
            <tr key={chamado.cha_id}>
              <td>{chamado.cha_id}</td>
              <td>{chamado.cha_titulo}</td>
              <td>{chamado.cha_solicitante}</td>
              <td>{chamado.cha_setor}</td>
              <td>{chamado.cha_prioridade}</td>
              <td>{chamado.cha_status}</td>
              <td>
                <div className="acoes">
                  <Botao
                    texto="Editar"
                    onClick={() =>
                      navigate(`/chamados/editar/${chamado.cha_id}`)
                    }
                  />
                  <Botao
                    texto="Excluir"
                    variante="perigo"
                    onClick={() => excluir(chamado)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Chamados;
