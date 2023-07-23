import React from 'react'
import { AddNewPostForm } from '../../../../Common/Forms/PostForm'
import s from '../MyPosts/MyPosts.module.css'
import userAvatar from '../../../../Common/img/user-avatar.webp'
import { useAppDispatch, useAppSelector } from '../../../../Redux/store'
import { AddPostAC } from '../../../../Redux/reducers/profileReducer'

const AddPost = () => {
  const profileInfo = useAppSelector(state => state.profilePage)
  const dispatch = useAppDispatch()

  const addPost = (postText: string, date: string) => {
    dispatch(AddPostAC(postText, date))
  }

  return (
    <div className={s.addPost}>
      <div className={s.avatar}>
        <img
          src={
            profileInfo.profilePageInfo?.photos.small
              ? profileInfo.profilePageInfo?.photos.small
              : userAvatar
          }
          alt=""
        />
      </div>
      <AddNewPostForm addPost={addPost} />
    </div>
  )
}

export default AddPost
