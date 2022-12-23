import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {Postdata, TsarType} from "../../../Redux/state";

type MyPostPropsType = {
    postData: Array<Postdata>
    textArreaText: string
    dispatch:(action:TsarType)=>void
}


const MyPosts = (props: MyPostPropsType) => {

    let mapPost = props.postData
        .map((p,index)=> (<Post key={index} message={p.postText} like={p.likesCount}/>))


    const addPost = () => {
        props.dispatch({type: "ADD-POST",newPostMessage: props.textArreaText})
    }


    const changeValueFunc = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type:"CHANGE-VALUE",textArreaValue: e.currentTarget.value})

    }


    return (
        <div>
            My posts
            <div>
                <textarea
                    value={props.textArreaText}
                    onChange={changeValueFunc}
                 >
                </textarea>
                <button onClick={addPost}>Add post</button>
                {mapPost}
            </div>

        </div>


    )
}

export default MyPosts;