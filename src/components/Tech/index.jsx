// Material - UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// componetes
import Card from "../Card";
import { useState } from "react";
// style
import "./styles.css";

function Tech({ dados }) {
  const tecnologias = dados.techs;
  console.log(tecnologias, "dados recebidos da tech");
  //console.log(BasicModal, "basic modal");

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

  const [modal, setModal] = useState(false);

  return (
    <div id="tech">
      <div id="tech-title">
        <h2>Minhas Tecnologias</h2>
        <button onClick={() => setModal(true)}>+</button>
        {/**aqui chamei o meu MUI model */}
      </div>
      {tecnologias.map((element) => (
        <Card
          key={element.id}
          className="tech-cards"
          titulo={haveTitle(element)}
          descrição={haveStatus(element)}
          // icone={element.icon}
        />
      ))}
      {modal && (
        <div>
          <Modal
            open={modal}
            onClose={() => setModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Nova tecnologia
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                formulario de cadastro
              </Typography>
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default Tech;
