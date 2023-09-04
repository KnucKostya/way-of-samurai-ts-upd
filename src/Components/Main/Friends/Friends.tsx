import React, { ReactElement } from 'react'
import s from './Friends.module.css'
import { NavLink, Route } from 'react-router-dom'
import { MyFriends } from './MyFriends/MyFriends'
import UsersContainer from './Users/UsersContainer'
import { FriendsRequests } from './FriendsRequests/FriendsRequests'

export const Friends = (): ReactElement => {
  return (
    <div className={s.friends}>
      <div className={s.title}>
        <NavLink to="/users/my" className={s.link}>
          My Friends
        </NavLink>
        <NavLink to="/users/requests" className={s.link}>
          Friend Requests
        </NavLink>
        <NavLink to="/users/friends" className={s.link}>
          Find Friends
        </NavLink>
      </div>
      <Route path="/users/my" render={() => <MyFriends />} />
      <Route path="/users/requests" render={() => <FriendsRequests />} />
      <Route path="/users/friends" render={() => <UsersContainer />} />
    </div>
  )
}
