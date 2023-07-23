import React from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRightFromBracket,
  faGear,
  faMessage,
  faMusic,
  faNewspaper,
  faPager,
  faPeopleGroup,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { SectionCSSType } from '../Main/Main'
import { useTypedDispatch } from '../../Redux/store'
import { LogOutThunkCreator } from '../../Redux/reducers/authReducer'

export const Navbar = ({ section, changeGrid }: NavPropsType) => {
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
          <NavLink to="/groups" onClick={() => changeGrid('sectionAll')}>
            Groups
          </NavLink>
        </div>
        <div className={s.link}>
          <FontAwesomeIcon icon={faNewspaper} size="lg" pull="left" />
          <NavLink to="/news"> News</NavLink>
        </div>
        <div className={s.link}>
          <FontAwesomeIcon icon={faMusic} size="lg" pull="left" />
          <NavLink to="/music">Music</NavLink>
        </div>
        <div className={s.link}>
          <FontAwesomeIcon icon={faGear} size="lg" pull="left" />
          <NavLink to="/settings">Settings</NavLink>
        </div>
        <div className={s.link} onClick={onClickHandlerLogout}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" pull="left" />
          Logout
        </div>
      </nav>
    </div>
  )
}

export default Navbar

// TYPES
type NavPropsType = {
  section: string
  changeGrid: (value: SectionCSSType) => void
}

// return (
//     <div className={s.nav}>
//         <p className={s.title}>Shortcuts</p>
//         <nav className={s.nav}>
//             <div className={s.link}>
//                 <FontAwesomeIcon icon={faPager} size="lg" pull="left" />
//                 <NavLink to='/profile'>Profile</NavLink>
//             </div>
//             <div className={s.link}>
//                 <FontAwesomeIcon icon={faUser} size="lg" pull="left" />
//                 <NavLink to='/users'>Users</NavLink>
//             </div>
//             <div className={s.link}>
//                 <FontAwesomeIcon icon={faMessage} size="lg" pull="left" />
//                 <NavLink to='/Dialogs'>Messages</NavLink>
//             </div>
//             <div className={s.link}>
//                 <FontAwesomeIcon icon={faNewspaper} size="lg" pull="left"/>
//                 <NavLink to='/news/news.jsx'> News</NavLink>
//             </div>
//             <div className={s.link}>
//                 <FontAwesomeIcon icon={faMusic} size="lg" pull="left"/>
//                 <NavLink to='/music/music.jsx'>Music</NavLink>
//             </div>
//             <div className={s.link}>
//                 <FontAwesomeIcon icon={faGear} size="lg" pull="left"/>
//                 <NavLink to='/settings/settings.jsx'> Settings</NavLink>
//             </div>
//         </nav>
//     </div>
// )

// return <nav className={s.nav}>
//     <div className={s.item}>
//         <NavLink to='/profile' >Profile</NavLink>
//     </div>
//     <div className={s.item}>
//         <NavLink to='/users' >Users</NavLink>
//     </div>
//     <div className={`${s.item}`}>
//         <NavLink to='/Dialogs'>Messages</NavLink>
//     </div>
//     <div className={s.item}>
//         <NavLink to='/news/news.jsx'>News</NavLink>
//     </div>
//     <div className={s.item}>
//         <NavLink to='/music/music.jsx'>Music</NavLink>
//     </div>
//     <div className={s.item}>
//         <NavLink to='/settings/settings.jsx'>Settings</NavLink>
//     </div>
//
// </nav>
