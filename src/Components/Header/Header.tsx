import React from 'react';
import s from './Header.module.css';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import {commonType} from "./HeaderContainer";
import {useAppDispatchThunk, useAppSelector} from "../../Redux/store";
import {LogOutThunkCreator} from "../../Redux/authReducer";
import logo from "../../logo.svg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type HeaderPropsType = {
    section: string
}
//ADD INSIDE PROPS ^^


const Header = (props: commonType) => {
    const dispatch = useAppDispatchThunk()
    const infoProfile = useAppSelector(state => state.profilePage.profilePageInfo)



    //

    // const idAuth = useAppSelector(state => state.auth.id)
    // const infoProfile = useAppSelector(state => state.profileData.profile)
    //
    // if (section === "sectionLogout" || section === "sectionError") {
    //     return null
    // }
    // const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>): void => {
    //     if (e.target.files) {
    //         dispatch(updatePhotoProfileTC(e.target.files[0]))
    //     }
    // }
    {/*//ADD THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}

    //


    return(


    <header className={s.header}>
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.headerInner}>
        {/*<div className={s.leftSideContainer}>*/}
                    <a className={styles.userAvatar} href="#">
                        <img className={s.logo} src={logo}/>
                        {/*remove!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                    </a>
                    {/*{(idAuth === infoProfile?.userId) && <div className={styles.editPhoto}>*/}
                    {/*    <input type="file" id="inputFile" onChange={onMainPhotoSelected}/>*/}
                    {/*    <label htmlFor="inputFile"><FontAwesomeIcon icon={faCameraRotate}*/}
                    {/*                                                size="lg"/> Edit Photo</label>*/}
                    {/*//FIX!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
                    </div>


            {/*<img className={s.logo} src={logo}/>*/}
            {/*<img className={s.logo} src={logo}/>*/}
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
        </div>
    </header>
)
}

export default Header;

