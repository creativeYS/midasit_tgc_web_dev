import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import Todos from './components/Todos'

function App() {

  const [name, setName] = useState("kys0522");

  useEffect(()=>{
    console.log('use effect')
    return ()=>{
      console.log('cleanup')
    }
  }, [name])

  return (
    <div className="App">
      <p onClick={()=>setName("dykwak")}>
        made by {name}
      </p>
      <Todos/>
    </div>
  );
}

export default App;
