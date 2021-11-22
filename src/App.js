import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Cadastro from "./Pages/cadastro";
import Usuario from "./Pages/usuario";
import Login from "./Pages/home";

function App() {
  const [user, setUser] = useState("");

  useEffect(() => {}, []);

  return (
    <Switch>
      <Route exact path="/">
        <Login dados={user} />
      </Route>

      <Route exact path="/usuario">
        <Usuario dados={user} />
      </Route>

      <Route exact path="/cadastro">
        <Cadastro user={user} setUser={setUser} />
      </Route>
    </Switch>
  );
}

export default App;
