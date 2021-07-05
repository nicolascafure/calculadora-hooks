import Screen from "./Components/Screen";
import Number from "./Components/Number";
import Operators from "./Components/Operators";
import Result from "./Components/Result";
import Coma from "./Components/Coma";
import { useState } from "react";

function App() {
const [calculo, setCalculo] = useState({})
 

  return (
    <div className= "contenedor-principal">
      <Screen/>
      <Number number= {1} key={1} setCalculo={setCalculo} calculo={calculo}/>
       <Number number= {2} key={2} setCalculo={setCalculo} calculo={calculo}/> 
       <Number number= {3} key={3} setCalculo={setCalculo} calculo={calculo}/> 
       <Operators operator= {"+"} key={12} setCalculo={setCalculo} calculo={calculo}/>
      <Number number= {4} key={4} setCalculo={setCalculo} calculo={calculo}/>
       <Number number= {5} key={5} setCalculo={setCalculo} calculo={calculo}/> 
       <Number number= {6} key={6} setCalculo={setCalculo} calculo={calculo}/> 
       <Operators operator= {"-"} key={13} setCalculo={setCalculo} calculo={calculo}/>
      <Number number= {7} key={7} setCalculo={setCalculo} calculo={calculo}/>
       <Number number= {8} key={8} setCalculo={setCalculo} calculo={calculo}/>
        <Number number= {9} key={9} setCalculo={setCalculo} calculo={calculo}/> 
        <Operators operator= {"*"} key={14} setCalculo={setCalculo} calculo={calculo}/>
      <Number number= {0} key={0} setCalculo={setCalculo} calculo={calculo} /> 
      <Coma setCalculo={setCalculo}  calculo={calculo}/> 
      <Result/>
       <Operators operator= {"/"} key={11} setCalculo={setCalculo} />
    </div>
  );
}

export default App;
