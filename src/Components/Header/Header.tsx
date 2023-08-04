import React, { ChangeEvent } from 'react'
import s from './Header.module.css'
import { useAppSelector, useTypedDispatch } from '../../Redux/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRotate } from '@fortawesome/free-solid-svg-icons'
import { UpdatePhotoProfile } from '../../Redux/reducers/profileReducer'
import userAvatar from '../../../src/Common/img/user-avatar.webp'

const Header = () => {
  const dispatch = useTypedDispatch()
  const idAuth = useAppSelector(state => state.auth.data.id)
  const infoProfile = useAppSelector(state => state.profilePage.profilePageInfo)

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    const formData: any = new FormData()
    formData.append('image', e.target.files?.[0])
    dispatch(UpdatePhotoProfile(formData))
  }

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.headerInner}>
          <span className={s.userAvatar}>
            <img
              src={
                infoProfile?.photos?.large
                  ? infoProfile.photos.large
                  : userAvatar
              }
              alt={'user avatar'}
            />
          </span>
          {idAuth === infoProfile?.userId && (
            <div className={s.editPhoto}>
              <input type="file" id="inputFile" onChange={handleSubmit} />
              <label htmlFor="inputFile">
                <FontAwesomeIcon icon={faCameraRotate} size="lg" />
                {` Edit Photo`}
              </label>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
