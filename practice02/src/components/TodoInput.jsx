import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TodoInput(props) {
  const { setTodoname, setTodos, setStart, setEnd } = props;
  const [todoname, setTodoName] = React.useState("");
  const [startTime, setStartTime] = React.useState(0);
  const [endTime, setEndTime] = React.useState(0);

  function onKeyDown(e) {;
    // 엔터키를 누르면 할 일을 추가합니다.
    if (e.key === "Enter") {
      if (startTime > endTime) {
				console.log("typeof startTime", typeof startTime);
				console.log("typeof endTime", typeof endTime);
        alert("시작 시간이 끝나는 시간보다 늦습니다.");
        return;
      } else {
        setTodos((prev) => {
          return [
            ...prev,
            {
              id: prev.length + 1,
              todo: todoname,
              completed: false,
							start: startTime,
							end: endTime,
            },
          ];
        });
      }
    }
  }

  function onChangeTodoName(e) {
    setTodoName(e.target.value);
    setTodoname(e.target.value);
  }

  function onChangeStartTime(e) {
    const time = e.target.value;
    if (time < 0 || time > 24) {
      alert("시간은 0~24 사이의 숫자여야 합니다.");
      return;
    }
    setStartTime(Number(time));
		setStart(Number(time));
  }

  function onChangeEndTime(e) {
    const time = e.target.value;
    if (time < 0 || time > 24) {
      alert("시간은 0~24 사이의 숫자여야 합니다.");
      return;
    }
    setEndTime(Number(time));
		setEnd(Number(time));
  }

  return (
    <Box
      sx={{ width: "680px", ml: 3 }}
      display="flex"
      flexDirection={"row"}
      justifyContent={"space-between"}
			onKeyDown={onKeyDown}
    >
      <TextField
        id="standard-basic"
        label="todo"
        variant="standard"
        sx={{ width: "80%" }}
        onChange={onChangeTodoName}
      />
      <TextField
        id="standard-basic"
        label="start"
        variant="standard"
        sx={{ width: "9%", display: "flex", justifyContent: "left" }}
        onChange={onChangeStartTime}
      />
      <TextField
        id="standard-basic"
        label="end"
        variant="standard"
        sx={{ width: "9%", display: "flex", justifyContent: "right" }}
        onChange={onChangeEndTime}
      />
    </Box>
  );
}
