// УБРАЛ ВСЕ ОШИБКИ С КОМПОНЕНТ ИЗ ПАПКИ FRIENDS
//ДЕЛАЮ КОМПОНЕНТУ FRIENDS - ЗАКОНЧИЛ ПРОФАЙЛ!!
import {ReactElement, useEffect} from "react";

import s from './FindFriends.module.css'
import {AppDispatch, useAppSelector} from "../../../../Redux/store";
import {
    followingUserTC,
    getUsersTC,
    showMoreFoundUsersAC,
    toggleFollowingInProgressAC,
    unfollowingUserTC
} from "../../../../Redux/reducers/friendsReducer";
import {Friend} from "../Friend/Friend";
import Preloader from "../../../../Common/Preloader";
import {Pagination} from "./Pagination";
import {ShowMore} from "../../../../UIKit/ShowMore";
import {useDispatch} from "react-redux";

export const FindFriends = (): ReactElement => {

    const useAppDispatch = () => useDispatch<AppDispatch>()
    const dispatch = useAppDispatch()

    const friendsFindData = useAppSelector(state => state.friendsData.foundFriends)
    const pageSize = useAppSelector(state => state.friendsData.pageSize)
    const totalFoundFriends = useAppSelector(state => state.friendsData.totalFoundFriends)
    const currentPageFindFriends = useAppSelector(
        state => state.friendsData.currentPageFindFriends,
    )
    const isFetching = useAppSelector(state => state.friendsData.isFetching)
    const isFollowingInProgress = useAppSelector(
        state => state.friendsData.isFollowingInProgress,
    )

    useEffect(() => {
        dispatch(getUsersTC(currentPageFindFriends, pageSize))
    }, [dispatch, pageSize, currentPageFindFriends, totalFoundFriends])

    const changeFollowingUser = (id: string, followed: boolean): void => {
        dispatch(toggleFollowingInProgressAC(id, true))
        if (!followed) {
            dispatch(followingUserTC(id))
        } else {
            dispatch(unfollowingUserTC(id))
        }
    }

    const friendsFindElement = friendsFindData.map(friend => (
        <Friend
            key={friend.id}
            id={friend.id}
            name={friend.name}
            followed={friend.followed}
            photos={friend.photos}
            status={friend.status}
            callback={changeFollowingUser}
            disabled={isFollowingInProgress.some(id => id === friend.id)}
        />
    ))

    const showMoreFoundUsers = (): void => {
        dispatch(showMoreFoundUsersAC())
    }

    return (
        <div className={s.findFriends}>
            {isFetching ? (
                <Preloader />
            ) : (
                <div>
                    {friendsFindElement}
                    <ShowMore callback={showMoreFoundUsers} />
                    <Pagination
                        totalFoundFriends={totalFoundFriends}
                        pageSize={pageSize}
                        currentPageFindFriends={currentPageFindFriends}
                    />
                </div>
            )}
        </div>
    )
}
