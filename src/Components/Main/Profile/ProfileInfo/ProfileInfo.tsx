import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../../Common/Preloader";
import {ProfilePageDataType} from "../../../../Redux/state";
import EditableStatus from "./EditableStatus";
import {RootThunkType} from "../../../../Redux/store";
import userAvatar from "../../../../Common/img/user-avatar.webp";


const ProfileInfo = (props: PrePostContentType) => {

const {profileUser} = props;

    if (!profileUser) {
        return <Preloader/>
    }


    return (
        <div className={s.profileInfo}>
            <div>
                {/*<img src={profileUser.profilePageInfo?.photos.small} alt="small Image"/>*/}
                {profileUser.profilePageInfo?.photos.large
                    ? <img className={s.userAvatar}
                        src={profileUser.profilePageInfo?.photos.large} alt="large Image"/>
                    : <img className={s.userAvatar}
                          src={userAvatar}/>
                }
                <EditableStatus
                    statusValue={props.status ? props.status : 'Default status'}
                    updateStatus={props.updateStatus}
                    userID={profileUser.profilePageInfo?.userId}
                    paramUserId={props.paramUserId}
                />
            </div>

            <div>
                <p>
                    <b>Name:</b> {profileUser.profilePageInfo?.fullName}
                </p>
                <p>
                    <b>About me:</b>{" "}
                    {profileUser.profilePageInfo?.aboutMe ? profileUser.profilePageInfo?.aboutMe : "No information"}{" "}
                </p>
                <p>
                    <b>Job:</b>{" "}
                    {profileUser.profilePageInfo?.lookingForAJobDescription
                        ? profileUser.profilePageInfo?.lookingForAJobDescription
                        : "No work"}{" "}
                </p>
                <hr/>
                <p>
                    <b>Contacts:</b>
                </p>
                <p>
                    <b>facebook:</b>{" "}
                    {profileUser.profilePageInfo?.contacts.facebook
                        ? profileUser.profilePageInfo.contacts.facebook
                        : "facebook.com"}{" "}
                </p>
                <p>
                    <b>vk:</b>{" "}
                    {profileUser.profilePageInfo?.contacts.vk ? profileUser.profilePageInfo.contacts.vk : "vk.com"}{" "}
                </p>
                <p>
                    <b>twitter:</b>{" "}
                    {profileUser.profilePageInfo?.contacts.twitter
                        ? profileUser.profilePageInfo.contacts.twitter
                        : "twitter.com"}{" "}
                </p>
                <p>
                    <b>instagram:</b>{" "}
                    {profileUser.profilePageInfo?.contacts.instagram
                        ? profileUser.profilePageInfo.contacts.instagram
                        : "instagram.com"}{" "}
                </p>
                <p>
                    <b>github:</b>{" "}
                    {profileUser.profilePageInfo?.contacts.github
                        ? profileUser.profilePageInfo.contacts.github
                        : "github.com"}{" "}
                </p>
            </div>

        </div>
    );
}


export default ProfileInfo;

//TYPES
type PrePostContentType = {
    profileUser: ProfilePageDataType
    status:string
    updateStatus:(status:string)=>RootThunkType
    paramUserId:number
}