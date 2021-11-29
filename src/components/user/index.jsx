import Card from "../Card";
import "./styles.css";
import user_placeholder from "../../assets/images/imagem.png";
import { useHistory } from "react-router-dom";
import smartphone from "../../assets/images/smartphone.png";
import mail from "../../assets/images/mail.png";

function User({ dados }) {
  const one = dados;

  const history = useHistory();

  return (
    <div id="user">
      {/* <h2>Usuario {one.name}</h2> */}
      <div id="card-usuario">
        <div id="card-usuario-foto">
          <figure>
            <img id="picture" alt={"one.name"} src={user_placeholder} />
          </figure>
        </div>
        <div id="user-descricao">
          <h4>{one.name}</h4>
          <p>{one.course_module}</p>
        </div>
      </div>
      <div id="dados-usuario">
        <Card
          className="user-cards-contact number"
          titulo={"Ligar agora"}
          descrição={one.contact}
          icone={smartphone}
        />
        <Card
          className="user-cards-contact email"
          titulo={"Enviar um email"}
          descrição={one.email}
          icone={mail}
        />
      </div>
      <button id="sair" onClick={() => history.push("/")}>
        Sair
      </button>
    </div>
  );
}

export default User;

/**
 * <div id="user">
      <div id="usuario-final">
        <figure>
          <img id="picture" href={one.img} alt={one.name} />
        </figure>
        <h4>{one.nome}</h4>
        <p>{one.descrição}</p>
      </div>
      {one.contato.map((element) => (
        <Card
          className="user-cards"
          titulo={element.tech}
          descrição={element.categori}
          icone={element.icon}
        />
      ))}
    </div>
 */
