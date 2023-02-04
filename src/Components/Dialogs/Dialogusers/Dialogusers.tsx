import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';

export type DialoguserspropsType = {
   id: number;
   name: string;
}

let Dialogusers = (props:DialoguserspropsType) => {
    return <div>
        <NavLink to={'/dialogs/' + props.id} className={s.dialogusers}>{props.name} </NavLink>
    </div>

}

export default Dialogusers;
