import Card from "../Card";
import "./styles.css";

function Work({ dados }) {
  const jobs = dados.works;
  //console.log(jobs, "dados recebidos do work");

  function haveWork(param) {
    if (param === undefined) {
      return "sem titulo";
    } else {
      return "tem work";
    }
  }

  return (
    <div id="works">
      <div id="works-title">
        <h2>Meus trabalhos</h2>
        <button>+</button>
      </div>
      {jobs.map((element) => (
        <Card
          key={element.id}
          className="works-cards"
          titulo={haveWork(element)}
          //descrição={element.categori}
          //icone={element.icon}
        />
      ))}
    </div>
  );
}

export default Work;
