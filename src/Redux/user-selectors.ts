import {RootState} from "./store";

export const getUsers = (state:RootState) => {
    return state.usersPage.users
}
export const getTotalCount = (state:RootState) => {
    return state.usersPage.totalCount
}
export const getCount = (state:RootState) => {
    return state.usersPage.count
}
export const getCurrentPage = (state:RootState) => {
    return state.usersPage.currentPage
}
export const getIsLoading = (state:RootState) => {
    return state.usersPage.isLoading
}
export const getFollowingInProgressStatus = (state:RootState) => {
    return state.usersPage.followingInProgressStatus
}
