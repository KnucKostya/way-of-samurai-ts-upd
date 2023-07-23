import { CombinerProfileActionTypes } from './reducers/profileReducer'
import { CombinerAuthActionsType } from './reducers/authReducer'
import { GroupActionType } from './reducers/groupsReducer'
import { FriendsActionType } from './reducers/friendsReducer'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { RootState } from './store'

export type ActionTypeForApp =
  | FriendsActionType
  | CombinerProfileActionTypes
  | CombinerAuthActionsType
  | GroupActionType
export type ThunkActionType = ThunkAction<void, RootState, unknown, ActionTypeForApp>
export type ThunkDispatchType = ThunkDispatch<RootState, unknown, ActionTypeForApp>

// PROFILE
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const SET_PROFILE = 'SET_PROFILE'
export const CLICK_LIKE = 'CLICK_LIKE'
export const SET_STATUS = 'SET_STATUS'
export const SET_PHOTO = 'SET_PHOTO'
export const SET_PROFILE_INFO = 'SET_PROFILE_INFO'

// MESSAGE
export const ADD_MESSAGE = 'ADD_MESSAGE'

// FRIENDS
export const CHANGE_FRIEND_STATUS = 'CHANGE_FRIEND_STATUS'
export const FOLLOWING_USER = 'FOLLOWING_USER'
export const UNFOLLOWING_USER = 'UNFOLLOWING_USER'
export const SET_USERS = 'SET_USERS'
export const SHOW_MORE_FOUND_USERS = 'SHOW_MORE_FOUND_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_FOUND_FRIENDS = 'SET_TOTAL_FOUND_FRIENDS'
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
export const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

// GROUP
export const LEAVE_GROUP = 'LEAVE_GROUP'

// AUTH
export const SET_USER_DATA = 'SET_USER_DATA'
export const STOP_SUBMIT = 'STOP_SUBMIT'
