import './Todo.css';

function Todo({todo, setTodo, deleteTodo}) {
    const {id, content, done, startDate, endDate} = todo;
    
    const onClickDelete = () => {
        deleteTodo(id);
    }

    return (
        <li key={id} className={done ? "todoListItem done" : "todoListItem"}>
            <label>
                <input type="checkbox"
                       className="checkbox"
                       checked={done}
                       onClick={()=>setTodo({...todo, done:!done})}
                />
                {content}
                <span className="dueDateStyle">{startDate}</span>
                <span className="dueDateStyle">{endDate}</span>
            </label>
            <button className = "TodoButtonInside" onClick={onClickDelete}>제거</button>
        </li>
    );
}

export default Todo;
