import Card from "../Card";
import "./styles.css";

function Tech({ dados }) {
  return (
    <div id="tech">
      <h2>Minhas Tecnologias</h2>
      {dados.technologes.map((element) => (
        <Card
          className="tech-cards"
          titulo={element.tech}
          descrição={element.categori}
          icone={element.icon}
        />
      ))}
    </div>
  );
}

export default Tech;
