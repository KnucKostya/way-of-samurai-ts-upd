import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export type RootReducersType = ReturnType<typeof reducers>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch




let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogReducer,
})


export let store = createStore(reducers)
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// @ts-ignore
window.store = store
