import {Messagespage} from "./state";
import {v1} from "uuid";


let initialState:Messagespage = {
    users: [
        {name: "Gosha", id: 0},
        {name: "Sveta", id: 1},
        {name: "Bob", id: 2}
    ],
    messages: [
        {id: v1(), message: 'Kinch'},
        {id: v1(), message: 'Kinch1'},
        {id: v1(), message: 'Kinch2'}
    ],
    textArreaDialog: ''
}


export const dialogReducer = ( state:Messagespage = initialState , action:CombinerDialogsActionTypes):Messagespage => {

    switch (action.type){
        case "ADD-NEW-MESSAGE": {
            if(state.textArreaDialog ===''){
                return state
            }

            let newMessage = {id:v1(),message: action.newMessage}
            // state.messages.push(newMessage)
            state.textArreaDialog = ''
            return {...state,messages:[...state.messages,newMessage]}
        }
        case "CHANGE-DIALOG-VALUE":{
            return {...state,textArreaDialog:action.textArreaValue};
        }
        default : return state
    }
}

export type CombinerDialogsActionTypes = NewMessagesType | ChangeDialogValue


type NewMessagesType = ReturnType<typeof NewMessageAC>

export const NewMessageAC = (newMessage: string) => {
    return {
        type: 'ADD-NEW-MESSAGE',
        newMessage
    } as const
}

type ChangeDialogValue = ReturnType<typeof ChangeDialogValueAC>

export const ChangeDialogValueAC = (textArreaValue: string) => {
    return {
        type: 'CHANGE-DIALOG-VALUE',
        textArreaValue
    } as const
}