import { useState } from "react"
import type { Todo, TodoCommand } from "../types/Todo"

interface TodoFormProps{
    todo: Todo | null | undefined;
    onSave: (value: TodoCommand) => void;
}



export default function TodoForm({todo,onSave}: TodoFormProps){
    const [id] = useState(todo?.id || '')
    const [name, setName] = useState(todo?.title || '');
    const [desciption, setDescription] = useState(todo?.description || '');

    const handleSubmit = (e: React.SubmitEvent)=>{
        e.preventDefault();
        if (id == ''){
            onSave({title:name, description: desciption })
        } else{
            onSave({id: id, title:name, description: desciption})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Tytul:</label><br/>
            <input type="text" value={name} onChange={(x)=> setName(x.target.value)}></input><br/>
            <label>Opis</label><br/>
            <input type="text" value={desciption} onChange={(x) => setDescription(x.target.value) }></input>
            <input type="submit" value="Zapisz" />
        </form>
    )
}

