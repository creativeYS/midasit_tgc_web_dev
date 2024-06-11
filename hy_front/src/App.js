import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Todos from "./components/Todos";

function App() {
  const [todo, setTodo] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = fetch("http://localhost:8081/todo")
    .then((res) => res.json())
    .then((data) => setTodo(data))
    .catch((err) => console.log(err));
  }

  return (
    <div >
      <Todos todo={todo}/>
    </div>
  );
}

export default App;
