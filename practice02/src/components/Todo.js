import './Todo.css';

function Todo({todo}) {
    const id = todo.id;
    const todoDesc = todo.todo;
    const completed = todo.completed;

    return (
        <div className="todoListItem">
            <li key={id} className={completed ? "done" : "progress"}>                   
                {todoDesc}
            </li>
        </div>
    );
}

export default Todo;