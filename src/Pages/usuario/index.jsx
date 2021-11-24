import { Children, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Content, Head } from "./styles";
import Tech from "../../components/Tech";
import Work from "../../components/work";
import User from "../../components/user";
import api from "../../services/api";

function Usuario({ dados }) {
  const userOne = dados[0];
  console.log(dados);
  return (
    <>
      <Container>
        <Head>
          <h2>
            Kenzie <span>Hub</span>
          </h2>
          {/* {Children.dados.icon} */}
        </Head>
        <Content>
          <Tech dados={dados} />
          <Work dados={dados} />
          <User dados={dados} />
          <Link to="/">Voltar</Link>
        </Content>
      </Container>
    </>
  );
}

export default Usuario;

/**
          <Tech />
          <User />
          <Work />
 */
