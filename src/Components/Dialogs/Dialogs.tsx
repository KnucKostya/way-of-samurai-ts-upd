import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';

import {Messages, textArreaValueforDialogs, TsarType, Users} from "../../Redux/state";
import Dialogusers from "./Dialogusers/Dialogusers";
import Message from "./Messages/Messages";
import {ChangeDialogValueAC, NewMessageAC} from "../../Redux/dialogReducer";

type DialoguserspropsType = {
    users: Array<Users>
    messages: Array<Messages>
    sendMessage:()=>void
    takeValueFoo:(event:string)=>void
    textArreaValueforDialogs:string
}


const Dialogs = (props: DialoguserspropsType) => {
    // USERS
    let messageUser = props.users
        .map(user =>
            (<Dialogusers key={user.id} name={user.name} id={user.id}/>)
        )
    //MAP MESSAGES
    let messagesMap = props.messages
        .map((m, index) => (<Message key={index} message={m.message}/>))


    const sendMessage = () => {
        props.sendMessage()
    }

    const takeValueFoo = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.takeValueFoo(e.currentTarget.value)
    }

    //DIALOG RESULT V V V V

    return <div className={s.dialogs}>
        <div>
            {messageUser}
        </div>
        <div>
            {messagesMap}
        </div>

        <textarea placeholder={'enter message'}
                  value={props.textArreaValueforDialogs}
                  onChange={takeValueFoo}
        >
        </textarea>
        <button onClick={sendMessage}></button>


    </div>
}
export default Dialogs;
