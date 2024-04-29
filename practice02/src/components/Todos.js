import { useState } from "react";
import './Todos.css';
import useTodos from '../hooks/useTodos'
import Todo from "./Todo";

// 새로운 컴포넌트를 정의합니다.
function Todos() {

    const [counter, setCounter] = useState(1);
    // api 호출을 통해 받아온 데이터를 todos라는 이름으로 사용합니다. (내부에서 useState, useEffect 사용됨)
    const todos = useTodos(counter);

    const onClickAdd = () => {
        setCounter(counter + 1);
    }
    const onClickDelete = () => {
        if(counter > 1) setCounter(counter - 1);
    }

    return (
        <div className="TodoListApp">
            <h1>TODOs</h1>
            <div className="TodoControl">
                <button className = "TodoButton" onClick={onClickAdd}>추가</button>
                <button className = "TodoButton" onClick={onClickDelete}>제거</button>
            </div>
            <div className="Todos">
                <ul className="TodoList">
                    { // todos 배열을 순회하며 각각의 요소를 <li> 태그를 사용하여 출력합니다.
                        todos.map((todo)=><Todo todo={todo} />)
                    }
                </ul>
            </div>
        </div>
    );
}

// 정의한 컴포넌트를 외부에서 사용할 수 있또록 export 합니다.
export default Todos;
