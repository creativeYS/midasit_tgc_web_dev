import './Todo.css';
import bookmarkOff from './bookmark_off';
import bookmarkOn from './bookmark_on';
import bin from './bin';

function Todo({todo, setTodo, deleteTodo}) {
    const {id, content, done, duedate, bookmark, memo} = todo;

    const onClickDelete = () => {
        deleteTodo(id);
    }

    const onClickBookmark = () => {
        todo.bookmark = !bookmark;
        setTodo(todo);
    }

    const onClickDueDate = (e) => {
        todo.duedate = e.target.value;
        setTodo(todo);
    }

    return (
        <li key={id} className="todoListItem">
            <img className="bm" src={bookmark ? bookmarkOn : bookmarkOff}
                alt="bookmark"
                onClick={onClickBookmark}
            />
            <input type="checkbox"
                   className="checkbox"
                   checked={done}
                   onClick={()=>setTodo({...todo, done:!done})}
            />
            <input type="date"
                   classname="due"
                   value={duedate}
                   onInput={onClickDueDate}
            />
            <label className={done ? "item done" : "item"}>
                {content}
            </label>
            <img className = "TodoButtonInside"
                 src={bin}
                 alt="delete"
                 onClick={onClickDelete}
            />
        </li>
    );
}

export default Todo;
