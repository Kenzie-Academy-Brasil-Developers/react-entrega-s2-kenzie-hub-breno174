import { Container, Content, AnimationContainer } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FiUser, FiLock } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";

function Login({ dados }) {
  const [user, setUser] = useState([]);
  let firstLock = false;
  let secondtLock = false;
  console.log(dados);

  const history = useHistory();

  const formSchema = yup.object().shape({
    nome: yup.string().required("Campo obrigatorio"),
    senha: yup.string().required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    api
      .post("/sessions")
      .then((response) => setUser(response))
      .catch((err) => console.error("ops! deu errado" + err));
  }, []);

  function Logar(param) {}

  function Verify({ nome, senha }) {
    const pessoa = { nome, senha };
    user.forEach((usuario) => {
      if (usuario.name === nome) {
        firstLock = true;
      }
      if (usuario.name === nome) {
        secondtLock = true;
      }
    });
  }
  //onSubmit={handleSubmit(Verify)}
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form>
            <h1>
              Kenzie <span>Hub</span>
            </h1>
            <Input
              label="Nome"
              placeholder="Seu nome"
              {...register("nome")}
              required
            />
            {errors.nome?.messege}
            <Input
              required
              label="Senha"
              placeholder="Uma senha bem segura"
              type="password"
              {...register("senha")}
            />
            {errors.senha?.messege}
            <Button onClick={() => history.push("/usuario")}>Logar</Button>
            <p>
              Criar uma Página para mostrar suas{" "}
              <span>habilidades metas e progresso</span>.
            </p>
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
