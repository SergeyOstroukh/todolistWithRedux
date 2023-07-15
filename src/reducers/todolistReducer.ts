import {v1} from "uuid";

export type FilterType = 'all' | 'completed' | 'active'
export type TodolistType = {
    id: string
    title: string
    filter: FilterType
}

export let todolistId1 = v1();
export let todolistId2 = v1();
const initialTodo: TodolistType[] = [
    {id: todolistId1, title: "What to learn", filter: "all"},
    {id: todolistId2, title: "What to buy", filter: "all"}
]

export const todolistReducer = (state: TodolistType[] = initialTodo, action: BossType) => {
    switch (action.type) {
        case 'ADD-TODOLIST': {
            let newTodolist = {id: action.payload.todoId, title: action.payload.title, filter: 'all'}
            return [...state, newTodolist]
        }
        case "REMOVE-TODOLIST": {
            return state.filter(el => el.id !== action.payload.todolistID)
        }
        case "CHANGE-TASK-FILTER":{
            return state.map(el=>el.id===action.payload.todolistID?{...el,filter:action.payload.filterName}:el)
        }
        default:
            return state
    }
}
export type BossType = addTodolistACType
    | removeTodolistACType
    | changeTaskFilterACType

export type addTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {title, todoId: v1()}
    } as const
}
export type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistID: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {todolistID}
    } as const
}

export type changeTaskFilterACType = ReturnType<typeof changeTaskFilterAC>
export const changeTaskFilterAC = (todolistID: string, filterName: string) => {
    return {
        type: 'CHANGE-TASK-FILTER',
        payload: {todolistID, filterName}
    } as const
}