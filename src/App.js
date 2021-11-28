import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Cadastro from "./Pages/cadastro";
import Usuario from "./Pages/usuario";
import Login from "./Pages/home";
import api from "./services/api";
import GlobalStyle from "./styles/global";
import { Toaster } from "react-hot-toast";

function App() {
  const [user, setUser] = useState([]);
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <GlobalStyle />
      <Toaster position="top-center" reverseOrder={false} />
      <Switch>
        <Route exact path="/">
          <Login setUser={setUser} setDataLogin={setDataLogin} />
        </Route>

        <Route exact path="/usuario">
          <Usuario dados={user} setUser={setUser} dataLogin={dataLogin} />
        </Route>

        <Route exact path="/cadastro">
          <Cadastro user={user} setUser={setUser} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
