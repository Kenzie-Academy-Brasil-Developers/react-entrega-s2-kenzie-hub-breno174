import { Container, Content, AnimationContainer } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FiUser, FiLock } from "react-icons/fi";
import { useHistory } from "react-router-dom";

function Login({ dados }) {
  const history = useHistory();
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form>
            <h1>
              Kenzie <span>Hub</span>
            </h1>
            <Input label="Nome" placeholder="Seu nome" />
            <Input
              label="Senha"
              placeholder="Uma senha bem segura"
              type="password"
            />
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
