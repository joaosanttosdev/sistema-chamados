import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>★ Sistema de Chamados ★</h1>

      <marquee className="header-letreiro" scrollamount="6">
        *** BEM-VINDO AO MELHOR SISTEMA DE CHAMADOS DA INTERNET *** MELHOR VISTO
        NO NETSCAPE 4.0 EM 800x600 ***
      </marquee>

      <nav>
        [ <Link to="/">Início</Link> ] [ <Link to="/chamados">Chamados</Link> ]
        [ <Link to="/chamados/novo">Novo chamado</Link> ]
      </nav>
    </header>
  );
}

export default Header;
