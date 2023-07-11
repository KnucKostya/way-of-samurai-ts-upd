import React from 'react';
import s from './Dialogs.module.css';
import Dialogusers from "./Dialogusers/Dialogusers";
import Message from "./Messages/Messages";
import {DialogsUsersType} from "./ContaineerForDialogs";
import DialogsForm from "../../../Common/Forms/DialogsForm";


const Dialogs = (props: DialogsUsersType) => {
    //MAP USERS
    let messageUser = props.users
        .map(user =>
            (<Dialogusers key={user.id} name={user.name} id={user.id}/>)
        )
    //MAP MESSAGES
    let messagesMap = props.messages
        .map((m, index) => (<Message key={index} message={m.message}/>))


    return <div className={s.dialogs}>
        <div>
            {messageUser}
        </div>
        <div>
            {messagesMap}
        </div>
        <DialogsForm
              sendMessage={props.sendMessage}/>
    </div>
}
export default Dialogs;
