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
//Styles
import { Container, Content, AnimationContainer, Botao } from "./styles";
import { toast } from "react-hot-toast";

function Login({ setUser }) {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatorio"),
    password: yup.string().required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  // console.log(
  //   api.post("/sessions", { email: "breno@kenzie.com.br", password: "123456" })
  // );
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
              <Input
                label="Login"
                placeholder="E-mail"
                register={register}
                name="email"
                // {...register("email")}
                required
              />
              {/* <span>{errors.email?.messege}</span> */}
              <Input
                required
                register={register}
                label="Senha"
                placeholder="Sua senha"
                name="password"
                type="password"
                // {...register("password")}
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

/**
 * onClick={() => {
                firstLock === true && secondtLock === true
                  ? history.push("/usuario")
                  : console.log("error");
              }}
 */
