import "./styles.css";

function Card({ className, titulo, descrição, icone }) {
  //console.log(titulo, "titulo do card");
  return (
    <div className={className}>
      <img alt="nada" />
      <h4>{titulo}</h4>
      <p>{descrição}</p>
    </div>
  );
}

export default Card;
