import Card from "../Card";
import "./styles.css";

function Tech({ dados }) {
  console.log(dados[0].techs[0].title);

  const haveTitle = (param) => {
    if (param === undefined) {
      return "sem titulo";
    } else {
      return param.title;
    }
  };
  const haveStatus = (param) => {
    if (param === undefined) {
      return "sem status";
    } else {
      return param.status;
    }
  };

  return (
    <div id="tech">
      <h2>Minhas Tecnologias</h2>
      {dados.map((element) => (
        <>
          <Card
            key={element.id}
            className="tech-cards"
            titulo={haveTitle(element.techs[0])}
            descrição={haveStatus(element.techs[0])}
            // icone={element.icon}
          />
        </>
      ))}
    </div>
  );
}

export default Tech;
