import { useState } from "react";
import './Todos.css';
import Todo from "./Todo";
import {getTodos, addTodo, delTodo, updateTodo} from "../api/api";

// 새로운 컴포넌트를 정의합니다.
function Todos() {

    const [newContent, setNewContent] = useState('');
    const [todos, setTodos] = useState(getTodos());

    const onClickAdd = () => {
        alert('onClickAdd');
    }
    const onClickDelete = () => {
        alert('onClickDelete');
    }
    const setTodo = (todo) =>{
        alert('setTodo');
    }

    return (
        <div className="TodoListApp">
            <h1>TODOs</h1>
            <div className="TodoControl">
                <input
                    type="text"
                    onChange={(e) => setNewContent(e.target.value)}
                    value={newContent}
                    className="NewTodoEdit"
                />
                <button className = "TodoButton" onClick={onClickAdd}>추가</button>
                <button className = "TodoButton" onClick={onClickDelete}>제거</button>
            </div>
            <div className="Todos">
                <ul className="TodoList">
                    { // todos 배열을 순회하며 각각의 요소를 <li> 태그를 사용하여 출력합니다.
                        todos.map((todo)=><Todo key={todo.id} todo={todo} setTodo={setTodo}/>)
                    }
                </ul>
            </div>
        </div>
    );
}

// 정의한 컴포넌트를 외부에서 사용할 수 있또록 export 합니다.
export default Todos;
