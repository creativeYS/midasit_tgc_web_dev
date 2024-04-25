import React, { useState } from 'react';
import './Todo.css';

function Todo({todo}) {

    const [completed, setCompleted] = useState(todo.completed); // 상태 설정

    const handleCheckboxChange = () => {
        setCompleted(!completed); // 상태 변경
    };

    const id = todo.id;
    const todoDesc = todo.todo;
    //const todocompleted = todo.completed;

    return (
        <li key={id} className={completed ? "todoListItem done" : "todoListItem"}>
            <label>
                <input type="checkbox" className="checkbox" checked={completed} onChange={handleCheckboxChange}/>
                {todoDesc}
            </label>
        </li>
    );
}

export default Todo;