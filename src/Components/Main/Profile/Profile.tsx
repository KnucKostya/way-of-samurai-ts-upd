import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ContaineerMyPostComponent from "./MyPosts/ContaineerMyPostComponent";
import {ProfilePageDataType} from "../../../Redux/state";
import {RootThunkType, useAppSelector} from "../../../Redux/store";
import s from "./Profile.module.css"
import AddPost from "./AddPost/AddPost";
import LoginPage from "../../../Common/Login/LoginPage";


const Profile = (props:ProfilePropsType) => {

    // const authId = useAppSelector(state => state.auth.data.id)
    // const profileId = useAppSelector(state => state.profilePage.profilePageInfo?.userId)
    const isAuth = useAppSelector(state => state.auth.isAuth)

    return <div >
        {!isAuth ?
            <div className={s.profileContainer}>
                <ProfileInfo profileUser={props.profileUser}
                             status={props.status}
                             updateStatus={props.updateStatus}
                             paramUserId={props.paramUserId}
                />
                <LoginPage/>
            </div>
            : <div className={s.profileContainer}>
            <ProfileInfo profileUser={props.profileUser}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         paramUserId={props.paramUserId}
            />
            <AddPost/>
            <ContaineerMyPostComponent/>
        </div>}
        {/*<ProfileInfo profileUser={props.profileUser}*/}
        {/*                status={props.status}*/}
        {/*                updateStatus={props.updateStatus}*/}
        {/*                paramUserId={props.paramUserId}*/}
        {/*/>*/}
        {/*<AddPost/>*/}
        {/*<ContaineerMyPostComponent/>*/}
    </div>

}

export default Profile;

//TYPES
type ProfilePropsType = {
    profileUser: ProfilePageDataType
    status:string
    updateStatus:(status:string)=>RootThunkType
    paramUserId:number
}