import React, { ReactElement } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../Redux/store'
import s from './FriendsRequests.module.css'
import {
  addNewFriend,
  changeStatusRequestFriendAC,
} from '../../../../Redux/reducers/friendsReducer'
import { Friend } from '../Friend/Friend'
import { Redirect } from 'react-router-dom'

export const FriendsRequests = (): ReactElement => {
  const dispatch = useAppDispatch()

  const friendsData = useAppSelector(state => state.friendsData.requests)
  const isAuth = useAppSelector(state => state.auth.isAuth)
  if (isAuth === false) {
    return <Redirect to="/login" />
  }
  const changeStatusFriend = (
    id: string,
    name: string,
    photos?: string,
    status?: string,
    email?: string,
    followed?: boolean
  ): void => {
    dispatch(changeStatusRequestFriendAC(id))
    dispatch(addNewFriend(id, name, photos, status, email, followed))
  }

  const friendElement = friendsData.map(friend => (
    <Friend
      key={friend.id}
      id={friend.id}
      name={friend.name}
      followed={friend.followed}
      photos={friend.photos}
      status={friend.status}
      callback={() =>
        changeStatusFriend(
          friend.id,
          friend.name,
          friend.photos,
          friend.status,
          friend.email,
          friend.followed
        )
      }
    />
  ))

  return (
    <div className={s.myRequests}>
      {friendElement.length > 0 ? (
        friendElement
      ) : (
        <div className={s.request}>you are haven't requests yet</div>
      )}
    </div>
  )
}
