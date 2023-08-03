import React from 'react'
import s from './Post.module.css'
import { responseDataType } from '../../ProfileClassComponent'
import userAvatar from '../../../../../Common/img/user-avatar.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faHeartCrack,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'
import { useTypedDispatch } from '../../../../../Redux/store'
import {
  DeletePostAC,
  SetLikeAC,
} from '../../../../../Redux/reducers/profileReducer'

type PostPropsType = {
  message: string
  like: number
  dislike: number
  isLike?: boolean
  isDislike?: boolean
  userData: Partial<responseDataType>
  postDate: string
}

const Post = (props: PostPropsType) => {
  const dispatch = useTypedDispatch()
  const likeClass = props.like ? `${s.iconClick}` : `${s.icon}`
  const disLikeClass = props.isDislike ? `${s.iconClick}` : `${s.icon}`

  const onClickButtonHandler = (postText: string): void => {
    dispatch(DeletePostAC(postText))
  }

  const onClickLike = (postText: string): void => {
    if (!props.isLike) {
      dispatch(SetLikeAC(postText, 'like'))
    }
  }
  const onClickDisLike = (postText: string): void => {
    if (!props.isDislike) {
      dispatch(SetLikeAC(postText, 'dislike'))
    }
  }

  return (
    <div className={s.post}>
      <div className={s.title}>
        <div className={s.avatar}>
          <img
            src={
              props.userData?.photos?.small
                ? props.userData?.photos?.small
                : props.userData?.photos?.large
                ? props.userData?.photos?.large
                : userAvatar
            }
            alt="logo"
          />
        </div>
        <div className={s.info}>
          <div>
            <div className={s.name}>{props.userData?.fullName}</div>
            <div className={s.date}>Published: {props.postDate}</div>
          </div>
          <FontAwesomeIcon
            icon={faXmark}
            className={s.deletePost}
            onClick={() => onClickButtonHandler(props.message)}
          />
        </div>

        <div className={s.text}>
          {props.message}
          <div className={s.icons}>
            <span onClick={() => onClickLike(props.message)}>
              <FontAwesomeIcon className={likeClass} icon={faHeart} size="lg" />{' '}
              {props.like}
            </span>
            <span onClick={() => onClickDisLike(props.message)}>
              <FontAwesomeIcon
                className={disLikeClass}
                icon={faHeartCrack}
                size="lg"
              />{' '}
              {props.dislike}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Post
