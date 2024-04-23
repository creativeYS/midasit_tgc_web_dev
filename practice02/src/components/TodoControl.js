import './TodoControl.css'

function TodoControl({TodoCount, SetTodoCount})
{
    function OnClickAdd()
    {
        SetTodoCount(TodoCount + 1)
    }

    function OnClickSub()
    {
        if ( TodoCount > 1 ) SetTodoCount(TodoCount - 1)
    }

    return (
        <div>
            <div className='todo-control-sub' onClick={OnClickSub}>-</div>
            <div className='todo-control-add' onClick={OnClickAdd}>+</div>
        </div>
    ) 
}

export default TodoControl;