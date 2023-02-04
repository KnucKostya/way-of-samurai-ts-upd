import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {commonType} from "./HeaderContainer";

const Header = (props:commonType) => {
    console.log(props.login)
    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />
        <span className = {s.auth}>
        <NavLink to={'/login'}>Login</NavLink>
            <span>{props.login}</span>
        </span>
    </header>
}

export default Header;