import React, {memo, useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../reducers/Store";
import {addTodolistAC, TodolistType} from "../../reducers/todolistReducer";
import {Todo} from "./Todo";
import {AddItemForm} from "../../universalComponents/AddItemForm";


export const Todolists = memo(() => {
    const dispatch = useDispatch()
    const todolists = useSelector<rootReducerType,TodolistType[]>(state => state.todolist)
    const addTodolist =useCallback((title:string)=>{
        dispatch(addTodolistAC(title))
    },[dispatch])


    return (
        <div>
            <h1>Добавить тудулист</h1>
            <AddItemForm callback={addTodolist}/>
            {
                todolists.map(t=>{
                    return(
                            <Todo
                                key={t.id}
                                todolistID={t.id}
                                title={t.title}
                                filterStatus={t.filter}
                            />
                    )
                })
            }
        </div>
    );
});

