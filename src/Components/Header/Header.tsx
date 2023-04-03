import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {commonType} from "./HeaderContainer";
import {useAppDispatchThunk} from "../../Redux/store";
import {LogOutThunkCreator} from "../../Redux/authReducer";
import logo from "../../logo.svg"

const Header = (props: commonType) => {
    const dispatch = useAppDispatchThunk()

    return <header className={s.header}>

        <div className={s.leftSideContainer}>
            <img className={s.logo} src={logo}/>
            <img className={s.logo} src={logo}/>
            <img className={s.logo} src={logo}/>
        </div>

        <div className={s.rightSideContainer}>
            <input type="text"/>
            {props.isAuth
                ?
                <>
                    <span>{`${props.login}`}</span>
                    <button onClick={() => dispatch(LogOutThunkCreator())}>- logout</button>
                </>

                : <span className={s.auth}>
             <NavLink to={'/login'}>Login</NavLink>
            </span>
            }
        </div>

    </header>
}

export default Header;