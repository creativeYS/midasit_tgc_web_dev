
const TodoItemStyle1 =
{
  fontSize: '30px', // 폰트 크기를 30px로 설정합니다.
  color: 'white',
  "text-decoration": 'green dotted underline',
}

const TodoItemStyle2 =
{
  fontSize: '30px', // 폰트 크기를 30px로 설정합니다.
  color: 'red' 
}

function ToDoItem({ id, text, checked }) {
  console.log(checked);
    return (
      <div style={ checked == true ? TodoItemStyle1 : TodoItemStyle2 }>{text}</div>
    );
  }

  export default ToDoItem;