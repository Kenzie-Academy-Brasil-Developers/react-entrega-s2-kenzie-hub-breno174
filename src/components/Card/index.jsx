import "./styles.css";

function Card({ className, titulo, descrição, icone }) {
  //console.log(titulo, "titulo do card");
  //criar uma condicional para quando for receber pro pros icone, identificar o nome(string)
  //e a partir da string o icone será estabelecido.
  return (
    <div className={className}>
      <img alt="nada" />
      <h4>{titulo}</h4>
      <p>{descrição}</p>
    </div>
  );
}

export default Card;
