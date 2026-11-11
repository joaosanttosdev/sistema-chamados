import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Sistema de Chamados</h1>

      <nav>
        <Link to="/">Início</Link>
        {" | "}
        <Link to="/chamados">Chamados</Link>
        {" | "}
        <Link to="/chamados/novo">Novo chamado</Link>
      </nav>
    </header>
  );
}

export default Header;
