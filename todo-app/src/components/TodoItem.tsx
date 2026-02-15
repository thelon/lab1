import type { Todo } from "../types/Todo";

interface TodoItemProps{
    todo : Todo,
    onDelete: (val:string) => void,
    onSelect: (val:string) => void
}

export default function TodoItem({todo, onDelete, onSelect} : TodoItemProps){
    return (<>
    <li onClick={() => onSelect(todo.id)}><b>{todo.title}</b><br/>
    {todo.description} 
    <button value="Usun" onClick={ () => onDelete(todo.id)}>delete</button>
    </li>
    </>)
}