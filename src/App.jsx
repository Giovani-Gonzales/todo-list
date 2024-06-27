import './App.css'

import { useState } from 'react'

import Form from './components/Form'

function App() {

  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleAddTodo = () => {
    if (inputValue.trim() !== ''){
      setTodos([...todos, {id: Date.now(), text: inputValue, completed: false}])
      setInputValue('')
    }
  }

  const handleToggleTodo = (id) => {
    setTodos.map(
      (todo) => todo.id == id ? {...todo, completed: !todo.completed } : todo
    )
  }

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div>
      <h1>Lista do Nicolas</h1>
      <div className='input-container'>
        <input
        type='text'
        placeholder='Adicionar novo item'
        value={inputValue}
        onChange={handleInputChange}/>
        <button onClick={handleAddTodo}>Adicionar Tarefa</button>
      </div>

      <ul className='container-list'>
        {todos.map((todo) => (
          <Form
          key={todo.id}
          todo={todo}
          handleToggleTodo={handleToggleTodo}
          handleDeleteTodo={handleDeleteTodo}/>
        ))}
      </ul>
    </div>
  )
}

export default App
