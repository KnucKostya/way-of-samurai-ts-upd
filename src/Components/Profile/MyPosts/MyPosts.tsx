import React from 'react';
import Post from './Post/Post'
import {combineType} from "./ContaineerMyPostComponent";
import {AddNewPostForm} from "../../Forms/PostForm";


const MyPosts = (props: combineType) => {

    let mapPost = props.postData
        .map((p, index) => (<Post key={index} message={p.postText} like={p.likesCount}/>))

    return (
        <div>
            My posts
            <div>
                <AddNewPostForm addPost={props.addPost}/>
                {mapPost}
            </div>
        </div>
    )
}

export default MyPosts;
