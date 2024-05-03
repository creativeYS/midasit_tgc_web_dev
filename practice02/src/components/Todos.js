import React from "react"
import './Todos.css';
import useTodos from '../hooks/useTodos'
import Todo from './Todo.js'

// 새로운 컴포넌트를 정의합니다.
function Todos() {

  const [counter, setCounter] = React.useState(1);
    
  const todos = useTodos(counter);

  const onClickAdd = () => 
  {
    setCounter(counter + 1);
  }
  
  const onClickDelete = () => 
  {
      if(counter > 1) setCounter(counter - 1);
  }

  return (
    <div className="Todos">

      <div className="Todo_Button_Box">

        <div className="Counter">
          {counter}
        </div>

        <button className = "Todo_Button" onClick={onClickAdd}>
          추가
        </button>
        
        <button className = "Todo_Button" onClick={onClickDelete}>
          제거
        </button>
      </div>

      <ul>
        {todos.map((todo) =><Todo todo={todo} />)}
      </ul>


    </div>
  );
}

export default Todos;
