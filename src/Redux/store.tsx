import { combineReducers, createStore, Dispatch, applyMiddleware } from 'redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { CombinerUserActionTypes, usersReducer } from './usersReducer'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import authReducer, { CombinerAuthActionsType } from './reducers/authReducer'
import { groupsReducer } from './reducers/groupsReducer'
import { FriendsActionType, friendsReducer } from './reducers/friendsReducer'
import { MessagesActionType, messagesReducer } from './reducers/dialogReducer'
import {
  CombinerProfileActionTypes,
  profileReducer,
} from './reducers/profileReducer'
import { newsReducer } from './reducers/newsReducer'

let rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  groupsData: groupsReducer,
  friendsData: friendsReducer,
  news: newsReducer,
})

export let store = createStore(rootReducer, applyMiddleware(thunk))
export const useAppDispatch: () => Dispatch = useDispatch //for AC's
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type RootReducersType = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, null, RootActionsType>
export const useTypedDispatch = () => useDispatch<AppDispatch>() //for AC's, thunks(universal)

export type RootActionsType =
  | CombinerUserActionTypes
  | CombinerProfileActionTypes
  | MessagesActionType
  | CombinerAuthActionsType
  | FriendsActionType

export type RootThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  RootReducersType,
  unknown,
  RootActionsType
>
//1) що вератє функція (void)
//2) тип стейта (усього)
//3) екстра-аргументы(не використовуються, завжди unknown)
//4) типы усих екшнів

// @ts-ignore
window.store = store
