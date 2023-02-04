import React from "react";

export type initStateType = {
    data:{
        id:number|null,
        login:string,
        email:string
    },
    messages: string[],
    fieldsErrors: null,
    resultCode: number|null,
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
}

const authReducer = (state:initStateType = initialState, action: UserAuthType):initStateType => {

    switch (action.type) {
        case "USER-AUTH" : {
            console.log(action.data.login)
            return {...state,data:{...state.data,...action.data}}
            //??????????????????????????????????????pravil`no??????????????^^^^^^^^^^^^
        }
        default:
            return state
    }

    return state
}

export type UserAuthType = ReturnType<typeof SetUserAuth>

export const SetUserAuth = (id: number, login: string, email: string) => {
    debugger
    return {
        type: 'USER-AUTH',
         data :{id, login, email}
    } as const
}

export default authReducer