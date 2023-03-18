import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {commonType} from "./HeaderContainer";
import {useAppDispatchThunk} from "../../Redux/store";
import {LogOutThunkCreator} from "../../Redux/authReducer";

const Header = (props: commonType) => {
    const dispatch = useAppDispatchThunk()

    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png'/>
        {props.isAuth
            ?
            <>
                <span>{`${props.login}`}</span>
                <button onClick={()=>dispatch(LogOutThunkCreator())}>- logout</button>
            </>

            : <span className={s.auth}>
             <NavLink to={'/login'}>Login</NavLink>
            </span>
        }
    </header>
}

export default Header;