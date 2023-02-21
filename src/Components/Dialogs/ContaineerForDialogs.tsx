import {Messages, Users} from "../../Redux/state";
import {ChangeDialogValueAC, NewMessageAC} from "../../Redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootState} from "../../Redux/store";
import {compose, Dispatch} from "redux";
import React, {FC} from "react";
import withAuthRedirect from "../hoc/AuthRedirect";


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


// export type MapStateToPropsType = {
//     users: Array<Users>
//     messages: Array<Messages>
//     textArreaValueforDialogs: string
// }
export type MapStateToPropsType = ReturnType<typeof mapStateToProps>
export type MapDispatchToPropsType = {
    sendMessage:(value:string)=>void
    takeValueFoo:(event:string)=>void
}


let mapStateToProps = (state: RootState) => {
    return {
        users: state.messagesPage.users,
        messages: state.messagesPage.messages,
        textArreaValueforDialogs: state.messagesPage.textArreaDialog,
        isAuth:state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        sendMessage:(value:string)=> dispatch(NewMessageAC(value)),
        takeValueFoo: (event: string) => dispatch(ChangeDialogValueAC(event))
    }
}

export type DialogsUsersType = MapStateToPropsType & MapDispatchToPropsType


export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps)
    ,withAuthRedirect)(Dialogs)

;

