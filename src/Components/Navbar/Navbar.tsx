import React from 'react';
import s from './Navbar.module.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <Link to='./' >Profile</Link>
        </div>
        <div className={`${s.item}`}>
            <Link to='./Dialogs'>Messages</Link>
        </div>
        <div className={s.item}>
            <Link to='./news/news.jsx'>News</Link>
        </div>
        <div className={s.item}>
            <Link to='./music/music.jsx'>Music</Link>
        </div>
        <div className={s.item}>
            <Link to='./settings/settings.jsx'>Settings</Link>
        </div>

    </nav>
        {/*<div className={s.Fr}>Friends</div>*/}
        {/*<div> <img className={s.avatar} src='https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg' />*/}

        {/*</div>*/}
        {/*<div className={s.fNav}>*/}
        {/*  <div className={s.Link}><Link to ='#'>{props.state.sideBar.user1}</Link></div>*/}
        {/*  <div className={s.Link}><Link to ='#'>{props.state.sideBar.user2}</Link></div>*/}
        {/*  <div className={s.Link}><Link to ='#'>{props.state.sideBar.user3}</Link></div>*/}
        {/*</div>*/}


}

export default Navbar;