import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h2>Bem-vindo ao Sistema de Chamados</h2>

      <p className="home-novo">*** NOVO!!! AGORA COM BANCO DE DADOS ***</p>

      <hr />

      <p>
        Registre problemas de suporte técnico, acompanhe o andamento e marque
        como resolvido quando o atendimento terminar.
      </p>

      <hr />

      <div className="home-atalhos">
        <Link to="/chamados">Ver chamados</Link>
        <Link to="/chamados/novo">Abrir novo chamado</Link>
      </div>
    </div>
  );
}

export default Home;
