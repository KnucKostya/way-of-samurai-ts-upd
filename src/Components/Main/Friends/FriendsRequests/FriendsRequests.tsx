import React, { ReactElement } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../Redux/store'
import s from './FriendsRequests.module.css'
import { changeStatusRequestFriendAC } from '../../../../Redux/reducers/friendsReducer'
import { Friend } from '../Friend/Friend'
import { Redirect } from 'react-router-dom'

export const FriendsRequests = (): ReactElement => {
  const dispatch = useAppDispatch()

  const friendsData = useAppSelector(state => state.friendsData.requests)
  const isAuth = useAppSelector(state => state.auth.isAuth)
  if (isAuth === false) {
    return <Redirect to="/login" />
  }
  const changeStatusFriend = (id: string): void => {
    dispatch(changeStatusRequestFriendAC(id))
  }

  const friendElement = friendsData.map(friend => (
    <Friend
      key={friend.id}
      id={friend.id}
      name={friend.name}
      followed={friend.followed}
      photos={friend.photos}
      status={friend.status}
      callback={() => changeStatusFriend(friend.id)}
    />
  ))

  return <div className={s.myRequests}>{friendElement}</div>
}
