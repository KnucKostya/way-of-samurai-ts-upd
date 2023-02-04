import React, {ChangeEvent} from 'react';
import Post from './Post/Post'
import {combineType} from "./ContaineerMyPostComponent";


const MyPosts = (props: combineType) => {

    let mapPost = props.postData
        .map((p, index) => (<Post key={index} message={p.postText} like={p.likesCount}/>))


    const addPost = () => {
        props.addPost(props.textAreaText)
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
                    value={props.textAreaText}
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