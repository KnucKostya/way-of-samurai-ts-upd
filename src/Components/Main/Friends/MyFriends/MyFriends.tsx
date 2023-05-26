import React, {ReactElement} from "react"
import styles from "./MyFriends.module.css"
import {changeStatusFriendAC} from "../../../../../../anotherSN/social-network/src/redux/reducers/friendsReducer"
import {Friend} from "../Friend/Friend"
import {useAppDispatch} from "../../../../../../anotherSN/social-network/src/hooks/useAppDispatch"
import {useAppSelector} from "../../../../../../anotherSN/social-network/src/hooks/useAppSelector"

export const MyFriends: React.FC<MyFriendsProps> = ({filter}): ReactElement => {
    const dispatch = useAppDispatch()

    const friendsData = useAppSelector(state => state.friendsData.friends)

    const changeStatusFriend = (id: string): void => {
        dispatch(changeStatusFriendAC(id))
    }

    let friendsDataFilter = friendsData
    let friendsDataFilterTrue = friendsData.filter(el => el.followed)
    let friendsDataFilterFalse = friendsData.filter(el => !el.followed)

    if (filter) {
        friendsDataFilter = friendsDataFilterTrue
    } else {
        friendsDataFilter = friendsDataFilterFalse
    }

    const friendElement = friendsDataFilter.map(friend => (
        <Friend
            key={friend.id}
            id={friend.id}
            name={friend.name}
            followed={friend.followed}
            photos={friend.photos}
            status={friend.status}
            callback={changeStatusFriend}
        />
    ))

    return <div className={styles.myFriends}>{friendElement}</div>
}

// TYPES
type MyFriendsProps = {
    filter: boolean
}
