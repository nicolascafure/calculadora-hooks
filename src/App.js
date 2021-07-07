import Screen from "./Components/Screen";
import Operators from "./Components/Operators";
import Result from "./Components/Result";
import Coma from "./Components/Coma";
import { useState } from "react";
import BtnNumber from "./Components/BtnNumber";
import Reset from "./Components/Reset";
import logo from "./logocalculator.gif";
import Menu from "./Components/Menu";
import Historial from "./Components/Historial";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [calculo, setCalculo] = useState("");
  const [error, setError] = useState(false);
  const [historial, setHistorial] = useState([]);

  const botones = [1,2,3,"+",4,5,6,"-",7,8,9,"/",0,"*","."]

  return (
    <>
      <Router>
        <Menu />
        <div className="flex-center">
          <div className="contenedor-principal">
            <Switch>
              <Route path="/historial">
                <Historial
                  historial={historial}
                  setHistorial={setHistorial}
                  calculo={calculo}
                  setCalculo={setCalculo}
                />
              </Route>

              <Route path="/">
                <Screen
                  setCalculo={setCalculo}
                  error={error}
                  calculo={calculo}
                />
                {botones.map(boton=><BtnNumber
                  number={boton}
                  key={boton}
                  setCalculo={setCalculo}
                  calculo={calculo}
                />)}
                <Result
                  calculo={calculo}
                  setError={setError}
                  setCalculo={setCalculo}
                  historial={historial}
                  setHistorial={setHistorial}
                />
            
                <div className="logo">
                  <img src={logo}></img>
                </div>
                <Reset setCalculo={setCalculo} setError={setError} />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
