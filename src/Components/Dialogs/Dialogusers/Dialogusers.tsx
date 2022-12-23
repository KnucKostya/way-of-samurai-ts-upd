import React from 'react';
import s from './../Dialogs.module.css'
import { Link } from 'react-router-dom';
import {Messagespage, Users} from "../../../Redux/state";

export type DialoguserspropsType = {
   id: number;
   name: string;
}

let Dialogusers = (props:DialoguserspropsType) => {
    return <div>
        <Link to={'/dialogs/' + props.id} className={s.dialogusers}>{props.name} </Link>
    </div>

}

export default Dialogusers;
