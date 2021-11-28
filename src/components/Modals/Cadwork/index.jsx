//Material - UI
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
// componetes
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../../services/api";

function ModelWork({ objeto, troca, setTroca, token }) {
  //formularios
  const formSchema = yup.object().shape({
    // title: yup.string().required("Campo obrigatorio"),
    description: yup.string().required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

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

  function changeTech(data) {
    console.log(data, "veio da change");
    api
      .put(
        `/users/techs/${objeto.id}`,
        {
          description: data.description,
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
  }

  function delTipe(data) {
    api
      .delete(`/users/techs/${data.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data, "api delete work deu certo");
      })
      .catch((err) => {
        console.error("ops! deu errado ao tentar deletar a work" + err);
      });
  }

  return (
    <Modal
      open={troca}
      onClose={() => setTroca(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Cadastrar Tecnologia
        </Typography>

        <form onSubmit={handleSubmit(changeTech)}>
          <TextField
            helperText="  "
            id="demo-helper-text-aligned"
            label="Nova tecnologia"
            value={objeto.title}
            disabled
          />
          <TextField
            {...register("description")}
            id="outlined-multiline-static"
            label="Descrição"
            multiline
            rows={4}
            defaultValue="BIO"
            helperText="Descreva sobre o objetivo do seu projeto"
          />
          <div id="botoes">
            <button className="alterar" type="submit">
              Alterar description
            </button>
            <button
              className="alterar"
              id="exit"
              onClick={() => delTipe(objeto)}
            >
              EXIT
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
}

export default ModelWork;
