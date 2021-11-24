import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { Container, Background, Content, AnimationContainer } from "./styles";
//import { FiUser, FiMail, FiLock } from "react-icons/fi";
import Button from "../../components/Button";
import Input from "../../components/Input";

function Cadastro({ dados }) {
  //console.log(dados);
  const history = useHistory();

  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatorio"),
    email: yup.string().required("Campo obrigatorio").email("email invalido"),
    bio: yup.string().required("Campo obrigatorio"),
    contact: yup.string().required("Campo obrigatorio"),
    course_module: yup.string().required("Campo obrigatorio"), //vai ser outra coisa
    password: yup.string().required("Campo obrigatorio"),
    confsenha: yup.string().required("Campo obrigatorio"),
  });

  const submitFunction = (data) => {
    // const pessoa = { email, senha };
    console.log(data);
    api
      .post("/users", data)
      .then((response) => console.log(response.data))
      .catch((err) => console.error("ops! deu errado" + err));
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <Container>
      {/* <Background /> */}
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(submitFunction)}>
            <h1>
              Kenzie <span>Hub</span>
            </h1>
            <div id="box">
              <Input
                label="Nome"
                placeholder="Seu nome"
                name="name"
                register={register}
              />
              <Input
                label="Email"
                placeholder="Seu melhor email"
                name="email"
                register={register}
              />
              <Input
                label="BIO"
                placeholder="BIO"
                name="bio"
                register={register}
              />
              <Input
                label="Contato"
                placeholder="Contato"
                type="text"
                name="contact"
                register={register}
              />
              {/**FALTA CRIAR A PARTE DO MODULO, QUE SERÁ POR SELECT,
               * TEM NO HELP Q2 COMPARTILHARAM UM @MUI MUITO UTIL PARA ISSO */}
              <Input
                label="curso"
                placeholder="Curso"
                type="text"
                name="course_module"
                register={register}
              />
              {/**VOU CRIRA ESSE INPUT TEMPORARIO APENAS PARA TESTAR O GET CREATE */}
              <Input
                label="senha"
                placeholder="Senha"
                type="password"
                name="password"
                register={register}
              />
              <Input
                label="Confirmação da senha"
                placeholder="Confirmaçar senha"
                type="password"
                name="confsenha"
                register={register}
              />
              <Button type="submit">Enviar</Button>
              <p>
                Já tem uma conta? Faça seu <Link to="/">login</Link>
              </p>
            </div>
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
