import React from 'react';
import s from './users.module.css'
import defaultLogo from '../../logo.svg'
import {APIusersType} from "../../Redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

export type UsersPropsType = {
    onPageChangedMethod: (m: number) => void
    totalCount: number
    count: number
    unfollow: (id: number) => void
    follow: (id: number) => void
    users: APIusersType[]
    currentPage: number
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

            {props.users.map(m =>
                <div key={m.id}>
                    <div>
                        {
                            m.followed ?
                            <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`, {withCredentials: true})
                                    .then(res => {
                                        if(res.data.resultCode === 0){
                                            props.unfollow(m.id)
                                        }})}}>Unfollow</button>
                            :
                            <button onClick={() =>{
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`,{},{withCredentials:true})
                                    .then(res=>{
                                        if(res.data.resultCode===0){
                                            props.follow(m.id)
                                        }
                                    })}}>Follow</button>
                        }
                    </div>
                    <div>
                        {m.name}
                    </div>

                    <NavLink to={'/profile/'+ m.id}>
                        <img src={m.photos.small || defaultLogo} className={s.avatar}/>
                    </NavLink>

                    <div>{m.status ? m.status : 'default Status'}</div>
                    <div>{'m.location.city'}</div>
                    <div>{'m.location.country'}</div>

                </div>
            )}

        </div>
    );
};

export default Users;