// HOOKS - react, router
import * as React from "react";
import { useState } from "react";
// COMPONENTS
import user_placeholder from "../../assets/images/imagem.png";
import Tech from "../../components/Tech";
import Work from "../../components/work";
import User from "../../components/user";
import api from "../../services/api";
//Material - ui
import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
//styles
import { Container, Content, Head } from "./styles";

function Usuario({ dados, setUser, dataLogin }) {
  const [pessoa, setPessoa] = useState(dados.user);
  const meuToken = dados.token;
  const idUser = pessoa.id;

  function loadInfos(param) {
    if (param === true) {
      api
        .get(`/users/${idUser}`)
        .then((response) => {
          console.log(response, "get da api");
          setPessoa(response.data);
        })
        .catch((err) => {
          console.error("ops! deu errado na atualização " + err);
        });
    }
  }

  function SimpleMediaQuery() {
    const matches = useMediaQuery("(min-width:650px)");
    let media = {
      direction: "row",
      size: 4.2,
      user: 3.2,
    };

    if (matches === false) {
      media.direction = "column";
      media.size = 12;
      media.user = 12;
    }
    return media;
  }

  return (
    <>
      <Container>
        <Head>
          <h2>
            Kenzie <span>Hub</span>
          </h2>
          <div id="div-test">
            <figure>
              <img id="picture" alt={"one.name"} src={user_placeholder} />
            </figure>
          </div>
        </Head>
        <Grid container display="flex" width="90%">
          <Content direction={SimpleMediaQuery().direction}>
            <Grid item xs={SimpleMediaQuery().size}>
              <Tech dados={pessoa} token={meuToken} loadInfos={loadInfos} />
            </Grid>
            <Grid item xs={SimpleMediaQuery().size}>
              <Work dados={pessoa} token={meuToken} loadInfos={loadInfos} />
            </Grid>
            <Grid item xs={SimpleMediaQuery().user}>
              <User dados={pessoa} />
            </Grid>
          </Content>
        </Grid>
      </Container>
    </>
  );
}

export default Usuario;
