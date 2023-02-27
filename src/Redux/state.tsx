import {responseDataType} from "../Components/Profile/ProfileClassComponent";
import {initStateType} from "./authReducer";

// export type store = {
//     _state: State
//     subscribe: (observer: any) => void
//     _rerenderEntireTree: (state: State) => void
//     getState: () => State
//     dispatch: (action: TsarType) => void
//     // textArreaText:any
// }
// Type for all STATE
export type WholeStateType = {
    profilePage: ProfilePageDataType
    messagesPage: Messagespage
    sideBar: Sidebartype
    auth:initStateType
}

// -----------------------------------Types-------------------------------


//------------profilePage
export type ProfilePageDataType = {
    postData: Array<Postdata>
    textAreaText: string
    profilePageInfo: responseDataType | null
    status:string
}
export type Postdata = {
    postText: string
    likesCount: number
}
//---------messagesPage
export type Messagespage = {
    users: Array<Users>
    messages: Array<Messages>
    textArreaDialog: string
}
export type Users = {
    name: string
    id: number
}
export type Messages = {
    message: string
    id: string
}
//------sideBar
export type Sidebartype = {
    user1: string
    user2: string
    user3: string
}
// -----------------------------------Types-------------------------------


// ---------------------------ACTION CREATORS--------------------------
// export type TsarType = AddPostType | ChangeValueType | NewMessagesType
//     | ChangeDialogValue
//
// export type AddPostType = ReturnType<typeof AddPostAC>
//
// const AddPostAC = (newPostMessage: string) => {
//     return {
//         type: 'ADD-POST',
//         newPostMessage
//     } as const
// }
//
//
// type ChangeValueType = ReturnType<typeof ChangeValueAC>
//
// const ChangeValueAC = (textArreaValue: string) => {
//     return {
//         type: 'CHANGE-VALUE',
//         textArreaValue
//     } as const
// }
//
// type NewMessagesType = ReturnType<typeof NewMessageAC>
//
// const NewMessageAC = (newMessage: string) => {
//     return {
//         type: 'ADD-NEW-MESSAGE',
//         newMessage
//     } as const
// }
//
// type ChangeDialogValue = ReturnType<typeof ChangeDialogValueAC>
//
// const ChangeDialogValueAC = (textArreaValue: string) => {
//     return {
//         type: 'CHANGE-DIALOG-VALUE',
//         textArreaValue
//     } as const
// }

// ---------------------------ACTION CREATORS--------------------------


// let store: store = {
//     _state: {
//
//         profilePage: {
//             postData: [
//                 {postText: 'Hello World', likesCount: 11},
//                 {postText: 'Hello Kostya', likesCount: 12},
//                 {postText: 'Hello Komk', likesCount: 41}
//             ],
//             textArreaText: ''
//
//         },
//         messagesPage: {
//             users: [
//                 {name: "Gosha", id: 0},
//                 {name: "Sveta", id: 1},
//                 {name: "Bob", id: 2}
//             ],
//             messages: [
//                 {id: v1(), message: 'Kinch'},
//                 {id: v1(), message: 'Kinch1'},
//                 {id: v1(), message: 'Kinch2'}
//             ],
//             textArreaDialog: ''
//         },
//         sideBar: {
//             user1: 'Antony',
//             user2: 'Andrew',
//             user3: 'Rodrigo'
//         }
//     },
//
//
//     dispatch(action) {
//         // profileReducer(this._state, action)
//         // dialogReducer(this._state, action)
//         this._rerenderEntireTree(this._state)
//     },
//
//
//     //Функия rerenderEntireTree
//     subscribe(observer: any) {
//         this._rerenderEntireTree = observer
//     },
//
//     _rerenderEntireTree() {
//         console.log('rendered')
//     },
//
//
//     getState() {
//         return this._state
//     },
//
// }
//
// export let textArreaText = store._state.profilePage.textArreaText
// export let textArreaValueforDialogs = store._state.messagesPage.textArreaDialog


// export default store








