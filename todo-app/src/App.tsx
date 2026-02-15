import { useState } from 'react'

import './App.css'
import type { Todo, TodoCommand } from './types/Todo'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodo] = useState<Todo[]>([]);

  const handleSave = (command : TodoCommand) =>{
    if ('id' in command) {
      setTodo( [...todos, {id:command.id, title: command.title, description: command.description,isCompleted: false }]  );
    } else{
      setTodo( [...todos, {id: crypto.randomUUID() , title: command.title, description: command.description,isCompleted: false }]  );
    }

  };

  return (
    <>
      <h1>Simple Todo with backend</h1>
      <TodoForm onSave={handleSave} todo = {null} ></TodoForm><br/>
      <TodoList todos={todos}></TodoList>
    </>
  )
}

export default App
