import api, {loginApi} from "../api/api";
import {RootThunkType} from "./store";
import {AxiosError} from "axios";

export type initStateType = {
    data: {
        id: number | null,
        login: string,
        email: string
    },
    messages: string[],
    fieldsErrors: null,
    resultCode: number | null,
    isAuth: boolean,
    error: string
}

const initialState: initStateType = {
    data: {
        id: null,
        login: '',
        email: ''
    },
    messages: [''],
    fieldsErrors: null,
    resultCode: null,
    isAuth: false,
    error: ''
}

const authReducer = (state = initialState, action: CombinerAuthActionsType): initStateType => {

    switch (action.type) {
        case "USER-AUTH" : {
            console.log(action.data.login)
            return {
                ...state, data: {...state.data, ...action.data}
                , isAuth: true
            }
        }
        case "SET-ERROR": {
            debugger
            // return {...state,messages:[...state.messages,action.error]}
            return {...state, error: action.error}
        }
        default:
            return state
    }

    return state
}

export default authReducer

export const SetUserAuth = (id: number, login: string, email: string) => {
    return {
        type: 'USER-AUTH',
        data: {id, login, email}
    } as const
}

export const LogoutAC = () => {
    return {type: 'LOG-OUT', id: null, login: '', email: ''} as const
}

export const SetErrorAC = (error: string) => {
    return {type: "SET-ERROR", error} as const
}
// --------------------thunks------------------------

export const AuthThunkCreator = (): RootThunkType => {
    return (dispatch) => {
        loginApi.auth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(SetUserAuth(id, login, email))
                    dispatch(SetErrorAC(''))
                } else {
                    debugger
                    dispatch(SetErrorAC(data.messages[0]))
                }
            })
    }
}

export const LoginThunkCreator = (email: string, password: string, rememberMe: boolean): RootThunkType => (dispatch) => {
    loginApi.login(email, password, rememberMe)
        .then(response =>{
            if (response.resultCode === 0) {
                dispatch(AuthThunkCreator())
            }else{
                console.log(response.messages[0])
                dispatch(SetErrorAC(response.messages[0]))
            }
        })
}

export const LogOutThunkCreator = (): RootThunkType => (dispatch) => {
    loginApi.logout()
        .then(response => {
            dispatch(LogoutAC)
        })
}


//types
export type CombinerAuthActionsType = UserAuthType | SetErrorType
export type UserAuthType = ReturnType<typeof SetUserAuth>
export type SetErrorType = ReturnType<typeof SetErrorAC>