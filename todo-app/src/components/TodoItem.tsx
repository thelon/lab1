import type { Todo } from "../types/Todo";

interface TodoItemProps{
    todo : Todo
}

export default function TodoItem({todo} : TodoItemProps){
    return (<>
    <li><b>{todo.title}</b><br/>
    {todo.description}
    </li>
    </>)
}