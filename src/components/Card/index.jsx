import "./styles.css";

function Card({ className, titulo, descrição, icone }) {
  return (
    <div className={className}>
      <img alt="nada" />
      <h4>{titulo}</h4>
      <p>{descrição}</p>
    </div>
  );
}

export default Card;
