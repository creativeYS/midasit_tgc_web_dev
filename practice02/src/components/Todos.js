import { useState, useEffect } from "react";
import './Todos.css';
import useTodos from '../hooks/useTodos'

// 새로운 컴포넌트를 정의합니다.
function Todos() {

  const [counter, setCounter] = useState(1);
  // api 호출을 통해 받아온 데이터를 todos라는 이름으로 사용합니다. (내부에서 useState, useEffect 사용됨)
  const todos = useTodos(counter);

  // 클릭 이벤트 핸들러 정의
  const handleClick = () => {
    setCounter(counter + 1); // 카운터를 증가시킵니다.
  };

  // 완료된 항목 수 계산
  const completedCount = todos.filter(todo => todo.completed).length;
  
  // 아직 완료되지 않은 항목 수 계산
  const notCompletedCount = todos.length - completedCount;

  // unfinishedItems 상태 추가
  const [unfinishedItems, setUnfinishedItems] = useState([]);

  useEffect(() => {
    // 렌더링 후 아직 완료되지 않은 항목들을 unfinishedItems 상태에 설정합니다.
    const unfinished = todos.filter(todo => !todo.completed);
    setUnfinishedItems(unfinished);

    // 일정 시간 후에 unfinishedItems의 클래스를 toggle하여 애니메이션을 활성화합니다.
    const timeout = setTimeout(() => {
      setUnfinishedItems([]);
    }, 3000); // 3초 후에 애니메이션을 시작합니다.

    // Cleanup function
    return () => clearTimeout(timeout);
  }, [todos]);

  return (
    <div className="Todos">
      {/* 버튼을 가운데 정렬하는 div */}
      <div className="centered-button">
        {/* 클릭 이벤트 핸들러를 부착한 버튼 */}
        <button id="incrementButton" onClick={handleClick}>
          {counter}
        </button>
      </div>

      {/* 항목 개수 정보 표시 */}
      <p className="item-info-left">전체 항목 수: {todos.length}</p>
      <p className="item-info-center">완료된 항목 수: {completedCount}</p>
      <p className="item-info-right">완료되지 않은 항목 수: {notCompletedCount}</p>
      
      <ul>
        {
          // todos 배열을 순회하며 각각의 요소를 <li> 태그를 사용하여 출력합니다.
          // 이렇게 반복되는 요소에 key라는 프로퍼티가 빠지면 콘솔에 경고가 뜹니다.
          todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              {todo.todo}
            </li>
          ))
        }
      </ul>

      {/* 완료되지 않은 항목에 애니메이션 클래스를 적용합니다. */}
      <ul>
        {unfinishedItems.map((todo) => (
          <li key={todo.id} className={`unfinished ${todo.completed ? 'completed' : ''}`}>
            {todo.todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

// 정의한 컴포넌트를 외부에서 사용할 수 있또록 export 합니다.
export default Todos;
