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
            <h1>TO - DO !</h1>

            <div>
            <h2>
                {todos.filter((todo)=>todo.completed).length} / {todos.length}
            </h2>
            </div>

            <div className="TodoControl">
                <button className = "TodoButton" onClick={onClickAdd}>Add</button>
                <button className = "TodoButton" onClick={onClickDelete}>Delete</button>
            </div>
            <div className="Todos">
                <ul className="TodoList">
                    { 
                        todos.map((todo)=><Todo todo={todo} />)
                    }
                </ul>
            </div>
        </div>
    );
}

export default Todos;