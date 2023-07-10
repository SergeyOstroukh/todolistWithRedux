import {addTodolistACType, removeTodolistACType, todolistId1, todolistId2} from "./todolistReducer";
import {v1} from "uuid";

export type TasksStateType = {
    [key: string]: taskType[]
}
export type taskType = {
    id: string
    title: string
    isDone: boolean
}

const initialTasks: TasksStateType = {
    [todolistId1]: [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true}
    ],
    [todolistId2]: [
        {id: v1(), title: "Milk", isDone: true},
        {id: v1(), title: "React Book", isDone: true}
    ]

}

export const taskReducer = (state: TasksStateType = initialTasks, action: BossType) => {
    switch (action.type) {
        case 'ADD-TODOLIST': {
            return {...state, [action.payload.todoId]: []}
        }
        case "REMOVE-TODOLIST": {
            let newState = {...state}
            delete newState[action.payload.todolistID]
            return newState
        }
        case "ADD-TASK": {
            const newTask = {id: v1(), title: action.payload.title, isDone: false}
            return {...state, [action.payload.todolistID]: [newTask, ...state[action.payload.todolistID]]}
        }
        case "REMOVE-TASK": {
            return {
                ...state,
                [action.payload.todolistID]: state[action.payload.todolistID].filter(el => el.id !== action.payload.taskID)
            }
        }
        case "CHANGE-STATUS-TASK": {
            return {
                ...state,
                [action.payload.todolistID]: state[action.payload.todolistID].map(el => el.id === action.payload.taskID ? {
                    ...el,
                    isDone: action.payload.isDone
                } : el)
            }
        }
        case "CHANGE-TASK-TITLE":{
            return {...state,[action.payload.todolistID]:state[action.payload.todolistID].map(el=>el.id===action.payload.taskID?{...el,title:action.payload.Newtitle}:el)}
        }
        default:
            return state
    }
}

export type BossType = addTodolistACType
    | removeTodolistACType
    | addTaskACType
    | removeTaskACType
    | changeStatusTaskACType
    | changeTaskTitleACType


export type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (todolistID: string, title: string) => {
    return {
        type: 'ADD-TASK',
        payload: {title, todolistID}
    } as const
}
export type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (todolistID: string, taskID: string) => {
    return {
        type: 'REMOVE-TASK',
        payload: {todolistID, taskID}
    } as const
}
export type changeStatusTaskACType = ReturnType<typeof changeStatusTaskAC>
export const changeStatusTaskAC = (todolistID: string, taskID: string, isDone: boolean) => {
    return {
        type: 'CHANGE-STATUS-TASK',
        payload: {todolistID, taskID, isDone}
    } as const
}

export type changeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>
export const changeTaskTitleAC = (todolistID: string, taskID: string, Newtitle: string) => {
    return {
        type: 'CHANGE-TASK-TITLE',
        payload: {todolistID, taskID, Newtitle}
    } as const
}












