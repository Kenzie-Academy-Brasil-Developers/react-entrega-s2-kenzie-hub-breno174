import Card from "../Card";
import "./styles.css";

function Tech({ dados }) {
  return (
    <div id="works">
      <h2>Meus trabalhos</h2>
      {dados.woks.map((element) => (
        <Card
          className="works-cards"
          titulo={element.tech}
          descrição={element.categori}
          icone={element.icon}
        />
      ))}
    </div>
  );
}

export default Tech;
