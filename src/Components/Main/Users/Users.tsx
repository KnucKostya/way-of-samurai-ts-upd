import React from 'react';
import {APIusersType, FollowUserThunk, UnfollowUserThunk} from "../../../Redux/usersReducer";
import {Redirect} from "react-router-dom";
import {Paginator} from "../../../Common/Paginator/Paginator";
import {Friend} from "../Friends/Friend/Friend";
import {toggleFollowingInProgressAC} from "../../../Redux/reducers/friendsReducer";
import {useAppDispatch} from "../../../Redux/store";


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
                        name={friend.name} photoSmall={friend.photos.large}
                                 photoLarge={friend.photos.large} followed={friend.followed}
                                 callback={changeFollowingUser}
                        />}
                    </div>

                </div>
                }

            )}
            <Paginator onPageChangedMethod={props.onPageChangedMethod} totalCount={props.totalCount}
                       count={props.count} currentPage={props.currentPage}/>

        </div>
    );
};

export default Users;