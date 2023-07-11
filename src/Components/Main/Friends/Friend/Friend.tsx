import React from "react";
import styles from "./Friend.module.css";
// import friendAvatar from "../../../../../../anotherSN/social-network/src/img/Contacts/friend-avatar4.jpg"
// import {Button} from "../../../../../../anotherSN/social-network/src/components/UIKit/Button";
import {NavLink} from "react-router-dom";

type FriendsPropsType = {
    id: string
    name: string
    followed: boolean
    photos: string
    status: string
    disabled?: boolean
    callback: (id: string, followed: boolean) => void
}

export const Friend = (props: FriendsPropsType) => {

    const onClickButtonHandler = () => {
        props.callback(props.id, props.followed)
    }

    return (
        <div className={styles.friend}>
            <NavLink to={`/profile/${props.id}`} className={styles.info}>
                <img src={/^http/.test(props.photos) ? props.photos : "friendAvatar"} alt={props.name}/>
                {/*fix friendAvatar*/}
                <a href="src/Components/Main/Friends/Friend/Friend#">{props.name.length > 12 ? `${props.name.slice(0, 12)}...` : props.name}</a>
            </NavLink>
            <div>{props.status.length > 15 ? `${props.status.slice(0, 15)}...` : props.status}</div>
            {/*<Button name={props.followed ? "Unfriends" : "Add Friend"} status={props.followed}*/}
            {/*        callback={onClickButtonHandler} disabled={props.disabled}/>*/}
        </div>
    )
}
