import {Postdata, TsarType} from "../../../Redux/state";
import Prepostcontent from "../Prepostcontent/Prepostcontent";
import MyPosts from "./MyPosts";
import React, {ChangeEvent} from "react";
import {AddPostAC, ChangeValueAC} from "../../../Redux/profileReducer";

type MyPostPropsType = {
    postData: Array<Postdata>
    textArreaText: string
    dispatch: (action: TsarType) => void
}

const PresentationMyPostComponent = (props: MyPostPropsType) => {

    const addPost = () => {
        props.dispatch(AddPostAC(props.textArreaText))
    }

    const changeValueFunc = (event:string) => {
        props.dispatch(ChangeValueAC(event))
    }

    return (
        <div>
            <MyPosts
                postData={props.postData}
                textArreaText={props.textArreaText}
                addPost={addPost}
                changeValueFunc={changeValueFunc}
            />
        </div>
    )


}

export default PresentationMyPostComponent