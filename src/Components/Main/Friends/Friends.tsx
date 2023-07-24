import React, { ReactElement } from 'react'
import styles from './Friends.module.css'
import { NavLink, Route } from 'react-router-dom'
import { MyFriends } from './MyFriends/MyFriends'
import UsersContainer from '../Users/UsersContainer'
import { FriendsRequests } from './FriendsRequests/FriendsRequests'

export const Friends = (): ReactElement => {
  return (
    <div className={styles.friends}>
      <div className={styles.title}>
        <NavLink to="/users/my">My Friends</NavLink>
        <NavLink to="/users/requests">Friend Requests</NavLink>
        <NavLink to="/users/friends">Find Friends</NavLink>
      </div>
      <Route path="/users/my" render={() => <MyFriends />} />
      <Route path="/users/requests" render={() => <FriendsRequests />} />
      <Route path="/users/friends" render={() => <UsersContainer />} />
      {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
    </div>
  )
}
