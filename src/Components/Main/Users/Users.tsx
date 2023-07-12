import React from 'react';
import s from './users.module.css'
import defaultLogo from '../../../logo.svg'
import {APIusersType} from "../../../Redux/usersReducer";
import {NavLink, Redirect} from "react-router-dom";


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

    //ФУНКЦИЯ СЧИТАЮЩАЯ ОБЩЕЕ КОЛИЧЕСТВО СТРАНИЦ
    let countPagesArr: number[] = []

    let totalCountPages = Math.ceil(props.totalCount / props.count)

    for (let i = 1; i <= totalCountPages; i++) {
        countPagesArr.push(i)
    }

     return (
        <div>
            <div>
                {countPagesArr.map((m, i) => {
                    return <span key={i} className={props.currentPage === m ? s.spanBold : s.span}
                                 onClick={() => props.onPageChangedMethod(m)}>{m}</span>
                })}
            </div>
            {props.users.map(m => {
                return     <div key={m.id}>
                    <div>
                        {
                            m.followed
                                ?
                                <button disabled={props.followingInProgressStatus.some(id=>id===m.id)} className={s.buttDisable}
                                        onClick={() => props.UnfollowUserThunk(m.id)}>Unfollow</button>
                                :
                                <button disabled={props.followingInProgressStatus.some(id=>id===m.id)}
                                        onClick={() =>  props.FollowUserThunk(m.id)}>Follow</button>
                        }
                    </div>
                    <div>
                        {m.name}
                    </div>

                    <NavLink to={'/profile/' + m.id}>
                        <img src={m.photos.small || defaultLogo} className={s.avatar} alt={'image not loaded'}/>
                    </NavLink>

                    <div>{m.status ? m.status : 'default Status'}</div>
                    <div>{'m.location.city'}</div>
                    <div>{'m.location.country'}</div>

                </div>
                }

            )}

        </div>
    );
};

export default Users;