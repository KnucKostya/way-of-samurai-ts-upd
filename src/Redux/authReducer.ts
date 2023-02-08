import api from "../api/api";
import {RootThunkType} from "./store";

export type initStateType = {
    data:{
        id:number|null,
        login:string,
        email:string
    },
    messages: string[],
    fieldsErrors: null,
    resultCode: number|null,
    isLogined:boolean
}

const initialState:initStateType = {
    data:{
        id:null,
        login:'',
        email:''
    },
    messages: [''],
    fieldsErrors: null,
    resultCode: null,
    isLogined:false
}

const authReducer = (state:initStateType = initialState, action: CombinerAuthActionsType):initStateType => {

    switch (action.type) {
        case "USER-AUTH" : {
            console.log(action.data.login)
            return {...state,data:{...state.data,...action.data}
            ,isLogined:true}
        }
        default:
            return state
    }

    return state
}

export type CombinerAuthActionsType = UserAuthType

export type UserAuthType = ReturnType<typeof SetUserAuth>

export const SetUserAuth = (id: number, login: string, email: string) => {
    return {
        type: 'USER-AUTH',
         data :{id, login, email}
    } as const
}

export default authReducer


// ------------------------------------------thunk's

export const LoginisationThunk = ():RootThunkType => {
    return (dispatch) => {
        api.authMe()
            .then(data=>{
                if(data.resultCode === 0) {
                    let {id,login,email} = data.data
                    dispatch(SetUserAuth(id,login,email))
                }
            })
    }
}
