import Card from "../Card";
import "./styles.css";

function Tech({ dados }) {
  return (
    <div id="user">
      <div id="usuario-final">
        <figure>
          <img id="picture" href={dados.img} />
        </figure>
        <h4>{dados.nome}</h4>
        <p>{dados.descrição}</p>
      </div>
      {dados.contato.map((element) => (
        <Card
          className="user-cards"
          titulo={element.tech}
          descrição={element.categori}
          icone={element.icon}
        />
      ))}
    </div>
  );
}

export default Tech;
