import {taskReducer} from "./taskReducer";
import {todolistReducer} from "./todolistReducer";
import {combineReducers, createStore} from "redux";


export type rootReducerType = ReturnType<typeof rootReducer>
export const rootReducer = combineReducers({
    tasks: taskReducer,
    todolist: todolistReducer
})


export const store = createStore(rootReducer)