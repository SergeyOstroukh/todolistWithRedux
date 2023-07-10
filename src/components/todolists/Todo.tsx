import React from 'react';
import {Button} from "../../universalComponents/Button";
import {AddItemForm} from "../../universalComponents/AddItemForm";
import {Tasks} from "../tasks/Tasks";
import {EditableSpan} from "../../universalComponents/EditableSpan";
import {useDispatch} from "react-redux";
import {removeTodolistAC} from "../../reducers/todolistReducer";
import {addTaskAC} from "../../reducers/taskReducer";


export type TodoPropsType = {
    todolistID: string
    title: string
    filterStatus: string
}
export const Todo = (props: TodoPropsType) => {
    const {todolistID, title, filterStatus} = props
    const dispatch = useDispatch()

    const removeTodolist =()=>{
        dispatch(removeTodolistAC(todolistID))
    }
    const addTask = (title:string) =>{
        dispatch(addTaskAC(todolistID,title))
    }

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
            <Button name={'all'} callback={() => {}}/>
            <Button name={'active'} callback={() => {}}/>
            <Button name={'completed'} callback={() => {}}/>
        </div>
    );
};
