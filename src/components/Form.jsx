import React from 'react'
import './Form.css'

const Form = ({todo, handleToggleTodo, handleDeleteTodo}) => {
  return (
    <div className='container-item'>
        <li className={todo.completed ? 'completed' : ''}>
            <span onClick={() => handleToggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
        </li>
    </div>
  )
}

export default Form
