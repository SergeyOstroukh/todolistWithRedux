import React, {ChangeEvent, useState} from 'react';

export type EditableSpanPropsType={
    oldTitle:string
    callback:(newTitle:string)=>void
}

export const EditableSpan = (props:EditableSpanPropsType) => {
    const{oldTitle,callback}=props
    const[newTitle,setNewTitle]=useState(oldTitle)
    const[edit,setEdit]=useState(false)
    const[error,setError]=useState<string|null>(null)

    const onChangeHandler =(e:ChangeEvent<HTMLInputElement>)=>{
        setNewTitle(e.currentTarget.value)
        setError(null)
    }
    const onDoubleClickHandler=()=>{
        setEdit(!edit)
    }
    const onBlurHandler = () =>{
     if(!error){
         if(newTitle.trim()!==''){
             callback(newTitle.trim())
             setError(null)
             setEdit(!edit)
         }else {
             setError('ERRRRROOOOR')
         }
     }

    }

    return (

        edit? <div>
        <input value={newTitle} onChange={onChangeHandler} onBlur={onBlurHandler} autoFocus />
                {error && <span>{error}</span>}
        </div>
            :
            <span onDoubleClick={onDoubleClickHandler}>{newTitle}</span>

    );
};

