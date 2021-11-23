import { Children, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Content, Head } from "./styles";
import Tech from "../../components/Tech";
import User from "../../components/user";
import Work from "../../components/work";

function Usuario({ dados }) {
  return (
    <>
      <Container>
        <Head>
          <h2>
            Kenzie <span>Hub</span>
          </h2>
          {Children.dados.icon}
        </Head>
        <Content>
          <Tech />
          <User />
          <Work />
          <Link to="/">Voltar</Link>
        </Content>
      </Container>
    </>
  );
}

export default Usuario;
