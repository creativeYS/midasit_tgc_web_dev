import React from "react";
import "./Todos.css";
import useTodos from "../hooks/useTodos";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // framer-motion 라이브러리를 임포트합니다.

// 새로운 컴포넌트를 정의합니다.
function Todos() {
  const [counter, setCounter] = React.useState(1);
  const [completed, setCompleted] = React.useState(0);
  const [incompleted, setIncompleted] = React.useState(0);
  const todos = useTodos(counter);

  React.useEffect(() => {
    let completedCount = 0;
    let incompleted = 0;
    todos.forEach((todo) => {
      if (todo.completed === true) {
        completedCount++;
      } else {
        incompleted++;
      }
    });
    setCompleted(completedCount);
    setIncompleted(incompleted);
  }, [todos]);

  function removeTodo() {
    if (counter > 0) {
      // counter가 0보다 클 때만 감소시킵니다.
      setCounter(counter - 1);
    }
  }

  return (
    <div className="Todos">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "670px",
          marginLeft: "20px",
        }}
      >
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
      </div>
      <ul>
        <AnimatePresence>
          {todos.slice(0, counter).map(
            (
              todo // counter 상태에 따라 todos 배열의 일부를 렌더링합니다.
            ) => (
              <motion.li
                layout
                initial={{ opacity: 0, x: -100 }} // 초기 상태
                animate={{ opacity: 1, x: 0 }} // 최종 상태
                exit={{ x: 100, opacity: 0 }} // 제거될 때의 상태. 오른쪽으로 슬라이드하며 투명해집니다.
                transition={{ duration: 0.4 }} // 애니메이션 전환 지속 시간
                key={todo.id}
                style={{
                  margin: "5px",
                  width: "650px",
                  border: "none",
                  borderBottom: "1px solid #000",
                }}
                id={
                  todo.completed === true ? "line_complete" : "line_incomplete"
                }
              >
                {todo.todo}
              </motion.li>
            )
          )}
        </AnimatePresence>
      </ul>
    </div>
  );
}

// 정의한 컴포넌트를 외부에서 사용할 수 있또록 export 합니다.
export default Todos;
