// Material - UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
//import ViewInArIcon from "@mui/icons-material/ViewInAr";
// componetes
import Card from "../Card";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
// style
import "./styles.css";

function Tech({ dados, token }) {
  const tecnologias = dados.techs;
  console.log(tecnologias, "dados recebidos da tech");
  const [tec, setTech] = useState(tecnologias);
  console.log(tec, "state da tec");

  function Change(param) {
    console.log(param);
    ///////////////////////
    const changeTech = (data) => {
      api
        .put(
          `/users/techs/:${param.id}`,
          {
            title: data.title,
            status: data.status,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data, "api put alterar da tech deu certo");
        })
        .catch((err) => {
          console.error("ops! deu errado ao tentar alterar a Tech" + err);
        });
    };
    ///////////////////////
    // return (
    //   <Modal
    //     open={true}  //true para abrir
    //     onClose={() => setModal(true)}  //true para fechar
    //     aria-labelledby="modal-modal-title"
    //     aria-describedby="modal-modal-description"
    //   >
    //     <Box sx={style}>
    //       <Typography id="modal-modal-title" variant="h6" component="h2">
    //         Cadastrar Tecnologia
    //       </Typography>

    //       <form onSubmit={handleSubmit(changeTech)}>  {/*função de troca*/}
    //         <TextField
    //           {...register("title")}
    //           helperText="Digite uma tecnologia"
    //           id="demo-helper-text-aligned"
    //           label="Nova tecnologia"
    //         />
    //         <div>
    //           <input
    //             {...register("status")}
    //             className="radio"
    //             id="iniciante"
    //             type="radio"
    //             value="iniciante"
    //             name="status"
    //           />
    //           <label className="label" htmlFor="iniciante">
    //             iniciante
    //           </label>
    //           <input
    //             {...register("status")}
    //             className="radio"
    //             id="intermediario"
    //             type="radio"
    //             value="intermediario"
    //             name="status"
    //           />
    //           <label className="label" htmlFor="intermediario">
    //             intermediario
    //           </label>
    //           <input
    //             {...register("status")}
    //             className="radio"
    //             id="avançado"
    //             type="radio"
    //             value="avançado"
    //             name="status"
    //           />
    //           <label className="label" htmlFor="avançado">
    //             avançado
    //           </label>
    //         </div>
    //         <button type="submit">Enviar</button>
    //       </form>
    //       <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    //         formulario de cadastro
    //       </Typography>
    //     </Box>
    //   </Modal>
    // );
  }

  //funções para modificar as Techs;
  const addTech = (data) => {
    //vai mudar endpoint: /techs
    api
      .post(
        "/users/techs",
        {
          title: data.title,
          status: data.status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data, "api post cadastro da tech deu certo");
        setTech([...tec, response.data]);
        console.log(tec, "nova tech renderizada");
        // tecnologias = [...tecnologias, response.data];
        // console.log(tecnologias, "fez o spreed");
      })
      .catch((err) => {
        console.error("ops! deu errado cadastro de Techs" + err);
      });
  };

  //montagem do objeto form
  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatorio"),
    status: yup.string().required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  //style Model
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  //config titulo e descrições;
  const haveTitle = (param) => {
    if (param === undefined) {
      return "sem titulo";
    } else {
      return param.title;
    }
  };
  const haveStatus = (param) => {
    if (param === undefined) {
      return "sem status";
    } else {
      return param.status;
    }
  };

  //config model para aparecer ou não
  const [modal, setModal] = useState(false);

  return (
    <div id="tech">
      <div id="tech-title">
        <h2>Minhas Tecnologias</h2>
        <button id="addTech" onClick={() => setModal(true)}>
          +
        </button>
        {/**aqui chamei o meu MUI model */}
      </div>
      {tec.map((element) => (
        <Card
          click={() => Change(element)}
          key={element.id}
          className="tech-cards"
          titulo={haveTitle(element)}
          descrição={haveStatus(element)}
          //Icone={ViewInArIcon}
        />
      ))}
      {/**BOX MODEL */}
      {modal && (
        <Modal
          open={modal}
          onClose={() => setModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Cadastrar Tecnologia
            </Typography>

            <form onSubmit={handleSubmit(addTech)}>
              <TextField
                {...register("title")}
                helperText="Digite uma tecnologia"
                id="demo-helper-text-aligned"
                label="Nova tecnologia"
              />
              <div>
                <input
                  {...register("status")}
                  className="radio"
                  id="iniciante"
                  type="radio"
                  value="iniciante"
                  name="status"
                />
                <label className="label" htmlFor="iniciante">
                  iniciante
                </label>
                <input
                  {...register("status")}
                  className="radio"
                  id="intermediario"
                  type="radio"
                  value="intermediario"
                  name="status"
                />
                <label className="label" htmlFor="intermediario">
                  intermediario
                </label>
                <input
                  {...register("status")}
                  className="radio"
                  id="avançado"
                  type="radio"
                  value="avançado"
                  name="status"
                />
                <label className="label" htmlFor="avançado">
                  avançado
                </label>
              </div>
              <button type="submit">Enviar</button>
            </form>
          </Box>
        </Modal>
      )}
    </div>
  );
}

export default Tech;
