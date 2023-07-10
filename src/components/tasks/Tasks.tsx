import React from 'react';
import {useSelector} from "react-redux";
import {rootReducerType} from "../../reducers/Store";
import {taskType} from "../../reducers/taskReducer";
import {Task} from "./Task";

export type TasksPropsType = {
    todolistID: string
    filterStatus: string
}

export const Tasks = (props: TasksPropsType) => {
    const {todolistID, filterStatus} = props

    const tasks = useSelector<rootReducerType, taskType[]>(state => state.tasks[todolistID])
    let filterTasks = tasks
    if (filterStatus === 'completed') {
        filterTasks = tasks.filter(el => el.isDone !== false)
    }
    if (filterStatus === 'active') {
        filterTasks = tasks.filter(el => el.isDone !== true)
    }

    return (
        <div>
            {
                filterTasks.map(el => {
                    return (
                        <Task
                            key={el.id}
                            title={el.title}
                            isDone={el.isDone}
                            todolistID={todolistID}
                            taskID={el.id}
                        />
                    )
                })
            }
        </div>
    );
};

