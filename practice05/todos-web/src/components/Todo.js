import './Todo.css';

function Todo({todo, setTodo, deleteTodo}) {
    const {id, content, description, done} = todo;

    const onClickDelete = () => {
        deleteTodo(id);
    }

    return (
        <li key={id} className={done ? "todoListItem done" : "todoListItem"}>
                <div className="contentSection">
            <label>
                <input type="checkbox"
                       className="checkbox"
                       checked={done}
                       onClick={()=>setTodo({...todo, done:!done})}
                />
                {content}
                {description}
            </label>
            <button className = "TodoButtonInside" onClick={onClickDelete}>제거</button>
                </div>
                <div className="description">{description}</div>
        </li>
    );
}

export default Todo;
