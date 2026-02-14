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

export interface UpdateTodo {
    id: string,
    title: string,
    description: string
}