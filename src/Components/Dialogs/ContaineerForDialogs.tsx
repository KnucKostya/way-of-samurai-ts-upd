import {NewMessageAC} from "../../Redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootState} from "../../Redux/store";
import {compose, Dispatch} from "redux";
import  {FC} from "react";
import withAuthRedirect from "../hoc/AuthRedirect";


export type MapStateToPropsType = ReturnType<typeof mapStateToProps>
export type MapDispatchToPropsType = {
    sendMessage:(value:string,user:string)=>void
    // takeValueFoo:(event:string)=>void
}


let mapStateToProps = (state: RootState) => {
    return {
        users: state.messagesPage.users,
        messages: state.messagesPage.messages,
        isAuth:state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        sendMessage:(value:string,user:string)=> dispatch(NewMessageAC(value,user)),
        // takeValueFoo: (event: string) => dispatch(ChangeDialogValueAC(event))
    }
}

export type DialogsUsersType = MapStateToPropsType & MapDispatchToPropsType


export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps)
    ,withAuthRedirect)(Dialogs)
;

