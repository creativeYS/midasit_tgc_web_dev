import { useState } from "react";

const TodoControlStyleAdd =
{
    fontSize: '150px',
    display : 'flex',
    position: 'fixed',
    bottom: '10%', // 화면 하단에서의 간격을 조정할 수 있습니다.
    'margin-right': '10%', // 좌측으로부터의 간격을 조정할 수 있습니다.
    color : 'green'
}

const TodoControlStyleSub =
{
    fontSize: '150px', 
    display : 'flex',
    position: 'fixed',
    bottom: '10%', // 화면 하단에서의 간격을 조정할 수 있습니다.
    'margin-left': '10%', // 좌측으로부터의 간격을 조정할 수 있습니다.
    color : 'red'
}

function TodoControl({TodoCount, SetTodoCount})
{
    function OnClickAdd()
    {
        SetTodoCount(TodoCount + 1)
    }

    function OnClickSub()
    {
        if ( TodoCount > 0 ) SetTodoCount(TodoCount - 1)
    }

    return (
        <div>
            <div style={TodoControlStyleSub} onClick={OnClickSub}>-</div>
            <div style={TodoControlStyleAdd} onClick={OnClickAdd}>+</div>
        </div>
    ) 
}

export default TodoControl;