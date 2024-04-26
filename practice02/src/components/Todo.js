import './Todo.css';
import { useState } from "react";

function Todo({todo, onDelete}) {
    const id = todo.id;
    const todoDesc = todo.todo;
    const [completed, setCompleted] = useState(todo.completed);

    const handleCheckboxChange = () => {
        setCompleted(!completed);
    };

    const TodoDelete = () => {
        alert("미구현ㅠㅠ");
      };

    return (
        <li key={id} className={completed ? "do" : "notdo"}>
            <label>
                <input type="checkbox" className="checkbox" defaultChecked={completed}  onChange={handleCheckboxChange}/>
                {todoDesc}
                
            </label>         
            <button type="button" onClick = {TodoDelete} className="trashcanbutton">
                <img src="https://cdn-icons-png.freepik.com/512/11348/11348629.png" width="25" height="25"/>
            </button>

        </li>
    );

}

export default Todo;