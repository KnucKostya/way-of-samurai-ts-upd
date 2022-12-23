import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogReducer} from "./dialogReducer";

type RootReducersType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogReducer,
})


let store:any = createStore(reducers)