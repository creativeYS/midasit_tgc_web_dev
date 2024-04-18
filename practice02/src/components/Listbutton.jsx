import React from 'react';
import { FaPlusCircle, FaTrash } from "react-icons/fa";

export default function ListButton(props) {
  const { counter, setCounter, removeTodo } = props;

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
        onClick={() => setCounter(counter + 1)}
      >
        <FaPlusCircle />
      </button>
      <button
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
      </button>
    </div>
  );
}