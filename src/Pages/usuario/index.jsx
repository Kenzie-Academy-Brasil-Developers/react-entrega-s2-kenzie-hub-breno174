// HOOKS - react, router
import * as React from "react";
import { Children, useState } from "react";
import { Link } from "react-router-dom";
// COMPONENTS
import Tech from "../../components/Tech";
import Work from "../../components/work";
import User from "../../components/user";
//Material - ui
import { Grid, TextField, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
//styles
import { Container, Content, Head } from "./styles";

function Usuario({ dados }) {
  const pessoa = dados.user;
  //console.log(dados, "dados usuario");
  const meuToken = dados.token;
  //console.log(meuToken);

  //Para cadastro de tecnologias:
  /**
   * @URL => https://mui.com/pt/components/modal/
   * é a caixa de alert para fazer cadastros!
   * @returns modal;
   */

  function SimpleMediaQuery() {
    const matches = useMediaQuery("(min-width:600px)");
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
          <div id="div-test"></div>
        </Head>
        <Grid container display="flex" width="90%">
          <Content direction={SimpleMediaQuery().direction}>
            <Grid item xs={SimpleMediaQuery().size}>
              <Tech dados={pessoa} token={meuToken} />
            </Grid>
            <Grid item xs={SimpleMediaQuery().size}>
              <Work dados={pessoa} />
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
