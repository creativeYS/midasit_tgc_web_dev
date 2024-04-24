import TodoItem from './TodoItem'
import useTodos from "../hooks/useTodos.js"

const TodoListStyle = 
{
}

function TodoList({TodoCount})
{
    const todos = useTodos(TodoCount);
    console.log(todos);
    return (
        <div style={TodoListStyle}>
            {todos.map(todo => (
            <TodoItem
            id ={todo.id}
            text={todo.todo}
            checked={todo.completed}
            />
        ))}
        </div>
    );
}

export default TodoList;