
const todoStyle = {
    width: '40%', // 부모 요소의 30% 크기로 설정합니다.
    height: '80%', // 부모 요소의 30% 크기로 설정합니다.
    position: 'absolute',
    top: '10%', // 위쪽으로 20%만큼 여백을 남깁니다.
    bottom: '10%', // 아래쪽으로 20%만큼 여백을 남깁니다.
    left: '30%', // 왼쪽으로 35%만큼 여백을 남깁니다.
    right: '30%', // 오른쪽으로 35%만큼 여백을 남깁니다.
    backgroundColor: 'blue' // 배경색을 빨간색으로 변경합니다.
  };

function TodoTemplate({ children }) {
    return <div style={todoStyle}>
        {children} 
    </div>;
  }
  
  export default TodoTemplate;