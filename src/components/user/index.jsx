import Card from "../Card";
import "./styles.css";
//import user_placeholder from "../../assets/images";

function User({ dados }) {
  const one = dados;
  //console.log(one, "dados do card usuario");
  return (
    <div id="user">
      {/* <h2>Usuario {one.name}</h2> */}
      <div id="card-usuario">
        <div id="card-usuario-contatos">
          <figure>
            <img
              id="picture"
              alt={"one.name"}
              // src={user_placeholder}
              // width="50px"
              // height="50px"
            />
          </figure>
          <h4>{"one.nome"}</h4>
          <p>{"one.descrição"}</p>
        </div>
        {/* <Card
          className="user-cards"
          titulo={one.course_module}
          descrição={one.bio}
          //icone={one.icon}
        /> */}
      </div>
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
