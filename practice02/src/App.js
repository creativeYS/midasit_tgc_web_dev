import './App.css';
import { useEffect, useState } from "react";
import Todos from './components/Todos'

function App() {

  const [name, setName] = useState("ssj0324");

  useEffect(()=>{
    console.log('use effect')
    return ()=>{
      console.log('cleanup')
    }
  }, [name])

  return (
    <div className="content-box">
      <div className="App">
        <header className="App-header">
          <p id="title">TODOS</p>
        </header>
        <body className="App-body">
          <div id="todo_list">
            <Todos/>
          </div>
        </body>
        <p id='copyright'>made by {name}</p>
      </div>
    </div>
  );
}

export default App;