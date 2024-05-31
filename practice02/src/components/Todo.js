import './Todo.css';

function Todo({todo}) {
    const id = todo.id;
    const todoDesc = todo.todo;
    const completed = todo.completed;

    return (
        <li key={id} className={completed ? "todoListItem done" : "todoListItem"}>
            <label>
                <input type="checkbox" className="checkbox" checked={completed} />
                {todoDesc}
            </label>
        </li>
    );
}

export default Todo;
