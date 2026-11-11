import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <hr />
      <p className="footer-piscando">🚧 SITE EM CONSTRUÇÃO 🚧</p>
      <p>
        Você é o visitante número{" "}
        <span className="footer-contador">000042</span>
      </p>
      <p>Sistema de Chamados · Programação Web/Mobile II · UGV</p>
      <p>© 2003 - Todos os direitos reservados - Best viewed in 800x600</p>
    </footer>
  );
}

export default Footer;
