import React from 'react';
import {AddNewPostForm} from "../../../../Common/Forms/PostForm";
import s from "../MyPosts/MyPosts.module.css";
import userAvatar from "../../../../Common/img/user-avatar.webp";

const AddPost = () => {

	//остановился
	//решил разбить отдельно профиль добавление поста и посты чтобы шло всё в ряд по вёрскте

	return (
		<div>
			<div className={s.avatar}>
				<img src={props.profilePageInfo?.photos.small ?
					props.profilePageInfo?.photos.small : userAvatar} alt="" />
			</div>
			<AddNewPostForm addPost={props.addPost}/>
		</div>
	);
};

export default AddPost;