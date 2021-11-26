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
  //const userOne = dados[0];
  const pessoa = dados.user;
  console.log(dados, "dados usuario");
  //console.log(userOne, "dados: o 1 dos usuario");

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
      size: 3.8,
    };

    if (matches === false) {
      media.direction = "column";
      media.size = 12;
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
              <Tech dados={pessoa} />
            </Grid>
            <Grid item xs={SimpleMediaQuery().size}>
              <Work dados={pessoa} />
            </Grid>
            <Grid item xs={SimpleMediaQuery().size}>
              <User dados={pessoa} />
            </Grid>
          </Content>
          <Link to="/">Voltar</Link>
        </Grid>
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
