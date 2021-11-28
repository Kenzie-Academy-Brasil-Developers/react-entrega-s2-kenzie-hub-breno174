// HOOKS - form, yup, react, router
import * as yup from "yup";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// Componets
import api from "../../services/api";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { toast } from "react-hot-toast";
//Material - UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

import {
  Container,
  Background,
  Content,
  AnimationContainer,
  style,
} from "./styles";

function Cadastro({ dados }) {
  //console.log(dados);
  const history = useHistory();
  /**
   * @import do mui ToggleButtonGrop
   *   - primeiro segundo terceito quarto*  => @modulos && texto embaixo
   */

  /**
   * @URL => https://mui.com/pt/components/modal/
   * é a caixa de alert para fazer cadastros!
   * @returns modal;
   */

  //corpot do meu objeto PESSOA:
  const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatorio"),
    email: yup.string().required("Campo obrigatorio").email("email invalido"),
    bio: yup.string().required("Campo obrigatorio"),
    contact: yup.string().required("Campo obrigatorio"),
    course_module: yup.string().required("Campo obrigatorio"), //vai ser outra coisa
    password: yup
      .string()
      .min(6, "minimo de 6 digitos")
      .required("Campo obrigatorio"),
    confsenha: yup
      .string()
      .min(6, "minimo de 6 digitos")
      .oneOf([yup.ref("password")], "senhas diferentes")
      .required("Campo obrigatorio"),
  });

  const [modal, setModal] = useState(false);

  //função de cadastro da PESSOA - METODO POST
  const submitFunction = (data) => {
    console.log(data, "formulario de cadastro");
    //fazer um hot-post para quando o cadastro for efetuado
    //fazer um hot-post para quando o usuario já for cadastrado
    api
      .post("/users", data)
      .then((response) => {
        console.log(response.data, "api post cadastro");
        setModal(true);
      })
      .catch((err) => {
        console.error("ops! deu errado" + err);
        toast.error("Campo não preenchido ou senhas diferentes");
        // setModal(true);
      });
  };
  //useFORM:
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
          {/** Formulario de cadastro */}
          <form onSubmit={handleSubmit(submitFunction)}>
            <h1>
              Kenzie <span>Hub</span>
            </h1>
            <div id="box">
              <TextField
                error={errors.name ? true : false}
                id="outlined-error"
                label="Nome"
                helperText={errors.name ? "nome invalido" : "  "}
                {...register("name")}
              />

              <TextField
                error={errors.email ? true : false}
                id="outlined-error"
                label="Email"
                helperText={errors.email ? "email invalido" : "  "}
                {...register("email")}
              />

              <TextField
                error={errors.bio ? true : false}
                id="outlined-error"
                label="BIO"
                helperText={errors.bio ? "bio invalido" : "  "}
                {...register("bio")}
              />

              <TextField
                error={errors.contact ? true : false}
                id="outlined-error"
                label="Contato"
                helperText={errors.bio ? "contact invalido" : "  "}
                {...register("contact")}
              />

              <div id="modulos">
                <input
                  {...register("course_module")}
                  className="radio"
                  id="primeiro"
                  type="radio"
                  value="primeiro"
                  name="course_module"
                />
                <label className="label" htmlFor="primeiro">
                  primeiro
                </label>
                <input
                  {...register("course_module")}
                  className="radio"
                  id="segundo"
                  type="radio"
                  value="segundo"
                  name="course_module"
                />
                <label className="label" htmlFor="segundo">
                  segundo
                </label>
                <input
                  {...register("course_module")}
                  className="radio"
                  id="terceiro"
                  type="radio"
                  value="terceiro"
                  name="course_module"
                />
                <label className="label" htmlFor="terceiro">
                  terceiro
                </label>
                <input
                  {...register("course_module")}
                  className="radio"
                  id="quarto"
                  type="radio"
                  value="quarto"
                  name="course_module"
                />
                <label className="label" htmlFor="quarto">
                  quarto
                </label>
              </div>

              <TextField
                error={errors.password ? true : false}
                id="outlined-error"
                label="Senha"
                type="password"
                helperText={errors.password ? "senha invalida" : "  "}
                {...register("password")}
              />

              <TextField
                error={errors.confsenha ? true : false}
                id="outlined-error"
                label="Confirmar senha"
                type="password"
                helperText={errors.password ? "senha invalida" : "  "}
                {...register("confsenha")}
              />

              <Button type="submit">Cadastrar</Button>
              <p>
                Já tem uma conta? Faça seu <Link to="/">login</Link>
              </p>
            </div>
          </form>
          {modal && (
            <Modal
              open={modal}
              onClose={() => setModal(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h4" component="h2">
                  Yeesss!
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Tudo certinho, seu cadastrodeu bom demais. Agora basta fazer
                  seu login e começar a sua jornada...
                </Typography>
                <Button whiteSchema onClick={() => history.push("/")}>
                  Ir para login
                </Button>
              </Box>
            </Modal>
          )}
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default Cadastro;

/**
 * {/* <Input
                label="Confirmação da senha"
                placeholder="Confirmação de senha"
                type="password"
                name="confsenha"
                register={register}
              />
 */
