import Card from "../Card";
import "./styles.css";

function Work({ dados }) {
  function haveWork(param) {
    if (param === undefined) {
      return "sem titulo";
    } else {
      return "tem work";
    }
  }

  return (
    <div id="works">
      <h2>Meus trabalhos</h2>
      {dados.map((element) => (
        <Card
          key={element.id}
          className="works-cards"
          titulo={haveWork(element.work)}
          //descrição={element.categori}
          //icone={element.icon}
        />
      ))}
    </div>
  );
}

export default Work;
