import {Postdata, ProfilePageDataType} from "./state";
import {responseDataType} from "../Components/Profile/ProfileClassComponent";
import {RootThunkType} from "./store";
import api from "../api/api";


const initialState:ProfilePageDataType = {
        postData: [
            {postText: 'Hello World', likesCount: 11},
            {postText: 'Hello Kostya', likesCount: 12},
            {postText: 'Hello Komk', likesCount: 41}
        ],
        textAreaText: '',
        profilePageInfo : null//сюда сет из аксиос запроса

}

export const profileReducer = (state:ProfilePageDataType = initialState , action:CombinerProfileActionTypes):ProfilePageDataType => {

    switch (action.type){
        case "ADD-POST":{

            if(state.textAreaText ===''){
                return state
            }

            let newObj: Postdata = {postText: action.newPostMessage, likesCount: 0}
            state.textAreaText = ''
            return {...state, postData:[...state.postData,newObj] }
        }
        case "CHANGE-VALUE": {
            return {...state,textAreaText:action.textArreaValue}
        }

        case "SET-DATA":{
            return {...state,profilePageInfo:action.data}
        }

        default:return state
    }
}

export type CombinerProfileActionTypes = AddPostACType | ChangeValueType | setUserProfileType


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

type setUserProfileType = ReturnType<typeof setUserProfile>

export const setUserProfile = (data:responseDataType) => {
    return{type:'SET-DATA',data}as const
}

export const GetUserProfileThunk = (userID:string):RootThunkType => {
    return (dispatch) => {
        api.getUsersProfile(userID)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}