import React, { ReactElement } from 'react'
import { useAppSelector, useTypedDispatch } from '../../../../Redux/store'
import {
  changeStatusFriendAC,
  removeFriendFromListAC,
} from '../../../../Redux/reducers/friendsReducer'
import { Friend } from '../Friend/Friend'
import s from './MyFriends.module.css'
import { Redirect } from 'react-router-dom'
import { UnfollowUserThunk } from '../../../../Redux/usersReducer'

export const MyFriends = (): ReactElement => {
  const dispatch = useTypedDispatch()

  const friendsData = useAppSelector(state => state.friendsData.friends)
  const isAuth = useAppSelector(state => state.auth.isAuth)
  if (isAuth === false) {
    return <Redirect to="/login" />
  }
  const changeStatusFriend = (id: string): void => {
    dispatch(changeStatusFriendAC(id))
    dispatch(removeFriendFromListAC(id))
    dispatch(UnfollowUserThunk(+id))
  }

  console.log(friendsData)
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
