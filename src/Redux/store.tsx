import {combineReducers, createStore, Dispatch, applyMiddleware} from "redux";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {CombinerUserActionTypes, usersReducer} from "./usersReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import authReducer, {CombinerAuthActionsType} from "./reducers/authReducer";
import {groupsReducer} from "./reducers/groupsReducer";
import {FriendsActionType, friendsReducer} from "./reducers/friendsReducer";
import {MessagesActionType, messagesReducer} from "./reducers/dialogReducer";
import {CombinerProfileActionTypes, profileReducer} from "./reducers/profileReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    groupsData: groupsReducer,
    friendsData:friendsReducer
})

export let store = createStore(rootReducer, applyMiddleware(thunk))
export const useAppDispatch: () => Dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


// export const useAppDispatchThunk: DispatchFunc = useDispatch<DispatchFunc>
//correct variant
//
export const useTypedDispatch = () => useDispatch<AppDispatch>()

export type RootActionsType = CombinerUserActionTypes | CombinerProfileActionTypes
    | MessagesActionType | CombinerAuthActionsType | FriendsActionType

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
