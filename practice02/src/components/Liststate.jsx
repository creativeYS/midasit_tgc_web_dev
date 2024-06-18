import React from 'react';

export default function ListState(props) {
  const { counter, completed, incompleted } = props;
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ margin: 0 }}>{counter}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: 15,
        }}
      >
        <h4 style={{ margin: 0, display: "flex", justifyContent: "start" }}>
          completed : {completed}
        </h4>
        <h4 style={{ margin: 0, display: "flex", justifyContent: "start" }}>
          incompleted : {incompleted}
        </h4>
      </div>
    </div>
  )
}