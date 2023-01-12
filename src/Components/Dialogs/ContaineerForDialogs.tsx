import {Messages, Users} from "../../Redux/state";
import {ChangeDialogValueAC, combinerTypes, NewMessageAC} from "../../Redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect, ConnectedComponent, ConnectedProps} from "react-redux";
import {AppDispatch, RootState} from "../../Redux/store";
import {Dispatch} from "redux";
import React from "react";


// type DialoguserspropsType = {
//     users: Array<Users>
//     messages: Array<Messages>
//     dispatch: (action: combinerTypes) => void
//     textArreaValueforDialogs: string
// }
//
//
// const ContaineerForDialogs = (props: DialoguserspropsType) => {
//
//     let sendMessage = () => {
//         props.dispatch(NewMessageAC(props.textArreaValueforDialogs))
//     }
//
//     const takeValueFoo = (event: string) => {
//         props.dispatch(ChangeDialogValueAC(event))
//     }
//
//     //DIALOG RESULT V V V V
//
//     return <div>
//         <Dialogs
//             users={props.users}
//             messages={props.messages}
//             sendMessage={sendMessage}
//             takeValueFoo={takeValueFoo}
//             textArreaValueforDialogs={props.textArreaValueforDialogs}
//         />
//     </div>
// }


export type MapStateToPropsType = {
    users: Array<Users>
    messages: Array<Messages>
    textArreaValueforDialogs: string
}
export type MapDispatchToPropsType = {
    sendMessage:(value:string)=>void
    takeValueFoo:(event:string)=>void
}


let mapStateToProps = (state: RootState):MapStateToPropsType => {
    return {
        users: state.messagesPage.users,
        messages: state.messagesPage.messages,
        textArreaValueforDialogs: state.messagesPage.textArreaDialog,
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        sendMessage:(value:string)=> dispatch(NewMessageAC(value)),
        takeValueFoo: (event: string) => dispatch(ChangeDialogValueAC(event))
    }
}

export type DialogsUsersType = MapStateToPropsType & MapDispatchToPropsType



const ContaineerForDialogs=connect(mapStateToProps, mapDispatchToProps)(Dialogs);




export default ContaineerForDialogs;

