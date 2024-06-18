import axios from "axios";

const backend = 'http://localhost:8081';

const getTodos = async () => {
    return new Promise((resolve, reject) => {
        axios.get(backend + '/todo')
            .then(res => {
                resolve(res.data);
            }).catch(e => {
            reject(e);
        });
    });
}


const addTodo = async (content, description, done) => {
    return new Promise((resolve, reject) => {
        axios.post(backend + '/todo', {content, description, done})
            .then(res => {
                resolve(res.data);
            }).catch(e => {
            reject(e);
        });
    });
}

const delTodo = async (id) => {
    return new Promise((resolve, reject) => {
        axios.delete(backend + '/todo/' + id)
            .then(res => {
                resolve(res.data);
            }).catch(e => {
            reject(e);
        });
    });
}

const updateTodo = async ({id, content, description, done}) =>{
    return new Promise((resolve, reject) => {
        const intDone = done ? 1 : 0;
        axios.put(backend + '/todo', {id, content, description, done: intDone})
            .then(res => {
                resolve(res.data);
            }).catch(e => {
            reject(e);
        });
    });
}

const delTodoAll = async () => {
    return new Promise((resolve, reject) => {
        axios.delete(backend + '/todo/all')
            .then(res => {
                resolve(res.data);
            }).catch(e => {
            reject(e);
        });
    });
}

export {getTodos, addTodo, delTodo, updateTodo, delTodoAll};