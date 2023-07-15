import React, {memo, useCallback} from 'react';
import {CheckBox} from "../../universalComponents/CheckBox";
import {Button} from "../../universalComponents/Button";
import {EditableSpan} from "../../universalComponents/EditableSpan";
import {useDispatch} from "react-redux";
import {changeStatusTaskAC, changeTaskTitleAC, removeTaskAC} from "../../reducers/taskReducer";

export type TaskPropsType={
    title:string
    isDone:boolean
    todolistID:string
    taskID:string
}

export const Task = memo((props:TaskPropsType) => {
    const{title,isDone,todolistID,taskID}=props

    const dispatch = useDispatch()

    const removeTask = useCallback(()=>{
        dispatch(removeTaskAC(todolistID,taskID))
    },[dispatch])
    const changeStatus =(checked:boolean)=>{
        dispatch(changeStatusTaskAC(todolistID,taskID,checked))
    }
    const changeTaskTitleOnDoubleClick =(title:string)=>{
        dispatch(changeTaskTitleAC(todolistID,taskID,title))
    }


    return (
        <div>
                <CheckBox callback={(value)=>changeStatus(value)} checked={isDone}/>
                <span><EditableSpan oldTitle={title} callback={changeTaskTitleOnDoubleClick}/></span>
                <Button name={'x'} callback={removeTask}/>
        </div>
    );
});

