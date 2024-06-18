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
            </label>
            <button className = "TodoButtonInside" onClick={onClickDelete}>제거</button>
            <label>
                <span className="StartDateStyle">{startDate}</span>
                <span className="EndDateStyle">{endDate}</span>
            </label>
        </li>
    );
}

export default Todo;
