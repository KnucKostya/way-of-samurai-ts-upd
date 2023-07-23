import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../../../Common/Preloader'
import { ProfilePageDataType } from '../../../../Redux/state'
import EditableStatus from './EditableStatus'
import { RootThunkType, useAppSelector } from '../../../../Redux/store'
import userAvatar from '../../../../Common/img/user-avatar.webp'
import { useParams } from 'react-router-dom'

const ProfileInfo = (props: PrePostContentType) => {
  const { profileUser, paramUserId, status, updateStatus } = props
  const userId = useAppSelector(state => state.auth.data.id)
  let param = useParams()
  if (!param) {
    if (userId) {
      param = userId
    }
  }
  if (!profileUser) {
    return <Preloader />
  }

  return (
    <div className={s.profileInfo}>
      <div>
        {/*<img src={profileUser.profilePageInfo?.photos.small} alt="small Image"/>*/}
        {profileUser.profilePageInfo?.photos.large ? (
          <img
            className={s.userAvatar}
            src={profileUser.profilePageInfo?.photos.large}
            alt="large Image"
          />
        ) : profileUser.profilePageInfo?.photos.small ? (
          <img
            className={s.userAvatar}
            src={profileUser.profilePageInfo?.photos.large}
            alt="small Image"
          />
        ) : (
          <img className={s.userAvatar} src={userAvatar} />
        )}
        <EditableStatus
          statusValue={status ? status : 'Default status'}
          updateStatus={updateStatus}
          userID={profileUser.profilePageInfo?.userId}
          paramUserId={paramUserId}
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
  paramUserId: number
}
