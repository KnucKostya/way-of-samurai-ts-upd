import {Messagespage} from "./state";
import {v1} from "uuid";


let initialState:Messagespage = {
    users: [
        {name: "Gosha", id: v1()},
        {name: "Sveta", id: v1()},
        {name: "Bob", id: v1()}
    ],
    messages: [
        {id: v1(), message: 'Kinch'},
        {id: v1(), message: 'Kinch1'},
        {id: v1(), message: 'Kinch2'},
    ]
}


export const dialogReducer = ( state:Messagespage = initialState , action:CombinerDialogsActionTypes):Messagespage => {

    switch (action.type) {
        case "ADD-NEW-MESSAGE": {

            let newMessage = {id: v1(), message: action.newMessage}
            let newUser = {id: v1(), name: action.user}
            return {
                ...state,
                messages: [...state.messages, newMessage],
                users: [...state.users, newUser]
                }
        }
        default : return state

    }}

        //     case "CHANGE-DIALOG-VALUE":{
        //         return {...state,textArreaDialog:action.textArreaValue};
        //     }
        // }
    // }

export type CombinerDialogsActionTypes = NewMessagesType
    // | ChangeDialogValue


    type NewMessagesType = ReturnType<typeof NewMessageAC>

    export const NewMessageAC = (newMessage: string, user: string) => {
        return {
            type: 'ADD-NEW-MESSAGE',
            newMessage, user
        } as const
    }
// }
// type ChangeDialogValue = ReturnType<typeof ChangeDialogValueAC>
//
// export const ChangeDialogValueAC = (textArreaValue: string) => {
//     return {
//         type: 'CHANGE-DIALOG-VALUE',
//         textArreaValue
//     } as const
// }