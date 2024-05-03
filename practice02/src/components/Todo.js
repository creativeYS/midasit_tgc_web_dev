import { useState } from "react";
import './Todo.css';

function Todo({todo}) {
    const [completed, setCompleted] = useState(todo.completed);

    const toggleCompleted = () => {
        setCompleted(!completed);
    };

    return (
        <li className={completed ? "todoListItem_done" : "todoListItem"}>
            <label htmlFor={todo.id}>
                <input
                    id={todo.id}
                    type="checkbox"
                    className="checkbox"
                    checked={completed}
                    onChange={toggleCompleted}
                />
                <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                    {todo.todo}
                </span>
            </label>
        </li>
    );
}

export default Todo;