import { useState } from 'react'

import './App.css'
import type { Todo, TodoCommand } from './types/Todo'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodo] = useState<Todo[]>([]);
  const [activeTodo, setActiveTodo] = useState('new');

  const handleSave = (command : TodoCommand) =>{
    if ('id' in command) {
      setTodo( [...todos.filter(x=>x.id !== command.id), {id:command.id, title: command.title, description: command.description,isCompleted: false }]  );
      setActiveTodo('new')
    } else{
      setTodo( [...todos, {id: crypto.randomUUID() , title: command.title, description: command.description,isCompleted: false }]  );
    }
  };

  const handleDelete = (id:string) => {
    setTodo( prevTodos =>  prevTodos.filter(x=> x.id !== id )  )
  }

  const handleSelect = (id: string) => {
    setActiveTodo(id);
  }

  return (
    <>
      <h1>Simple Todo with backend</h1>
      <TodoForm key={ activeTodo } onSave={handleSave} todo = {activeTodo =='new' ? null : todos.find(x=>x.id === activeTodo)} ></TodoForm><br/>
      <TodoList todos={todos} onDelete={handleDelete} onSelect={handleSelect}></TodoList>
    </>
  )
}

export default App
