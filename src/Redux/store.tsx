import {combineReducers, createStore, Dispatch} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {usersReducer} from "./usersReducer";
import authReducer from "./authReducer";

export type RootReducersType = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch




let rootReducer = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogReducer,
    usersPage:usersReducer,
    auth:authReducer,
})


export let store = createStore(rootReducer)
export const useAppDispatch: () => Dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// @ts-ignore
window.store = store
