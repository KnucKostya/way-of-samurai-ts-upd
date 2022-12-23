import {Postdata, State, TsarType} from "./state";
import {v1} from "uuid";


export const dialogReducer = ( state:State , action:TsarType) => {

    switch (action.type){
        case "ADD-NEW-MESSAGE": {
            let newMessage = {id:v1(),message: action.newMessage}
            state.messagesPage.messages.push(newMessage)
            state.messagesPage.textArreaDialog = ''
            return newMessage
        }
        case "CHANGE-DIALOG-VALUE":{
            state.messagesPage.textArreaDialog = action.textArreaValue
            return  action.textArreaValue;
        }
    }

}