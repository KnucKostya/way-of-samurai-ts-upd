import {combineReducers, createStore, Dispatch, applyMiddleware} from "redux";
import {CombinerProfileActionTypes, profileReducer} from "./profileReducer";
import {CombinerDialogsActionTypes, dialogReducer} from "./dialogReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {CombinerUserActionTypes, usersReducer} from "./usersReducer";
import authReducer, {CombinerAuthActionsType} from "./authReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {FriendsActionType, friendsReducer} from "./friendsReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    friendsData:friendsReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunk))
export const useAppDispatch: () => Dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatchThunk: DispatchFunc = useDispatch

export type RootActionsType = CombinerUserActionTypes | CombinerProfileActionTypes
    | CombinerDialogsActionTypes | CombinerAuthActionsType | FriendsActionType

export type RootThunkType<ReturnType = void> = ThunkAction<ReturnType, RootReducersType, unknown, RootActionsType>
//1) что возвращает ф-ция (void)
//2) тип стейта (всего)
//3) екстра-аргументы(не используется, всегда unknown)
//4) типы всех экшенов

export type RootReducersType = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState,null,RootActionsType>
type DispatchFunc = () => AppDispatch

// @ts-ignore
window.store = store
