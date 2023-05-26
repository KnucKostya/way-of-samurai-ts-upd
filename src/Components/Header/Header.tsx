import React, {ChangeEvent} from 'react';
import s from './Header.module.css';
import {commonType} from "./HeaderContainer";
import {useAppDispatchThunk, useAppSelector} from "../../Redux/store";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCameraRotate} from "@fortawesome/free-solid-svg-icons";

const Header = (props: commonType) => {

    const dispatch = useAppDispatchThunk()
    const idAuth = useAppSelector(state => state.auth.data.id)
    const infoProfile = useAppSelector(state => state.profilePage.profilePageInfo)
    console.log(idAuth)
    console.log(infoProfile?.userId)
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files) {
            // dispatch(updatePhotoProfileTC(e.target.files[0]))
            alert('should update photo with TC')
        }
    }

    return <header className={s.header}>

            {/*<div className={s.leftSideContainer}>*/}
            {/*    <img className={s.logo} src= {logo}/>*/}
            {/*    <img className={s.logo} src= {logo}/>*/}
            {/*    <img className={s.logo} src= {logo}/>*/}
            {/*</div>*/}
            {/*<div className={s.rightSideContainer}>*/}
            {/*    <input type="text"/>*/}
            {/*    <img className={s.logo} src={logo}/>*/}
            {/*    {props.isAuth*/}
            {/*        ?*/}
            {/*        <>*/}
            {/*            <span>{`${props.login}`}</span>*/}
            {/*            <button onClick={()=>dispatch(LogOutThunkCreator())}>- logout</button>*/}
            {/*        </>*/}
            {/*        : <span className={s.auth}>*/}
            {/* <NavLink to={'/login'}>Login</NavLink>*/}
            {/*</span>*/}
            {/*    }*/}
            {/*</div>*/}


        <div className={s.container}>
            <div className={s.headerInner}>
                <a className={s.userAvatar} href="#">
                    <img
                        // src={infoProfile?.photos.large ? infoProfile.photos.large : userAvatar}/>
                        src={'https://social-network.samuraijs.com/activecontent/images/users/27012/user.jpg?v=1'}/>
                </a>
                {(idAuth === infoProfile?.userId) && <div className={s.editPhoto}>
                    <input type="file" id="inputFile" onChange={onMainPhotoSelected}/>
                    <label htmlFor="inputFile">
                        <FontAwesomeIcon icon={faCameraRotate} size="lg"/>{` Edit Photo`}</label>
                </div>
                }
            </div>
        </div>

    </header>
}

export default Header;