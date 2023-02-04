import React from 'react';
import s from './../Dialogs.module.css'

type MessagespropsType = {
    message : string|undefined
}

let Message = (props:MessagespropsType) => {
    return <div className={s.message}>
        {props.message}
    </div>
}

export default Message;