import './Todo.css';

function Todo({todo}) {
    const id = todo.id;
    const description = todo.todo;
    const completed = todo.completed;

    return (
        <li key={id} className={completed ? "line_complete" : "line_incomplete"}>
            <label>
                <input type="checkbox" className="checkbox" checked={completed} />
                <span className="description">{description}</span>
            </label>
        </li>
    );
}

export default Todo;