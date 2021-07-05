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
      <Number number= {1} key={1} setCalculo={setCalculo}/> <Number number= {2} key={2} setCalculo={setCalculo}/> <Number number= {3} key={3} setCalculo={setCalculo}/> <Operators operator= {"+"} key={12} setCalculo={setCalculo}/>
      <Number number= {4} key={4} setCalculo={setCalculo}/> <Number number= {5} key={5} setCalculo={setCalculo}/> <Number number= {6} key={6} setCalculo={setCalculo}/> <Operators operator= {"-"} key={13} setCalculo={setCalculo}/>
      <Number number= {7} key={7} setCalculo={setCalculo}/> <Number number= {8} key={8} setCalculo={setCalculo}/> <Number number= {9} key={9} setCalculo={setCalculo}/> <Operators operator= {"*"} key={14} setCalculo={setCalculo}/>
      <Number number= {0} key={0} setCalculo={setCalculo} /> <Coma setCalculo={setCalculo} /> <Result/> <Operators operator= {"/"} key={11} setCalculo={setCalculo} />
    </div>
  );
}

export default App;
