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
        {/*<div className={s.Fr}>Friends</div>*/}
        {/*<div> <img className={s.avatar} src='https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg' />*/}

        {/*</div>*/}
        {/*<div className={s.fNav}>*/}
        {/*  <div className={s.NavLink}><NavLink to ='#'>{props.state.sideBar.user1}</NavLink></div>*/}
        {/*  <div className={s.NavLink}><NavLink to ='#'>{props.state.sideBar.user2}</NavLink></div>*/}
        {/*  <div className={s.NavLink}><NavLink to ='#'>{props.state.sideBar.user3}</NavLink></div>*/}
        {/*</div>*/}


}

export default Navbar;