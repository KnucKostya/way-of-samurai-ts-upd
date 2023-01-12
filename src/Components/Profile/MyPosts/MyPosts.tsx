import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {Postdata, TsarType} from "../../../Redux/state";
import {AddPostAC, ChangeValueAC} from "../../../Redux/profileReducer";
import {combineType} from "./ContaineerMyPostComponent";




const MyPosts = (props: combineType) => {

    let mapPost = props.postData
        .map((p, index) => (<Post key={index} message={p.postText} like={p.likesCount}/>))


    const addPost = () => {
        props.addPost(props.textArreaText)
    }


    const changeValueFunc = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeValueFunc(e.currentTarget.value)
    }


    return (
        <div>
            My posts
            <div>
                <textarea
                    placeholder={'enter post text'}
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