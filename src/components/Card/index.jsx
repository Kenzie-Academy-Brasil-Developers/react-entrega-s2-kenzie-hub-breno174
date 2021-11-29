import "./styles.css";

function Card({ className, titulo, descrição, icone, click }) {
  return (
    <div className={className} onClick={() => click()}>
      <img className={"icons-" + className} alt="nada" src={icone} />
      <div className="content">
        <h4>{titulo}</h4>
        <p>{descrição}</p>
      </div>
    </div>
  );
}

export default Card;
