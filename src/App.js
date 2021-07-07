import Screen from "./Components/Screen";
import Operators from "./Components/Operators";
import Result from "./Components/Result";
import Coma from "./Components/Coma";
import { useState } from "react";
import BtnNumber from "./Components/BtnNumber";
import Reset from "./Components/Reset";
import logo from "./logocalculator.gif"
import Menu from "./Components/Menu";

function App() {
const [calculo, setCalculo] = useState("")
const [error, setError] = useState(false)
 

  return (
    <>
    <Menu/>
    <div className="flex-center">
    <div className= "contenedor-principal">
      <Screen setCalculo={setCalculo} error={error} calculo={calculo}/>
      <BtnNumber number= {1} key={1} setCalculo={setCalculo} calculo={calculo}/>
       <BtnNumber number= {2} key={2} setCalculo={setCalculo} calculo={calculo}/> 
       <BtnNumber number= {3} key={3} setCalculo={setCalculo} calculo={calculo}/> 
       <Operators operator= {"+"} key={12} setCalculo={setCalculo} calculo={calculo}/>
      <BtnNumber number= {4} key={4} setCalculo={setCalculo} calculo={calculo}/>
       <BtnNumber number= {5} key={5} setCalculo={setCalculo} calculo={calculo}/> 
       <BtnNumber number= {6} key={6} setCalculo={setCalculo} calculo={calculo}/> 
       <Operators operator= {"-"} key={13} setCalculo={setCalculo} calculo={calculo}/>
      <BtnNumber number= {7} key={7} setCalculo={setCalculo} calculo={calculo}/>
       <BtnNumber number= {8} key={8} setCalculo={setCalculo} calculo={calculo}/>
        <BtnNumber number= {9} key={9} setCalculo={setCalculo} calculo={calculo}/> 
        <Operators operator= {"*"} key={14} setCalculo={setCalculo} calculo={calculo}/>
      <BtnNumber number= {0} key={0} setCalculo={setCalculo} calculo={calculo} /> 
      <Coma setCalculo={setCalculo}  calculo={calculo}/> 
      <Result calculo={calculo} setError={setError} setCalculo={setCalculo}/>
       <Operators operator= {"/"} key={11} setCalculo={setCalculo} calculo={calculo} />
     <div className="logo"><img src={logo}></img></div> 
       <Reset setCalculo={setCalculo} setError={setError} />
    </div>
    </div>
    </>
  );
}

export default App;
