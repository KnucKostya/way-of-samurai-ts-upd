import api from "../api/api";
import {RootThunkType} from "./store";

export type initialStateType = {
    users: APIusersType[]
    totalCount: number
    count: number
    currentPage: number
    isLoading: boolean
    followingInProgressStatus: number[]
}

export type APIusersType = {
    name: string
    id: number
    uniqueUrlName: number
    photos:
        {
            small: string
            large: string
        }
    status: string
    followed: boolean
}

const initialState: initialStateType = {
    users: [],
    totalCount: 0,
    count: 10,
    currentPage: 1,
    isLoading: false,
    followingInProgressStatus: []
}
export const usersReducer = (state: initialStateType = initialState, action: CombinerUserActionTypes): initialStateType => {

    switch (action.type) {
        case "FOLLOW" : {
            return {...state, users: state.users.map(m => m.id === action.userID ? {...m, followed: true} : m)}
        }
        case "UNFOLLOW" : {
            return {...state, users: state.users.map(m => m.id === action.userID ? {...m, followed: false} : m)}
        }
        case "SET-USERS" : {
            return {...state, users: action.users}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-COUNT": {
            return {...state, totalCount: action.totalCount}
        }
        case "CHANGE-IS-LOADING-STATUS": {
            return {...state, isLoading: action.isLoadingStatus}
        }
        case "IS-FOLLOWING-PROGRESS": {
            return {
                ...state, followingInProgressStatus: action.isFetching
                    ? [...state.followingInProgressStatus, action.userID]
                    : state.followingInProgressStatus.filter(id => id !== action.userID)
            }
        }

        default :
            return state
    }
}

export type CombinerUserActionTypes = followType | unfollowType
    | setUsersType | setCurrentPageType | setTotalCountType
    | setLoadingStatusType | followingInProgressType

export type followType = ReturnType<typeof follow>
export type unfollowType = ReturnType<typeof unfollow>
export type setUsersType = ReturnType<typeof setUsers>
export type setCurrentPageType = ReturnType<typeof setCurrentPage>
export type setTotalCountType = ReturnType<typeof setTotalCount>
export type setLoadingStatusType = ReturnType<typeof setLoadingStatus>
export type followingInProgressType = ReturnType<typeof followingInProgress>

export const follow = (userID: number) => {
    return {
        type: 'FOLLOW', userID
    } as const
}
export const unfollow = (userID: number) => {
    return {
        type: 'UNFOLLOW', userID
    } as const
}
export const setUsers = (users: APIusersType[]) => {
    return {
        type: 'SET-USERS', users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE', currentPage
    } as const
}
export const setTotalCount = (totalCount: number) => {
    return {type: 'SET-TOTAL-COUNT', totalCount} as const
}
export const setLoadingStatus = (isLoadingStatus: boolean) => {
    return {type: "CHANGE-IS-LOADING-STATUS", isLoadingStatus} as const
}
export const followingInProgress = (isFetching: boolean, userID: number) => {
    return {type: "IS-FOLLOWING-PROGRESS", isFetching, userID} as const
}

// ------------------------------thunk


export let thunkCreator = () : RootThunkType => {
    return (dispatch) => {
        dispatch (setLoadingStatus(true))
    api.getUsers()
        .then(response => {
            dispatch (setUsers(response.data.items));
            dispatch (setTotalCount(response.data.totalCount));
            dispatch (setLoadingStatus(false))
        })
}}
