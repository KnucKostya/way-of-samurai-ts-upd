import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ContaineerMyPostComponent from "./MyPosts/ContaineerMyPostComponent";
import {ProfilePageDataType} from "../../../Redux/state";
import {RootThunkType, useAppSelector} from "../../../Redux/store";
import s from "./Profile.module.css"


const Profile = (props:ProfilePropsType) => {

    const authId = useAppSelector(state => state.auth.data.id)
    const profileId = useAppSelector(state => state.profilePage.profilePageInfo?.userId)

    return <div className={s.profileContainer}>
        <ProfileInfo profileUser={props.profileUser}
                        status={props.status}
                        updateStatus={props.updateStatus}
                        paramUserId={props.paramUserId}
        />
        <ContaineerMyPostComponent/>
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