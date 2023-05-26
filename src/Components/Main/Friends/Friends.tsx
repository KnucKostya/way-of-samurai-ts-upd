import React, {ReactElement, useState} from "react"
import styles from "./Friends.module.css"
import {NavLink, Route} from "react-router-dom"
import {MyFriends} from "./MyFriends/MyFriends"
import {FindFriends} from "./FindFriends/FindFriends"
import {Error} from "../../../../../anotherSN/social-network/src/components/Error"

export const Friends = (): ReactElement => {
    const [filter, setFilter] = useState(true)

    return (
        <div className={styles.friends}>
            <div className={styles.title}>
                <NavLink
                    // className={({isActive}) =>
                    //     isActive ? `${styles.titleItem} ${styles.activeItem}` : `${styles.titleItem}`
                    // }
                    to="my"
                    onClick={() => setFilter(true)}
                >
                    My Friends
                </NavLink>
                <NavLink
                    // className={({isActive}) =>
                    //     isActive ? `${styles.titleItem} ${styles.activeItem}` : `${styles.titleItem}`
                    // }
                    to="requests"
                    onClick={() => setFilter(false)}
                >
                    Friend Requests
                </NavLink>
                <NavLink
                    // className={({isActive}) =>
                    //     isActive ? `${styles.titleItem} ${styles.activeItem}` : `${styles.titleItem}`
                    // }
                    to="find"
                >
                    Find Friends
                </NavLink>
            </div>
                <Route path="*" render={()=><Error />} />
                <Route path="my" render={()=><MyFriends filter={filter} />} />
                <Route path="requests" render={()=><MyFriends filter={filter} />} />
                <Route path="find" render={()=><FindFriends />} />
        </div>
    )
}
