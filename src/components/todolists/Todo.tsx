import React, {memo, useCallback} from 'react';
import {Button} from "../../universalComponents/Button";
import {AddItemForm} from "../../universalComponents/AddItemForm";
import {Tasks} from "../tasks/Tasks";
import {EditableSpan} from "../../universalComponents/EditableSpan";
import {useDispatch} from "react-redux";
import {changeTaskFilterAC, removeTodolistAC} from "../../reducers/todolistReducer";
import {addTaskAC} from "../../reducers/taskReducer";


export type TodoPropsType = {
    todolistID: string
    title: string
    filterStatus: string
}
export const Todo = memo((props: TodoPropsType) => {
    const {todolistID, title, filterStatus} = props
    const dispatch = useDispatch()

    const removeTodolist =useCallback(()=>{
        dispatch(removeTodolistAC(todolistID))
    },[dispatch])
    const addTask = useCallback((title:string) =>{
        dispatch(addTaskAC(todolistID,title))
    },[dispatch])
    const newStatusFilter = useCallback((nameFilter:string) =>{
        dispatch(changeTaskFilterAC(todolistID,nameFilter))
    },[dispatch])

    return (
        <div>
            <div>
                <span><EditableSpan oldTitle={title} callback={()=>{}}/></span>
                <Button callback={removeTodolist} name={'x'}/>
                <AddItemForm callback={addTask}/>
            </div>
            <Tasks
                todolistID={todolistID}
                filterStatus={filterStatus}
            />
            <Button name={'all'} callback={()=>newStatusFilter('all')}/>
            <Button name={'active'} callback={()=>newStatusFilter('active')}/>
            <Button name={'completed'} callback={()=>newStatusFilter('completed')}/>
        </div>
    );
})
