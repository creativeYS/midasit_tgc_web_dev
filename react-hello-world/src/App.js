import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [name, setName] = useState("rla523at");
  const [count, setCounter] = useState(1);

  //컴포넌트가 로드될 때 호출 되는 함수
  useEffect(()=>{
    console.log('use effect')
    return ()=>{
      console.log('cleanup')
    }
  }, [name, count])

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
        
        <p onClick={()=>setCounter(count + 1)}>
          {count}
        </p>

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
