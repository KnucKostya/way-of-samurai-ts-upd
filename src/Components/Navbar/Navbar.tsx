import React from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRightFromBracket,
  faMessage,
  faNewspaper,
  faPager,
  faPeopleGroup,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { useTypedDispatch } from '../../Redux/store'
import { LogOutThunkCreator } from '../../Redux/reducers/authReducer'

export const Navbar = () => {
  const dispatch = useTypedDispatch()

  const onClickHandlerLogout = () => {
    dispatch(LogOutThunkCreator())
  }

  return (
    <div className={s.nav}>
      <p className={s.title}>Shortcuts</p>
      <nav className={s.nav}>
        <div className={s.link}>
          <FontAwesomeIcon icon={faPager} size="lg" pull="left" />
          <NavLink to="/profile">Profile</NavLink>
        </div>
        <div className={s.link}>
          <FontAwesomeIcon icon={faUser} size="lg" pull="left" />
          <NavLink to="/users/my">Users</NavLink>
        </div>
        <div className={s.link}>
          <FontAwesomeIcon icon={faMessage} size="lg" pull="left" />
          <NavLink to="/Dialogs">Messages</NavLink>
        </div>
        <div className={s.link}>
          <FontAwesomeIcon icon={faPeopleGroup} size="lg" pull="left" />
          <NavLink to="/groups">Groups</NavLink>
        </div>
        <div className={s.link}>
          <FontAwesomeIcon icon={faNewspaper} size="lg" pull="left" />
          <NavLink to="/news"> News</NavLink>
        </div>
        <div className={s.link} onClick={onClickHandlerLogout}>
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            size="lg"
            pull="left"
          />
          Logout
        </div>
      </nav>
    </div>
  )
}

export default Navbar
