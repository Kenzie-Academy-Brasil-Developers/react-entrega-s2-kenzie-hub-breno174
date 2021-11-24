import { Container, Content, AnimationContainer } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
//import { FiUser, FiLock } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";

function Login({ setUser }) {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatorio").email("email invalido"),
    password: yup.string().required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  // console.log(
  //   api.post("/sessions", { email: "breno@kenzie.com.br", password: "123456" })
  // );
  function login(data) {
    console.log(data);
    // api
    //   .post("/sessions", data)
    //   .then((response) => console.log(response))
    //   .catch((err) => console.error("ops! deu errado" + err));
    //condiçao de verificaçaoi IF(data)
    //history.push();
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
                placeholder="Login"
                {...register("email")}
                required
              />
              <span>{errors.email?.messege}</span>
              <Input
                required
                label="Senha"
                placeholder="Sua senha"
                type="password"
                {...register("password")}
              />
              {/* <span>{errors.senha?.messege}</span> */}
              <Button type="submit">Logar</Button>
              <p>
                Criar uma Página para mostrar suas{" "}
                <span>habilidades metas e progresso</span>
              </p>
            </div>
          </form>
          <Button onClick={() => history.push("/cadastro")}>Cadastrar</Button>
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
