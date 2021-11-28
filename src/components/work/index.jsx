// Material - UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
// componetes
import Card from "../Card";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import ModelWork from "../Modals/Cadwork";
//styles
import "./styles.css";

function Work({ dados, token, loadInfos }) {
  const jobs = dados.works;
  const [works, setWorks] = useState(jobs);

  const addWork = (data) => {
    //vai mudar endpoint: /work
    api
      .post(
        "/users/works",
        {
          title: data.title,
          description: data.description,
          deploy_url: "https://kenziehub.me",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data, "api post cadastro da work deu certo");
        setWorks([...works, response.data]);
        console.log(works, "nova work renderizada");
        loadInfos(true);
      })
      .catch((err) => {
        console.error("ops! deu errado cadastro de Works" + err);
      });
  };

  //montagem do objeto form
  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatorio"),
    description: yup.string().required("Campo obrigatorio"),
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
  const havedescription = (param) => {
    if (param === undefined) {
      return "sem description";
    } else {
      return param.description;
    }
  };

  //config model
  const [modal, setModal] = useState(false); //cadastro
  const [troca, setTroca] = useState(false);
  const [novo, setNovo] = useState({});

  function Change(param) {
    console.log(param, "do work");
    setNovo(param);
    setTroca(true);
  }

  return (
    <div id="works">
      <div id="works-title">
        <h2>Meus trabalhos</h2>
        <ModelWork
          objeto={novo}
          troca={troca}
          setTroca={setTroca}
          token={token}
          loadInfos={loadInfos}
        />
        <button id="addWork" onClick={() => setModal(true)}>
          +
        </button>
      </div>
      {dados.works.map((element) => (
        <Card
          click={() => Change(element)}
          key={element.id}
          className="works-cards"
          titulo={haveTitle(element)}
          descrição={havedescription(element)}
          //icone={element.icon}
        />
      ))}
      {/**BOX MODAL */}
      {modal && (
        <Modal
          open={modal}
          onClose={() => setModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Cadastrar Trabalho
            </Typography>

            <form onSubmit={handleSubmit(addWork)}>
              <TextField
                {...register("title")}
                helperText=" "
                id="demo-helper-text-aligned"
                label="Novo trabalho"
              />
              <div>
                <TextField
                  {...register("description")}
                  id="outlined-multiline-static"
                  label="Descrição"
                  multiline
                  rows={4}
                  defaultValue="BIO"
                  helperText="Descreva sobre o objetivo do seu projeto"
                />
              </div>
              <button type="submit">Enviar</button>
            </form>
          </Box>
        </Modal>
      )}
    </div>
  );
}

export default Work;
