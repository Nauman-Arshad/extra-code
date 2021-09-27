import React from 'react'
import TodoItems from './TodoItems';

function Todo() {
    return (
        <div className="todo-list">
            <TodoItems />
            <TodoItems />
            <TodoItems />
            <TodoItems />
        </div>
    )
}
export default Todo