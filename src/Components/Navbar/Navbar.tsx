import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faMessage, faMusic, faNewspaper, faPager, faUser} from "@fortawesome/free-solid-svg-icons";
import {SectionCSSType} from "../Main/Main";


export const Navbar = ({section, changeGrid}: NavPropsType) => {

    return (
        <div className={s.nav}>
        <p className={s.title}>Shortcuts</p>
    <nav className={s.nav}>
        <div className={s.link}>
            <FontAwesomeIcon icon={faPager} size="lg" pull="left" />
            <NavLink to='/profile' >Profile</NavLink>
        </div>
        <div className={s.link}>
            <FontAwesomeIcon icon={faUser} size="lg" pull="left" />
            <NavLink to='/users'>Users</NavLink>
        </div>
        <div className={s.link}>
            <FontAwesomeIcon icon={faMessage} size="lg" pull="left" />
            <NavLink to='/Dialogs'>Messages</NavLink>
        </div>
        <div className={s.link}>
            <FontAwesomeIcon icon={faNewspaper} size="lg" pull="left"/>
            <NavLink to='/news/news.jsx'> News</NavLink>
        </div>
        <div className={s.link}>
            <FontAwesomeIcon icon={faMusic} size="lg" pull="left"/>
            <NavLink to='/music/music.jsx'>Music</NavLink>
        </div>
        <div className={s.link}>
            <FontAwesomeIcon icon={faGear} size="lg" pull="left"/>
            <NavLink to='/settings/settings.jsx'> Settings</NavLink>
        </div>
    </nav>
    </div>
    )
}

export default Navbar;

// TYPES
type NavPropsType = {
    section: string
    changeGrid: (value: SectionCSSType) => void
}