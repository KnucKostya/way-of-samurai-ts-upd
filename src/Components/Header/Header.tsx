import React, { ChangeEvent } from 'react'
import s from './Header.module.css'
import { useAppSelector, useTypedDispatch } from '../../Redux/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRotate } from '@fortawesome/free-solid-svg-icons'
import { UpdatePhotoProfile } from '../../Redux/reducers/profileReducer'

const Header = () => {
  // const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const dispatch = useTypedDispatch()
  const idAuth = useAppSelector(state => state.auth.data.id)
  const infoProfile = useAppSelector(state => state.profilePage.profilePageInfo)
  // const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>): void => {
  //   if (e.target.files) {
  //     console.log(e.target.files)
  //     // setSelectedFile(e.target.files)
  //     alert('should update photo with TC')
  //   }
  // }

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    const formData: any = new FormData()
    formData.append('image', e.target.files?.[0])
    dispatch(UpdatePhotoProfile(formData))
  }

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.headerInner}>
          <a className={s.userAvatar} href="#">
            <img
              // src={infoProfile?.photos.large ? infoProfile.photos.large : ''}/>
              src={
                'https://social-network.samuraijs.com/activecontent/images/users/27012/user.jpg?v=1'
              }
            />
          </a>
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
