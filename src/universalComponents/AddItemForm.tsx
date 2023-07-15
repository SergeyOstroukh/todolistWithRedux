import React, {ChangeEvent, KeyboardEvent, memo, useState} from 'react';

export type AddItemForm ={
    callback:(value:string)=>void
}

export const AddItemForm =(props:AddItemForm) => {
    const{callback}=props
    console.log("item form")
    const[value,setValue]=useState<string>('')
    const[error,seterror]=useState<string|null>(null)

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.value)
        seterror(null)
    }
    const onKeyDownHandler = (e:KeyboardEvent<HTMLInputElement>) =>{
        if(e.key==='Enter'){
            onClickHandler()
        }
    }
    const onClickHandler = ()=>{
        if(value.trim()!==''){
            callback(value.trim())
            seterror(null)
            setValue('')
        }else{
            seterror("ERROR")
        }
    }
    return (
        <div>
            <input value={value} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
            <button onClick={onClickHandler}>add</button>
            {
                error && <span>{error}</span>
            }
        </div>
    );
}

