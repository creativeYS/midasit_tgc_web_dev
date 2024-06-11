import React from "react";
import "./Todos.css";
import { motion, AnimatePresence } from "framer-motion"; // framer-motion 라이브러리를 임포트합니다.
import ListState from "./Liststate.jsx";
import ListButton from "./Listbutton.jsx";
import TodoInput from "./TodoInput.jsx";
import Checkbox from "@mui/material/Checkbox";
import { FaTrash } from "react-icons/fa";

// 새로운 컴포넌트를 정의합니다.
function Todos(props) {
  const { todo } = props;
  const [counter, setCounter] = React.useState(1);
  const [completed, setCompleted] = React.useState(0);
  const [incompleted, setIncompleted] = React.useState(0);
  const [todos, setTodos] = React.useState([]);
  const [todoname, setTodoname] = React.useState("");
  const [start, setStart] = React.useState(-1);
  const [end, setEnd] = React.useState(-1);

  React.useEffect(() => {
    const getTodos = [...todo];
    setTodos(getTodos);
  }, [todo]);

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

  function ListComponent(props) {
    const { todo } = props;
    const [checked, setChecked] = React.useState(todo.completed);

    function handleChange() {
      setChecked(!checked);
      const data = {
        id: todo.id,
        completed: !todo.completed,
      };
      fetchPutData(data);
      setTodos((prev) => {
        return prev.map((item) => {
          if (item.id === todo.id) {
            return {
              ...item,
              completed: !item.completed,
            };
          } else {
            return item;
          }
        });
      });
    }

    async function fetchPutData(data) {
      const res = await fetch("http://localhost:8081/todo", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }

    async function fetchDeleteData(data) {
      const res = await fetch(`http://localhost:8081/todo/${data.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }

    function onClickDelete() {
      const data = {
        id: todo.id,
      };
      fetchDeleteData(data);
      setTodos((prev) => {
        return prev.filter((item) => item.id !== todo.id);
      });
    }

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "10px",
        }}
      >
        <div>
          <Checkbox
            style={{ margin: 0, padding: 0 }}
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          {todo.todo}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          {todo.start} ~ {todo.end} 시
          <button
            onClick={onClickDelete}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "40px",
              height: "25px",
              marginLeft: "10px",
            }}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    );
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
          width: "670px",
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
      <AnimatePresence>
        {todos.map(
          (
            todo // counter 상태에 따라 todos 배열의 일부를 렌더링합니다.
          ) => (
            <motion.div
              layout
              initial={{ opacity: 0, x: -100 }} // 초기 상태
              animate={{ opacity: 1, x: 0 }} // 최종 상태
              exit={{ x: 100, opacity: 0 }} // 제거될 때의 상태. 오른쪽으로 슬라이드하며 투명해집니다.
              transition={{ duration: 0.2 }} // 애니메이션 전환 지속 시간
              key={todo.id}
              className={
                todo.completed === true ? "line_complete" : "line_incomplete"
              }
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "20px",
                marginTop: "5px",
                border: "1px solid #000",
                borderRadius: "5px",
                width: "630px",
              }}
            >
              <ListComponent todo={todo} />
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
}

// 정의한 컴포넌트를 외부에서 사용할 수 있또록 export 합니다.
export default Todos;
