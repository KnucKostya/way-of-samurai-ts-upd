import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../../../Common/Preloader'
import { ProfilePageDataType } from '../../../../Redux/state'
import EditableStatus from './EditableStatus'
import { RootThunkType, useAppSelector } from '../../../../Redux/store'
import userAvatar from '../../../../Common/img/user-avatar.webp'

const ProfileInfo = (props: PrePostContentType) => {
  const { profileUser, status, updateStatus } = props
  const idAuth = useAppSelector(state => state.auth.data.id)
  const userId = useAppSelector(
    state => state.profilePage.profilePageInfo.userId
  )

  if (!profileUser) {
    return <Preloader />
  }

  return (
    <div className={s.profileInfo}>
      <div>
        {profileUser.profilePageInfo?.photos?.large ? (
          <img
            className={s.userAvatar}
            src={profileUser.profilePageInfo?.photos?.large}
            alt="large "
          />
        ) : profileUser.profilePageInfo?.photos?.small ? (
          <img
            className={s.userAvatar}
            src={profileUser.profilePageInfo?.photos?.large}
            alt="small "
          />
        ) : (
          <img className={s.userAvatar} src={userAvatar} alt={'avatar'} />
        )}
        {/*!!!!!!!!!!!!!!!!!!!!!!*/}
        <EditableStatus
          statusValue={status}
          updateStatus={updateStatus}
          userID={userId}
          idAuth={idAuth}
        />
      </div>

      <div className={s.userInfo}>
        <p>
          <b>Name:</b> {profileUser.profilePageInfo?.fullName}
        </p>
        <p>
          <b>About me:</b>{' '}
          {profileUser.profilePageInfo?.aboutMe
            ? profileUser.profilePageInfo?.aboutMe
            : 'No information'}{' '}
        </p>
        <p>
          <b>Job:</b>{' '}
          {profileUser.profilePageInfo?.lookingForAJobDescription
            ? profileUser.profilePageInfo?.lookingForAJobDescription
            : 'No work'}{' '}
        </p>
      </div>
    </div>
  )
}

export default ProfileInfo

//TYPES
type PrePostContentType = {
  profileUser: ProfilePageDataType
  status: string
  updateStatus: (status: string) => RootThunkType
}
