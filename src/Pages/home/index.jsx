// COMPONENTS
import Button from "../../components/Button";
import Input from "../../components/Input";
//import { FiUser, FiLock } from "react-icons/fi";
// HOOKS - yup, form, react, router
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "../../services/api";
//material - UI
import TextField from "@mui/material/TextField";
//Styles
import { Container, Content, AnimationContainer, Botao } from "./styles";
import { toast } from "react-hot-toast";

function Login({ setUser }) {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Campo obrigatorio")
      .email("email necessesário"),
    password: yup
      .string()
      .required("Campo obrigatorio")
      .min(6, "minimo de 6 digitos"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  function login(data) {
    api
      .post("/sessions", data)
      .then((response) => {
        //aqui ele já faz o send e a validação para troca de pagina
        // passagem do token: response.data.token
        //passagem do usuario: response.data.user
        //console.log(response, "api post home");
        setUser(response.data);
        // Usar um (reset) do react-hook-form para limpar meus campos do formulario
        reset();
        history.push("/usuario");
      })
      .catch((err) => {
        toast.error("Email ou senha inválidos");
        console.error("ops! deu errado" + err);
      });
    // condiçao de verificaçaoi IF(data)
  }

  //onSubmit={handleSubmit(Verify)}
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(login)}>
            <h1>
              Kenzie <span>Hub</span>
            </h1>
            <div id="box">
              <TextField
                error={errors.email ? true : false}
                id="outlined-error"
                label="Login"
                helperText={errors.email ? "email invalido" : "  "}
                {...register("email")}
              />
              <TextField
                error={errors.password ? true : false}
                id="outlined-error"
                label="Senha"
                type="password"
                helperText={errors.password ? "senha invalida" : "  "}
                {...register("password")}
              />
              <Button type="submit">Logar</Button>
              <p>
                Criar uma Página para mostrar suas{" "}
                <span>habilidades metas e progresso</span>
              </p>
            </div>
          </form>
          <Botao type="button" onClick={() => history.push("/cadastro")}>
            Cadastrar
          </Botao>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default Login;
