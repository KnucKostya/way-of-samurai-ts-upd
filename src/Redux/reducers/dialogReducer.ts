// import {v1} from "uuid";
// import {Messagespage} from "../state";
//
//
// let initialState:Messagespage = {
//     users: [
//         {name: "Gosha", id: v1()},
//         {name: "Sveta", id: v1()},
//         {name: "Bob", id: v1()}
//     ],
//     messages: [
//         {id: v1(), message: 'Kinch'},
//         {id: v1(), message: 'Kinch1'},
//         {id: v1(), message: 'Kinch2'},
//     ]
// }
//
//
// export const dialogReducer = ( state:Messagespage = initialState , action:CombinerDialogsActionTypes):Messagespage => {
//
//     switch (action.type) {
//         case "ADD-NEW-MESSAGE": {
//
//             let newMessage = {id: v1(), message: action.newMessage}
//             let newUser = {id: v1(), name: action.user}
//             return {
//                 ...state,
//                 messages: [...state.messages, newMessage],
//                 users: [...state.users, newUser]
//                 }
//         }
//         default : return state
//
//     }}
//
//         //     case "CHANGE-DIALOG-VALUE":{
//         //         return {...state,textArreaDialog:action.textArreaValue};
//         //     }
//         // }
//     // }
//
// export type CombinerDialogsActionTypes = NewMessagesType
//     // | ChangeDialogValue
//
//
//     export type NewMessagesType = ReturnType<typeof NewMessageAC>
//
//     export const NewMessageAC = (newMessage: string, user: string) => {
//         return {
//             type: 'ADD-NEW-MESSAGE',
//             newMessage, user
//         } as const
//     }
// // }
// // type ChangeDialogValue = ReturnType<typeof ChangeDialogValueAC>
// //
// // export const ChangeDialogValueAC = (textArreaValue: string) => {
// //     return {
// //         type: 'CHANGE-DIALOG-VALUE',
// //         textArreaValue
// //     } as const
// // }

import {v1} from "uuid"
import {ADD_MESSAGE} from "../types"

export const initialState: MessagesDataType = {
    messages: [
        {id: v1(), message: "Hello"},
        {id: v1(), message: "How are you?"},
        {id: v1(), message: "Bye"},
    ],
}

export const messagesReducer = (
    state = initialState,
    action: MessagesActionType,
): MessagesDataType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: v1(),
                        message: action.newMessage,
                    },
                ],
            }
        default:
            return state
    }
}

// ActionCreator
export const addMessageAC = (newMessage: string) =>
    ({
        type: ADD_MESSAGE,
        newMessage,
    } as const)

// Types
export type MessagesData = {
    id: string
    message: string
}

export type MessagesDataType = {
    messages: Array<MessagesData>
}

export type MessagesActionType = ReturnType<typeof addMessageAC>
