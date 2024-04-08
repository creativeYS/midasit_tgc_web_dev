import React, { useState } from "react";
import './Todos.css';
import useTodos from '../hooks/useTodos'

function Todos() {
  const [counter, setCounter] = useState(1);
  const todos = useTodos(counter); // useTodos 훅을 통해 todos 상태 가져오기
  const completedCount = todos.filter(todo => todo.completed).length; // 완료된 항목의 수 계산
  const incompleteCount = todos.filter(todo => !todo.completed).length; // 완료되지 않은 항목의 수 계산

  return (
    <div className="Todos">
      <p onClick={() => setCounter(counter + 1)}>
      {completedCount}/{counter}
      </p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>  
               {todo.id} : {todo.todo}     
          </li>
        ))}
      </ul>
      <p>{incompleteCount}개 남아 있음</p>
    </div>
  );
}

export default Todos;