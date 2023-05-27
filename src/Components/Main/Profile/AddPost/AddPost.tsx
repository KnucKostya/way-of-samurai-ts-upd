import React from 'react';
import {AddNewPostForm} from "../../../../Common/Forms/PostForm";
import s from "../MyPosts/MyPosts.module.css";
import userAvatar from "../../../../Common/img/user-avatar.webp";
import {useAppDispatch, useAppSelector} from "../../../../Redux/store";
import {AddPostAC} from "../../../../Redux/profileReducer";

const AddPost = () => {

	//остановился
	//решил разбить отдельно профиль добавление поста и посты чтобы шло всё в ряд по вёрскте
	const profileInfo = useAppSelector(state => state.profilePage)
	const dispatch = useAppDispatch()

	const addPost = (postText:string) => {
		// addPost:(postText:string)=>dispatch(AddPostAC(postText))
		dispatch(AddPostAC(postText))
	}

	return (
		<div>
			<div className={s.avatar}>
				<img src={profileInfo.profilePageInfo?.photos.small ?
					profileInfo.profilePageInfo?.photos.small : userAvatar} alt=""/>
			</div>
			<AddNewPostForm addPost={addPost}/>
		</div>
	);
};

export default AddPost;