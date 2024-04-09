import React, {useState, useEffect} from "react";
import './Todos.css';
import useTodos from '../hooks/useTodos'
import iconAdd from '../resource/icon_add.png'
import iconDelete from '../resource/icon_delete.png'

// 새로운 컴포넌트를 정의합니다.
function Todos() {

  const [counter, setCounter] = useState(1);
  const [countComp, setCompleted] = useState(0);
  const [countInComp, setInCompleted] = useState(0);
  // api 호출을 통해 받아온 데이터를 todos라는 이름으로 사용합니다. (내부에서 useState, useEffect 사용됨)
  const todos = useTodos(counter);

  useEffect(() => {
    let cntCompleted = 0;
    let cntIncompleted = 0;
    todos.forEach((todo) => {
      if (todo.completed === true) {
        cntCompleted++;
      } else {
        cntIncompleted++;
      }
    });
    setCompleted(cntCompleted);
    setInCompleted(cntIncompleted);
  }, [todos]);
  
  function onAdd() {
    setCounter(counter + 1);
  }
  function onDelete() {
    if(1 < counter) {
      setCounter(counter - 1);
    }
  }

  // function switchCompleted(todo) {
  //   todo.completed = !todo.completed;
  // }
  // function isCompleted(todo) {
  //   return todo.completed
  // }

  function onClickTodo(todo) {
    // console.log(todo.id, todo.todo, todo.completed)
    // switchCompleted(todo)
    // console.log(todo.id, todo.todo, todo.completed)
  }

  return (
    <div className="Todos">
      <div className="TodoHeader">
        <div className="TodoInfo">
          <div id="allPlanBox">
            <p>All : {counter}</p>
          </div>
          <div id="compPlanBox">
            <p>Completed : {countComp}</p>
          </div>
          <div id="incompPlanBox">
            <p>Active : {countInComp}</p>
          </div>
        </div>
        <div className="TodoControl">
          <img src={iconAdd} onClick={()=>onAdd()} id="icon_add"></img>
          <img src={iconDelete} onClick={()=>onDelete()} id="icon_delete"></img>
        </div>
      </div>
      <div className="TodoList">
        <ul>
          {
              // todos 배열을 순회하며 각각의 요소를 <li> 태그를 사용하여 출력합니다.
              // 이렇게 반복되는 요소에 key라는 프로퍼티가 빠지면 콘솔에 경고가 뜹니다.
            todos.map((todo)=><li key={todo.id} id={todo.completed === true ? "todo_completed" : "todo_incompleted"} onClick={()=>onClickTodo(todo)}>
              {todo.todo}
              </li>)
          }
        </ul>
      </div>
    </div>
  );
}

// 정의한 컴포넌트를 외부에서 사용할 수 있도록 export 합니다.
export default Todos;