import { ReactElement, useEffect } from 'react'

import s from './FindFriends.module.css'
import { AppDispatch, useAppSelector } from '../../../../Redux/store'
import {
  followingUserTC,
  getUsersTC,
  toggleFollowingInProgressAC,
  unfollowingUserTC,
} from '../../../../Redux/reducers/friendsReducer'
import { Friend } from '../Friend/Friend'
import Preloader from '../../../../Common/Preloader'
import { Pagination } from './Pagination'
import { useDispatch } from 'react-redux'

export const FindFriends = (): ReactElement => {
  const useAppDispatch = () => useDispatch<AppDispatch>()
  const dispatch = useAppDispatch()

  const friendsFindData = useAppSelector(state => state.usersPage.users)
  const pageSize = useAppSelector(state => state.friendsData.pageSize)
  const totalFoundFriends = useAppSelector(state => state.friendsData.totalFoundFriends)
  const currentPageFindFriends = useAppSelector(state => state.friendsData.currentPageFindFriends)
  const isFetching = useAppSelector(state => state.friendsData.isFetching)

  useEffect(() => {
    dispatch(getUsersTC(currentPageFindFriends, pageSize))
  }, [dispatch, pageSize, currentPageFindFriends, totalFoundFriends])

  const changeFollowingUser = (
    id: string,
    name: string,
    photos?: string,
    status?: string,
    email?: string,
    followed?: boolean
  ): void => {
    dispatch(toggleFollowingInProgressAC(id, true))
    if (!followed) {
      dispatch(followingUserTC(id))
    } else {
      dispatch(unfollowingUserTC(id))
    }
  }

  const friendsFindElement = friendsFindData.map(friend => (
    <Friend
      key={friend.id}
      id={friend.id.toString()}
      name={friend.name}
      followed={friend.followed}
      photoLarge={friend.photos.large}
      photoSmall={friend.photos.small}
      status={friend.status}
      callback={changeFollowingUser}
    />
  ))

  return (
    <div className={s.findFriends}>
      {isFetching ? (
        <Preloader />
      ) : (
        <div className={s.friendsElements}>
          {friendsFindElement}
          <Pagination
            totalFoundFriends={totalFoundFriends}
            pageSize={pageSize}
            currentPageFindFriends={currentPageFindFriends}
          />
        </div>
      )}
    </div>
  )
}
