import React from "react";
import "./Todos.css";
import useTodos from "../hooks/useTodos";
import { motion, AnimatePresence } from "framer-motion"; // framer-motion 라이브러리를 임포트합니다.
import ListState from "./Liststate.jsx";
import ListButton from "./Listbutton.jsx";
import TodoInput from "./TodoInput.jsx";
// 새로운 컴포넌트를 정의합니다.
function Todos() {
  const [counter, setCounter] = React.useState(1);
  const [completed, setCompleted] = React.useState(0);
  const [incompleted, setIncompleted] = React.useState(0);
  const [todos, setTodos] = React.useState([]);
  const [todoname, setTodoname] = React.useState("");
  const [start, setStart] = React.useState(-1);
  const [end, setEnd] = React.useState(-1);

  React.useEffect(() => {
    let completedCount = 0;
    let incompleted = 0;
    console.log("todos", todos);
    if (counter === 0) {
      setCompleted(0);
      setIncompleted(0);
      return;
    } else {
      todos.forEach((todo) => {
        if (todo.completed === true) {
          completedCount++;
        } else {
          incompleted++;
        }
      });
      setCompleted(completedCount);
      setIncompleted(incompleted);
    }
  }, [todos]);

  function removeTodo() {
    if (counter > 0) {
      // counter가 0보다 클 때만 감소시킵니다.
      setCounter(counter - 1);
    }
  }

  return (
    <div className="Todos">
      <div className="Todos_Header">
        <ListState
          counter={counter}
          completed={completed}
          incompleted={incompleted}
        />
        <ListButton
          counter={counter}
          setCounter={setCounter}
          removeTodo={removeTodo}
          setTodos={setTodos}
          todoname={todoname}
          start={start}
          end={end}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TodoInput
          setTodoname={setTodoname}
          setTodos={setTodos}
          setStart={setStart}
          setEnd={setEnd}
        />
      </div>
      <ul>
        <AnimatePresence>
          {todos.map(
            (
              todo // counter 상태에 따라 todos 배열의 일부를 렌더링합니다.
            ) => (
              <motion.li
                layout
                initial={{ opacity: 0, x: -100 }} // 초기 상태
                animate={{ opacity: 1, x: 0 }} // 최종 상태
                exit={{ x: 100, opacity: 0 }} // 제거될 때의 상태. 오른쪽으로 슬라이드하며 투명해집니다.
                transition={{ duration: 0.3 }} // 애니메이션 전환 지속 시간
                key={todo.id}
                className={
                  todo.completed === true ? "line_complete" : "line_incomplete"
                }
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {todo.todo}
                  <div>
                    {todo.start} 시 ~ {todo.end} 시
                  </div>
                </div>
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
