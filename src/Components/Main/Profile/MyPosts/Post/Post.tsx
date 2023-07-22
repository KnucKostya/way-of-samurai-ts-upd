import React from 'react';
import s from './Post.module.css';
import {responseDataType} from "../../ProfileClassComponent";
import userAvatar from '../../../../../Common/img/user-avatar.webp'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faXmark} from "@fortawesome/free-solid-svg-icons";

type PostPropsType = {
	message: string
	like: number
	userData: responseDataType | null
	postDate:string
}

const Post = (props: PostPropsType) => {

	const likeClass = props.like ? `${s.iconClick}` : `${s.icon}`
	// const disLikeClass = props.isDislike ? `${s.iconClick}` : `${s.icon}`

	const onClickButtonHandler = (id: string): void => {
		alert('fill functionality')
		// dispatch(deletePostAC(id))
	}

	const onClickLike = (): void => {
		// if (!props.isLike) {
		//     dispatch(clickLikeAC(props.id, "like"))
		// }
		alert('fill functionality')

	}

	return (
		<div className={s.post}>
			<div className={s.title}>
				<div className={s.avatar}>
					<img
						src={props.userData?.photos.small ? props.userData.photos.small : props.userData?.photos.large ? props.userData.photos.large : userAvatar}
						alt="logo"
					/>
				</div>
				<div className={s.info}>
					<div>
						<div className={s.name}>{props.userData?.fullName}</div>
						<div className={s.date}>Published: {props.postDate}
							{/*{props.userData}*/}</div>
					</div>

					<div>
						<button onClick={() => onClickButtonHandler(props.userData?.userId.toString()!)}>
							{/*FIX ------------------------------------------------------------------!!*/}
							<FontAwesomeIcon icon={faXmark} size="lg"/>
						</button>
					</div>
				</div>

				<div className={s.text}>
					{props.message}
					<div className={s.icons}>


						<span onClick={onClickLike}>
                        <FontAwesomeIcon className={likeClass} icon={faHeart} size="lg"/>{" "}
							{props.like}
                    </span>
					</div>
			</div>
			</div></div>
	)
}
export default Post;