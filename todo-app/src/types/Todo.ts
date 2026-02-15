export interface Todo {
    id: string,
    title: string, 
    description: string,
    isCompleted: boolean
}

export interface CreateTodo {
    title: string,
    description: string
}

export interface UpdateTodo extends CreateTodo {
    id: string
}

export type TodoCommand  = UpdateTodo | CreateTodo 