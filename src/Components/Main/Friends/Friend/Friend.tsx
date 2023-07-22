import React from "react";
import styles from "./Friend.module.css";
// import friendAvatar from "../../../../../../anotherSN/social-network/src/img/Contacts/friend-avatar4.jpg"
// import {Button} from "../../../../../../anotherSN/social-network/src/components/UIKit/Button";
import {NavLink} from "react-router-dom";
import userAvatar from '../../../../Common/img/user-avatar.webp';
import {Button} from "../../../../UIKit/Button";


type FriendsPropsType = {
    id: string
    name: string
    followed: boolean
    photoSmall?: string
    photoLarge?: string
    photos?:string
    status: string
    disabled?: boolean
    callback: (id: string, followed: boolean) => void
}

export const Friend = (props: FriendsPropsType) => {

    const onClickButtonHandler = () => {
        props.callback(props.id.toString(), props.followed)
    }
    // непрввильноый пропс с фотками приходит!!!!!!!!!!!!!!!!!!!!
    return (
        <div className={styles.friend}>
            <NavLink to={`/profile/${props.id}`} className={styles.info}>
                <img src={props.photos ? props.photos : props.photoSmall ? props.photoSmall : props.photoLarge ? props.photoLarge : userAvatar} alt={props.name}/>
                <span>{props.name}</span>
                {/*TODO link to user ^^^*/}
            </NavLink>
            <div >{props.status}</div>
            <Button name={props.followed ? "Unfriends" : "Add Friend"} status={props.followed}
                    callback={onClickButtonHandler} disabled={props.disabled}/>
        </div>
    )
}
