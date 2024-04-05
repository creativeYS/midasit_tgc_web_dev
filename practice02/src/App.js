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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p onClick={()=>setName("TGC")}>
          {name}
        </p>

        {
          // 새로 정의한 <Todos/> 컴포넌트를 사용합니다. 이 컴포넌트는 바디가 필요없어서 self-closing tag로 사용합니다.
        }
        <Todos/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
