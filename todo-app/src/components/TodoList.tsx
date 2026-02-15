import type { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";

interface TodoListProps{
    todos: Todo[],
    onDelete: (val:string) => void,
    onSelect: (val:string) => void
}

export default function TodoListm({todos, onDelete, onSelect}:TodoListProps)
{
    return (<div>
        <ul>
        {todos && todos.map(x => <TodoItem key={x.id} todo={x} onDelete={onDelete} onSelect={onSelect}></TodoItem>) }
        </ul>    
    </div>);
}