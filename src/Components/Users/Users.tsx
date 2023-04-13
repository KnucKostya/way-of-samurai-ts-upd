import React from 'react';
import {APIusersType} from "Redux/usersReducer";
import {Redirect} from "react-router-dom";
import {Paginator} from "Common/Paginator/Paginator";
import User from "Components/Users/User";


<Redirect to={'login'}/>

export type UsersPropsType = {
    onPageChangedMethod: (currentPage: number) => void
    totalCount: number
    count: number
    unfollow: (id: number) => void
    follow: (id: number) => void
    users: APIusersType[]
    currentPage: number
    followingInProgressStatus: number[]
    followingInProgress: (isFetching: boolean, userID: number) => void
    UnfollowUserThunk: (userID: number) => void
    FollowUserThunk: (userID: number) => void
}


const Users = (props: UsersPropsType) => {

    return (
        <div>
            <Paginator totalCount={props.totalCount} count={props.count} onPageChangedMethod={props.onPageChangedMethod}
                       currentPage={props.currentPage}/>
            {props.users.map(u => {
                    return <div key={u.id}>
                        <div>
                            {/*    {*/}
                            {/*        m.followed*/}
                            {/*            ?*/}
                            {/*            <button disabled={props.followingInProgressStatus.some(id => id === m.id)}*/}
                            {/*                    className={s.buttDisable}*/}
                            {/*                    onClick={() => props.UnfollowUserThunk(m.id)}>Unfollow</button>*/}
                            {/*            :*/}
                            {/*            <button disabled={props.followingInProgressStatus.some(id => id === m.id)}*/}
                            {/*                    onClick={() => props.FollowUserThunk(m.id)}>Follow</button>*/}
                            {/*    }*/}
                            {/*</div>*/}
                            {/*<div>*/}
                            {/*    {m.name}*/}
                            {/*</div>*/}

                            {/*<NavLink to={'/profile/' + m.id}>*/}
                            {/*    <img src={m.photos.small || defaultLogo} className={s.avatar} alt={'image not loaded:('}/>*/}
                            {/*</NavLink>*/}

                            {/*<div>{m.status ? m.status : 'default Status'}</div>*/}
                            {/*<div>{'m.location.city'}</div>*/}
                            {/*<div>{'m.location.country'}</div>*/}
                        </div>
                        <User user={u}
                              followingInProgressStatus={props.followingInProgressStatus}
                              unfollowUserThunk={props.UnfollowUserThunk}
                              followUserThunk={props.FollowUserThunk}/>
                    </div>
                }
            )}
        </div>
    );
};

export default Users;