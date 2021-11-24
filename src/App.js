import "./App.css";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Cadastro from "./Pages/cadastro";
import Usuario from "./Pages/usuario";
import Login from "./Pages/home";
import api from "./services/api";

function App() {
  const [user, setUser] = useState([]);
  console.log(user);

  //acho que esse useEffect pode ser descartado.
  // useEffect(() => {
  //   api
  //     .get("/users")
  //     .then((response) => setUser(response.data))
  //     .catch((err) => console.error("ops! deu errado" + err));
  // }, []);
  //console.log(api.get("users/"));
  //console.log(api.post);
  return (
    <Switch>
      <Route exact path="/">
        <Login setUser={setUser} />
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
