import { useState } from "react";
import './Todos.css';
import useTodos from '../hooks/useTodos'
import Todo from './Todo'

// 새로운 컴포넌트를 정의합니다.
function Todos() {
  const [counter, setCounter] = useState(1);
  const [incompletedOnly, setInCompleted] = useState(false);

  // api 호출을 통해 받아온 데이터를 todos라는 이름으로 사용합니다. (내부에서 useState, useEffect 사용됨)
  let todos = useTodos(counter);

  const onClickAdd = () => {
    setCounter(counter + 1);
  }

  const onClickDelAll = () => {
    //** Check된 항목만 삭제하고 나머지는 유지하고 싶었으나, 아직은 잘 모르겠음. ㅠㅠ **
    setInCompleted(!incompletedOnly);
  }

  return (
    <div className="Todos">
      <h1 font='Nanum Gothic'>일정관리</h1>
      <div class="todo_input">        
      <input class="todo_btn" type="submit" value="일정추가" onClick={onClickAdd} />
      <input class="todo_btn" type="submit" value="완료된 일정 모두삭제" onClick={onClickDelAll} />
      </div>
      <ul>
        {
          // todos 배열을 순회하며 각각의 요소를 <li> 태그를 사용하여 출력합니다.
          // 이렇게 반복되는 요소에 key라는 프로퍼티가 빠지면 콘솔에 경고가 뜹니다.
          todos
            .filter((todo) => incompletedOnly ? !todo.completed : true)
            .map((todo)=><Todo key={todo.id} todo={todo}/>)
        }
      </ul>
    </div>
  );
}

// 정의한 컴포넌트를 외부에서 사용할 수 있또록 export 합니다.
export default Todos;
