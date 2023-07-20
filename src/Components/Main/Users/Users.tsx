import React from 'react';
import s from './users.module.css'
import defaultLogo from '../../../logo.svg'
import {APIusersType, FollowUserThunk, UnfollowUserThunk} from "../../../Redux/usersReducer";
import {NavLink, Redirect} from "react-router-dom";
import {Paginator} from "../../../Common/Paginator/Paginator";
import {Friend} from "../Friends/Friend/Friend";
import {followingUserTC, toggleFollowingInProgressAC, unfollowingUserTC} from "../../../Redux/reducers/friendsReducer";
import {AppDispatch, useAppDispatch} from "../../../Redux/store";


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
    followingInProgress: (isFetching:boolean,userID:number) => void
    UnfollowUserThunk:(userID:number)=>void
    FollowUserThunk:(userID:number)=>void
}


const Users = (props: UsersPropsType) => {
    const dispatch = useAppDispatch()

    //ФУНКЦИЯ СЧИТАЮЩАЯ ОБЩЕЕ КОЛИЧЕСТВО СТРАНИЦ
    let countPagesArr: number[] = []

    let totalCountPages = Math.ceil(props.totalCount / props.count)

    for (let i = 1; i <= totalCountPages; i++) {
        countPagesArr.push(i)
    }

    const changeFollowingUser = (id: string, followed: boolean): void => {
        dispatch(toggleFollowingInProgressAC(id, true))
        if (!followed) {
            // @ts-ignore
            dispatch(FollowUserThunk(id))
        } else {
            // @ts-ignore
            dispatch(UnfollowUserThunk(id))
        }
    }

     return (
        <div>

            {props.users.map(friend => {
                return     <div key={friend.id}>
                    <div>
                        {<Friend id={friend.id.toString()} status={friend.status}
                        name={friend.name} photoSmall={friend.photos.small}
                                 photoLarge={friend.photos.large} followed={friend.followed}
                                 callback={changeFollowingUser}
                        />}
                        {
                            friend.followed
                                ?
                                <button disabled={props.followingInProgressStatus.some(id=>id===friend.id)} className={s.buttDisable}
                                        onClick={() => props.UnfollowUserThunk(friend.id)}>Unfollow</button>
                                :
                                <button disabled={props.followingInProgressStatus.some(id=>id===friend.id)}
                                        onClick={() =>  props.FollowUserThunk(friend.id)}>Follow</button>
                        }
                    </div>
                    <div>
                        {friend.name}
                    </div>

                    <NavLink to={'/profile/' + friend.id}>
                        <img src={friend.photos.small || defaultLogo} className={s.avatar} alt={'image not loaded'}/>
                    </NavLink>

                    <div>{friend.status ? friend.status : 'default Status'}</div>
                    <div>{'m.location.city'}</div>
                    <div>{'m.location.country'}</div>
                </div>
                }

            )}
            <Paginator onPageChangedMethod={props.onPageChangedMethod} totalCount={props.totalCount}
                       count={props.count} currentPage={props.currentPage}/>

        </div>
    );
};

export default Users;