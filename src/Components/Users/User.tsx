import React from 'react';
import s from './users.module.css'
import defaultLogo from '../../logo.svg'
import {NavLink, Redirect} from "react-router-dom";
import {APIusersType} from "Redux/usersReducer";


<Redirect to={'login'}/>

export type UsersPropsType = {
  user:APIusersType
    followingInProgressStatus: number[]
    unfollowUserThunk: (userID: number) => void
    followUserThunk: (userID: number) => void
}


const User = (props: UsersPropsType) => {

const {user,followingInProgressStatus,unfollowUserThunk,followUserThunk} = props

    return (
        <div>
             <div>
                        <div>
                            {user.followed
                                    ?
                                    <button disabled={followingInProgressStatus.some(id => id === user.id)}
                                            className={s.buttDisable}
                                            onClick={() => unfollowUserThunk(user.id)}>Unfollow</button>
                                    :
                                    <button disabled={followingInProgressStatus.some(id => id === user.id)}
                                            onClick={() => followUserThunk(user.id)}>Follow</button>
                            }
                        </div>

                        <div>
                            {user.name}
                        </div>

                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small || defaultLogo} className={s.avatar} alt={'image not loaded:('}/>
                        </NavLink>

                        <div>{user.status ? user.status : 'default Status'}</div>
                        <div>{'m.location.city'}</div>
                        <div>{'m.location.country'}</div>

                    </div>

        </div>
    );
};

export default User;