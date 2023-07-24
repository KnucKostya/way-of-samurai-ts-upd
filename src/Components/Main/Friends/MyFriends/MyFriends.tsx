import React, { ReactElement } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../Redux/store'
import { changeStatusFriendAC } from '../../../../Redux/reducers/friendsReducer'
import { Friend } from '../Friend/Friend'
import s from './MyFriends.module.css'
import { Redirect } from 'react-router-dom'

export const MyFriends = (): ReactElement => {
  const dispatch = useAppDispatch()

  const friendsData = useAppSelector(state => state.friendsData.friends)
  const isAuth = useAppSelector(state => state.auth.isAuth)
  if (isAuth === false) {
    return <Redirect to="/login" />
  }
  const changeStatusFriend = (id: string): void => {
    dispatch(changeStatusFriendAC(id))
  }

  const friendElement = friendsData.map(friend => (
    <Friend
      key={friend.id}
      id={friend.id}
      name={friend.name}
      followed={friend.followed}
      photos={friend.photos}
      status={friend.status}
      callback={changeStatusFriend}
    />
  ))

  return <div className={s.myFriends}>{friendElement}</div>
}
