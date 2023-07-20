import React, {ReactElement, useState} from "react"
import styles from "./Friends.module.css"
import {NavLink, Route} from "react-router-dom"
import {MyFriends} from "./MyFriends/MyFriends"
import UsersContainer from "../Users/UsersContainer";
import {Error} from "../../Error";

export const Friends = (): ReactElement => {
    const [filter, setFilter] = useState(true)

    return (
        <div className={styles.friends}>
            <div className={styles.title}>
                <NavLink
                    // className={({isActive}) =>
                    //     isActive ? `${styles.titleItem} ${styles.activeItem}` : `${styles.titleItem}`
                    // }
                    to="/users/my"
                    onClick={() => setFilter(true)}
                >
                    My Friends
                </NavLink>
                <NavLink
                    // className={({isActive}) =>
                    //     isActive ? `${styles.titleItem} ${styles.activeItem}` : `${styles.titleItem}`
                    // }
                    to="/users/requests"
                    onClick={() => setFilter(false)}
                >
                    Friend Requests
                </NavLink>
                <NavLink
                    // className={({isActive}) =>
                    //     isActive ? `${styles.titleItem} ${styles.activeItem}` : `${styles.titleItem}`
                    // }
                    to="/users/friends"
                >
                    Find Friends
                </NavLink>
            </div>
                {/*<Route path="*" render={()=><Error />} />*/}
                {/*<Route path="my" render={()=><MyFriends filter={filter} />} />*/}
                {/*<Route path="requests" render={()=><MyFriends filter={filter} />} />*/}
            {/*<Route path="/*" render={()=><MyFriends  />} />*/}
            <Route path="/users/my" render={()=><MyFriends  />} />
                <Route path="/users/requests" render={()=><MyFriends  />} />
                <Route path="/users/friends" render={()=><UsersContainer />} />
            {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
        </div>
    )
}
