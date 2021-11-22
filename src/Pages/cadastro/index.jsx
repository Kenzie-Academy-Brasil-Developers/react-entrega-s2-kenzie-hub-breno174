import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { Container, Background, Content, AnimationContainer } from "./styles";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import Button from "../../components/Button";
import Input from "../../components/Input";

function Cadastro({ user, setUser }) {
  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatorio").email("email invalido"),
    senha: yup.string().required("Campo obrigatorio"),
  });

  const submitFunction = ({ email, senha }) => {
    const pessoa = { email, senha };
    api.post("/");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(submitFunction)}>
            <h1>
              Kenzie <spam>Hub</spam>
            </h1>
            <Input label="Nome" placeholder="Seu nome" />
            <Input label="Email" placeholder="Seu melhor email" />
            <Input label="biografia" placeholder="BIO" />
            <Input
              label="Senha"
              placeholder="Uma senha bem segura"
              type="password"
            />
            <Input
              label="Confirmação da senha"
              placeholder="Confirmação da senha"
              type="password"
            />
            <Button>Enviar</Button>
            <p>
              Já tem uma conta? Faça seu <Link to="/">login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default Cadastro;

/**
 * <>
      <h2>MENU</h2>
      <form onSubmit={handleSubmit(submitFunction)}>
        <input {...register("email")} />
        <input {...register("senha")} />
      </form>
      <button type="submit" onClick={history.push("/usuario")}>
        enviar
      </button>
      <Link to="/cadastro">Não é cadastrado?</Link>
    </>
 */
