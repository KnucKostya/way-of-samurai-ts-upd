import React from 'react';
import Post from './Post/Post'
import {combineType} from "./ContaineerMyPostComponent";
import {AddNewPostForm} from "../../../../Common/Forms/PostForm";
import s from "./MyPosts.module.css"
import userAvatar from "../../../../Common/img/user-avatar.webp";

const MyPosts = (props: combineType) => {

    let mapPost = props.postData
        .map((p, index) => (<Post key={index}
                                  message={p.postText}
                                  like={p.likesCount}
                                  userData={props.profilePageInfo}
        />))

    return (
        <div className={s.addPost}>
                <div className={s.avatar}>
                    <img src={props.profilePageInfo?.photos.small ?
                        props.profilePageInfo?.photos.small : userAvatar} alt="" />
                </div>
            <AddNewPostForm addPost={props.addPost}/>
            {mapPost}
        </div>
    )
}

export default MyPosts;
