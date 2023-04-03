import api, {authAPI} from "../api/api";
import {RootThunkType} from "./store";
import {AxiosError} from "axios";
import {InitializedStatusType, initializedSuccess} from "./appReducer";


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
            return {
                ...state, data: {...state.data, ...action.data}
                , isAuth: true
            }
        }
        case "LOG-OUT" : {
            return {...state, isAuth: false}
        }
        case "SET-ERROR": {
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

export const getAuthUserData = (): RootThunkType<Promise<void>> => {
    return (dispatch) => {
       return authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(SetUserAuth(id, login, email))
                    dispatch(SetErrorAC(''))
                } else {
                    dispatch(SetErrorAC(data.messages[0]))
                }
            })
    }
}

export const LoginThunkCreator = (email: string, password: string, rememberMe: boolean): RootThunkType => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                console.log(response.messages[0])
                dispatch(SetErrorAC(response.messages[0]))
            }
        })
}

export const LogOutThunkCreator = (): RootThunkType => (dispatch) => {
    authAPI.logout()
        .then(response => {
            debugger
            dispatch(LogoutAC())
        })
}


//types
export type CombinerAuthActionsType = UserAuthType | SetErrorType | LogoutType
    | InitializedStatusType
export type UserAuthType = ReturnType<typeof SetUserAuth>
export type SetErrorType = ReturnType<typeof SetErrorAC>
export type LogoutType = ReturnType<typeof LogoutAC>