import {Postdata, State, TsarType} from "./state";
import {v1} from "uuid";


export const profileReducer = ( state:State , action:TsarType) => {

    switch (action.type){
        case "ADD-POST":{
            let newObj: Postdata = {postText: action.newPostMessage, likesCount: 0}
            let newPost = state.profilePage.postData.push(newObj)
            // this._rerenderEntireTree(this._state)
            state.profilePage.textArreaText = ''

            return newPost
        }
        case "CHANGE-VALUE": {
            let push = state.profilePage.textArreaText = action.textArreaValue
            return push
        }
    }

}