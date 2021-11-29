//Material - UI
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
// componetes
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../../services/api";

function ModelTech({ objeto, troca, setTroca, token, loadInfos }) {
  //formularios
  const formSchema = yup.object().shape({
    // title: yup.string().required("Campo obrigatorio"),
    status: yup.string().required("Campo obrigatorio"),
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
    api
      .put(
        `/users/techs/${objeto.id}`,
        {
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
        loadInfos(true);
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
        console.log("api delete tech deu certo");
        loadInfos(true);
      })
      .catch((err) => {
        console.error("ops! deu errado ao tentar deletar a Tech" + err);
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
            helperText="Digite uma tecnologia"
            id="demo-helper-text-aligned"
            label="Nova tecnologia"
            value={objeto.title}
            disabled
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
          <div id="botoes">
            <button className="alterar" type="submit">
              Alterar status
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

export default ModelTech;
