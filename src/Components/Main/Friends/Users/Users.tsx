import React from 'react'
import {
  APIusersType,
  FollowUserThunk,
  UnfollowUserThunk,
} from '../../../../Redux/usersReducer'
import { Redirect } from 'react-router-dom'
import { Paginator } from '../../../../Common/Paginator/Paginator'
import { Friend } from '../Friend/Friend'
import {
  addNewFriend,
  toggleFollowingInProgressAC,
} from '../../../../Redux/reducers/friendsReducer'
import { useTypedDispatch } from '../../../../Redux/store'
;<Redirect to={'login'} />

export type UsersPropsType = {
  onPageChangedMethod: (currentPage: number) => void
  totalCount: number
  count: number
  unfollow: (id: number) => void
  follow: (id: number) => void
  users: APIusersType[]
  currentPage: number
  followingInProgressStatus: number[]
  followingInProgress: (isFetching: boolean, userID: number) => void
  UnfollowUserThunk: (userID: number) => void
  FollowUserThunk: (userID: number) => void
}

const Users = (props: UsersPropsType) => {
  const dispatch = useTypedDispatch()

  let countPagesArr: number[] = []

  let totalCountPages = Math.ceil(props.totalCount / props.count)

  for (let i = 1; i <= totalCountPages; i++) {
    countPagesArr.push(i)
  }

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
      dispatch(FollowUserThunk(+id))
      dispatch(addNewFriend(id, name, photos, status, email, followed))
    } else {
      dispatch(UnfollowUserThunk(+id))
    }
  }

  return (
    <div>
      {props.users.map(friend => {
        return (
          <div key={friend.id}>
            <div>
              {!friend.followed && (
                <Friend
                  id={friend.id.toString()}
                  status={friend.status}
                  name={friend.name}
                  photoSmall={friend.photos.small}
                  photoLarge={friend.photos.large}
                  followed={friend.followed}
                  callback={() =>
                    changeFollowingUser(
                      friend.id.toString(),
                      friend.name,
                      friend.photos.small,
                      friend.status
                    )
                  }
                />
              )}
            </div>
          </div>
        )
      })}
      <Paginator
        onPageChangedMethod={props.onPageChangedMethod}
        totalCount={props.totalCount}
        count={props.count}
        currentPage={props.currentPage}
      />
    </div>
  )
}

export default Users
