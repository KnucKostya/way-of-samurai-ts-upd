import React from 'react'
import Post from './Post/Post'
import { combineType } from './ContaineerMyPostComponent'
import s from './MyPosts.module.css'

const MyPosts = (props: combineType) => {
  let mapPost = props.postData.map((p, index) => (
    <Post
      key={index}
      message={p.postText}
      like={p.likesCount}
      userData={props.profilePageInfo}
      postDate={p.date}
    />
  ))

  return <div className={s.posts}>{mapPost}</div>
}

export default MyPosts
