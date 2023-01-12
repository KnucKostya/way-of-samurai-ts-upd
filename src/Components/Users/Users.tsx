import React, {useEffect} from 'react';
import {combineType} from "./UsersContainer";
import s from './users.module.css'
import defaultLogo from '../../logo.svg'
import {APIusersType} from "../../Redux/usersReducer";

export type UsersPropsType = {
    onPageChangedMethod:(m:number)=>void
    totalCount:number
    count:number
    unfollow:(id:number)=>void
    follow:(id:number)=>void
    users: APIusersType[]
    currentPage:number
}

const Users = (props:UsersPropsType) => {

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
                                 onClick={()=>props.onPageChangedMethod(m)}>{m}</span>
                    //нужно организовать выдиление цифры на которой находится ползьователь
                    //проблема с класснеймом и числом страницы
                })}

            </div>

            {props.users.map(m =>
                <div key={m.id}>
                    <div>
                        {m.followed ?
                            <button onClick={() => props.unfollow(m.id)}>Unfollow</button> :
                            <button onClick={() => props.follow(m.id)}>Follow</button>
                        }
                    </div>
                    <div>
                        {m.name}
                    </div>
                    <img src={m.photos.small || defaultLogo} className={s.avatar}/>

                    <div>{m.status ? m.status : 'default Status'}</div>
                    <div>{'m.location.city'}</div>
                    <div>{'m.location.country'}</div>

                </div>
            )}

        </div>
    );
};

export default Users;