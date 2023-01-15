import {Postdata, Profilepage} from "./state";


const initialState:Profilepage = {
        postData: [
            {postText: 'Hello World', likesCount: 11},
            {postText: 'Hello Kostya', likesCount: 12},
            {postText: 'Hello Komk', likesCount: 41}
        ],
        textArreaText: '',
    photos:{
            small:'',
            large:''
    }
}

export const profileReducer = (state:Profilepage = initialState , action:combinerTypes):Profilepage => {

    switch (action.type){
        case "ADD-POST":{

            if(state.textArreaText ===''){
                return state
            }

            let newObj: Postdata = {postText: action.newPostMessage, likesCount: 0}
            state.textArreaText = ''
            return {...state, postData:[...state.postData,newObj] }
        }
        case "CHANGE-VALUE": {
            return {...state,textArreaText:action.textArreaValue}
        }
        default:return state
    }
}

type combinerTypes = AddPostACType | ChangeValueType


type AddPostACType = ReturnType<typeof AddPostAC>

export const AddPostAC = (newPostMessage:string) => {
    return {
        type: 'ADD-POST',newPostMessage
    }as const
}

type ChangeValueType = ReturnType<typeof ChangeValueAC>

export const ChangeValueAC = (textArreaValue: string) => {
    return {
        type: 'CHANGE-VALUE',
        textArreaValue
    } as const
}

export const setPhoto = (url:string) => {
    return{type:'SET-PHOTO',url}
}