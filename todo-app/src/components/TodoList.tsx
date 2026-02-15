import type { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";

interface TodoListProps{
    todos: Todo[]
}

export default function TodoListm({todos}:TodoListProps)
{
    return (<div>
        <ul>
        {todos && todos.map(x => <TodoItem todo={x}></TodoItem>) }
        </ul>    
    </div>);
}