import React from 'react';
import { FaPlusCircle, FaTrash } from "react-icons/fa";

export default function ListButton(props) {
  const { counter, setCounter, removeTodo, setTodos, todoname, start, end } = props;

  function onClickAddTodo(){
    if (todoname === "" || start > end || start === -1 || end === -1) {
      return;
    }
    const newData = {
      todo: todoname,
      completed: false,
      start:start,
      end:end,
    }
    fetchPostData(newData)
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: prev.length + 1,
          todo: todoname,
          completed: false,
          start:start,
          end:end,
        },
      ];
    });
    setCounter(counter + 1);
  }

  async function fetchPostData(data) {
    const res = await fetch("http://localhost:8081/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  return (
    <div style={{ display: "flex" }}>
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40px",
          height: "25px",
          marginRight: "5px",
        }}
        onClick={onClickAddTodo}
      >
        <FaPlusCircle />
      </button>
      {/* <button
        onClick={removeTodo}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40px",
          height: "25px",
        }}
      >
        <FaTrash />
      </button> */}
    </div>
  );
}