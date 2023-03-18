import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' >Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/users' >Users</NavLink>
        </div>
        <div className={`${s.item}`}>
            <NavLink to='/Dialogs'>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news/news.jsx'>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music/music.jsx'>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings/settings.jsx'>Settings</NavLink>
        </div>

    </nav>

}

export default Navbar;