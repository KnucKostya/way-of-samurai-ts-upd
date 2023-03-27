import React from 'react';
import Prepostcontent from "./Prepostcontent/Prepostcontent";
import ContaineerMyPostComponent from "./MyPosts/ContaineerMyPostComponent";
import {ProfilePageDataType} from "../../Redux/state";
import {RootThunkType} from "../../Redux/store";
import s from "./Profile.module.css"


type ProfilePropsType = {
    profileUser: ProfilePageDataType
    status:string
    updateStatus:(status:string)=>RootThunkType
}

const Profile = (props:ProfilePropsType) => {

    return <div className={s.profileContainer}>
        <Prepostcontent profileUser={props.profileUser} status={props.status} updateStatus={props.updateStatus}/>
        <ContaineerMyPostComponent/>
    </div>

}

export default Profile;