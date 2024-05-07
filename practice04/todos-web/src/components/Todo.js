import './Todo.css';

function Todo({todo, setTodo}) {
    const {id, content, done} = todo;

    return (
        <li key={id} className={done ? "todoListItem done" : "todoListItem"}>
            <label>
                <input type="checkbox"
                       className="checkbox"
                       checked={done}
                       onClick={()=>setTodo({...todo, done:!done})}
                />
                {content}
            </label>
        </li>
    );
}

export default Todo;
