import {useState} from "react";
import './App.css';

import Todos from './components/Todos'
import TodoTemplate from './components/TodoTemplate'
import TodoTitle from './components/TodoTitle'
import TodoList from './components/TodoList'
import TodoControl from './components/TodoControl'

function App() {
  const [TodoCount, SetTodoCount] = useState(1);

  return (
    <TodoTemplate>
        <TodoTitle></TodoTitle>
        <TodoList 
        TodoCount = {TodoCount}
        >
        </TodoList>
        <TodoControl
        TodoCount = {TodoCount}
        SetTodoCount = {SetTodoCount}
          >
        </TodoControl>
    </TodoTemplate>
  );
}

export default App;
