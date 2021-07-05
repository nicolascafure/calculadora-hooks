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
      <Number number= {1} key={1}/> <Number number= {2} key={2}/> <Number number= {3} key={3}/> <Operators operator= {"+"} key={12}/>
      <Number number= {4} key={4}/> <Number number= {5} key={5}/> <Number number= {6} key={6}/> <Operators operator= {"-"} key={13} />
      <Number number= {7} key={7}/> <Number number= {8} key={8}/> <Number number= {9} key={9}/> <Operators operator= {"*"} key={14} />
      <Number number= {0} key={0} /> <Coma/> <Result/> <Operators operator= {"/"} key={11} />
    </div>
  );
}

export default App;