import "./Botao.css";

function Botao(props) {
  return (
    <button
      type={props.tipo || "button"}
      className={`botao ${props.variante || ""}`}
      onClick={props.onClick}
    >
      {props.texto}
    </button>
  );
}

export default Botao;
