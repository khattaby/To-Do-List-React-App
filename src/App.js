import './App.css';
import { useRef, useState } from 'react';

function App() {

  const [todos, setTodos] = useState([])

  const InputRef = useRef()

  const handleAddTodo = () => {
    const text = InputRef.current.value
    const newItem = { completed: false, text };
    setTodos([...todos, newItem])
    InputRef.current.value = ""
  }

  const handleItemDone = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  const handleDeleteItem = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className='to-do-container'>
        <ul>
          {todos.map(({ text, completed }, index) => {
            return <div className='item'>
              <li
                className={completed ? "done" : ""}
                key={index}
                onClick={() => handleItemDone(index)}
              >
                {text}
              </li>
              <span onClick={() => handleDeleteItem(index)}>❌</span>
            </div>
          })}
        </ul>
        <input ref={InputRef} placeholder="Enter item..."></input>
        <button onClick={handleAddTodo}> Add</button>
      </div>
    </div>
  );
}

export default App;
