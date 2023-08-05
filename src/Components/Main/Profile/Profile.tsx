import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import ContaineerMyPostComponent from './MyPosts/ContaineerMyPostComponent'
import { ProfilePageDataType } from '../../../Redux/state'
import { RootThunkType, useAppSelector } from '../../../Redux/store'
import s from './Profile.module.css'
import AddPost from './AddPost/AddPost'
import LoginPage from '../../../Common/Login/LoginPage'

const Profile = (props: ProfilePropsType) => {
  const isAuth = useAppSelector(state => state.auth.isAuth)
  const authorisatedUserId = useAppSelector(state => state.auth.data.id)
  const currentUserIdProfile = useAppSelector(
    state => state.profilePage.profilePageInfo.userId
  )

  return (
    <div>
      {!isAuth ? (
        <div className={s.profileContainer}>
          <ProfileInfo
            profileUser={props.profileUser}
            status={props.status}
            updateStatus={props.updateStatus}
          />
          <LoginPage />
        </div>
      ) : (
        <div className={s.profileContainer}>
          <ProfileInfo
            profileUser={props.profileUser}
            status={props.status}
            updateStatus={props.updateStatus}
          />
          <AddPost />
          {authorisatedUserId === currentUserIdProfile && (
            <ContaineerMyPostComponent />
          )}
        </div>
      )}
    </div>
  )
}

export default Profile

//TYPES
type ProfilePropsType = {
  profileUser: ProfilePageDataType
  status: string
  updateStatus: (status: string) => RootThunkType
  paramUserId: number
}
