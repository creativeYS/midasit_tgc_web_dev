import React from 'react';
import { FaPlusCircle, FaTrash } from "react-icons/fa";

export default function ListButton(props) {
  const { counter, setCounter, removeTodo, setTodos, todoname, start, end } = props;

  function onClickAddTodo(){
    if (todoname === "") {
      return;
    }
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