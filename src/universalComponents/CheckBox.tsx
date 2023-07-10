import React from 'react';

export type CheckBoxPropsType={
    callback:(value:boolean)=>void
    checked:boolean
}

export const CheckBox = (props:CheckBoxPropsType) => {
    const{callback,checked}=props

    const onClickHandler= ()=>{
        callback(!checked)
    }

    return (
       <input onChange={onClickHandler} checked={checked} type={"checkbox"}/>
    );
};

