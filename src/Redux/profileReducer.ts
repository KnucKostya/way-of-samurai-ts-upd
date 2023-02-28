import {Postdata, ProfilePageDataType} from "./state";
import {responseDataType} from "../Components/Profile/ProfileClassComponent";
import {RootThunkType} from "./store";
import api, {profileApi} from "../api/api";


const initialState:ProfilePageDataType = {
        postData: [
            {postText: 'Hello World', likesCount: 11},
            {postText: 'Hello Kostya', likesCount: 12},
            {postText: 'Hello Komk', likesCount: 41}
        ],
        profilePageInfo : null,//сюда сет из аксиос запроса,
        status:'',

}

export const profileReducer = (state:ProfilePageDataType = initialState , action:CombinerProfileActionTypes):ProfilePageDataType => {

    switch (action.type){
        case "ADD-POST":{
            // if(state.textAreaText ===''){
            //     return state
            // }
            let newObj: Postdata = {postText: action.newPostMessage, likesCount: 0}
            // state.textAreaText = ''
            return {...state, postData:[...state.postData,newObj] }
        }

        case "SET-DATA":{
            return {...state,profilePageInfo:action.data}
        }
        case "SET-STATUS":{
            return {...state,status:action.status}
        }

        default:return state
    }
}

export type CombinerProfileActionTypes = AddPostACType | setUserProfileType | SetStatusType


type AddPostACType = ReturnType<typeof AddPostAC>

export const AddPostAC = (newPostMessage:string) => {
    return {
        type: 'ADD-POST',newPostMessage
    }as const
}


type setUserProfileType = ReturnType<typeof setUserProfile>

export const setUserProfile = (data:responseDataType) => {
    return{type:'SET-DATA',data}as const
}

export const SetStatus = (status:string) => {
    return {type:'SET-STATUS', status}as const
}
export type SetStatusType = ReturnType<typeof SetStatus>



export const GetUserProfileThunk = (userID:number):RootThunkType => {
    return (dispatch) => {
        api.getUsersProfile(userID)
            .then(response => {
                dispatch(setUserProfile(response))
            })
    }
}

export const GetStatusThunk = (userID:number):RootThunkType => {
    return (dispatch) => {
        profileApi.getStatus(userID)
            .then(response=>{
                dispatch(SetStatus(response))
            })
    }
}


export const UpdateUserStatusThunk = (status:string):RootThunkType => {
    return (dispatch) => {
        profileApi.updateStatus(status)
            .then(response=>{
                if(response.data.resultCode === 0){
                    dispatch(SetStatus(status))
                }
                // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            })
    }
}