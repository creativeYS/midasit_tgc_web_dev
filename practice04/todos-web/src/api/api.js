let nextId = 4;
let todos = [
    {
        id: 1,
        content: 'todo test 1',
        done: false,
    },
    {
        id: 2,
        content: 'Hello world',
        done: true,
    },
    {
        id: 3,
        content: 'TGC class',
        done: false,
    },
];

const getTodos = () => {
    return todos;
}

const addTodo = (content, done) => {
    const newId= nextId;
    nextId = nextId + 1;

    const newTodo = {id: newId, content, done}
    todos = [...todos, newTodo];
    return newTodo;
}

const delTodo = (id) => {
    todos = todos.filter(t=>t.id !== id);
}

const updateTodo = ({id, content, done}) =>{
    todos = todos.map(t=>t.id === id ? {content, done}: t);
}

export {getTodos, addTodo, delTodo, updateTodo};