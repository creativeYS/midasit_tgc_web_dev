const TodoTitleStyle = {
    fontSize: '30px', // 폰트 크기를 30px로 설정합니다.
    color: 'yellow' // 글자 색상을 노란색으로 설정합니다.
};

function TodoTitle()
{
    return (
    <div style={TodoTitleStyle}>
        <h1>
            오늘의 할일입니다.
        </h1>
    </div>
    );
}

export default TodoTitle;