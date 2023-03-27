import React from 'react';
import s from './Prepostcontent.module.css';
import Preloader from "../../../Common/Preloader";
import {ProfilePageDataType} from "../../../Redux/state";
import EditableStatus from "./EditableStatus";
import {RootThunkType} from "../../../Redux/store";

type PrepostcontentType = {
    profileUser: ProfilePageDataType
    status:string
    updateStatus:(status:string)=>RootThunkType
}
const Prepostcontent = (props: PrepostcontentType) => {
const {profileUser} = props;
    if (!profileUser) {
        return <Preloader/>
    }

    console.log(props.status)
    return (
        <div className={s.content}>
            <div>
                <img className={s.img}
                     src='https://image.shutterstock.com/image-vector/surfing-beach-svg-illustration-design-260nw-2181165831.jpg'/>
            </div>
            <div>
                <img src={profileUser.profilePageInfo?.photos.small} alt="small Image"/>
                <img src={profileUser.profilePageInfo?.photos.large} alt="large Image"/>
                <h4>{profileUser.profilePageInfo?.fullName}</h4>
                <p>{profileUser.profilePageInfo?.aboutMe}</p>
            </div>

            <div>
                {profileUser.profilePageInfo?.fullName}
            </div>

            {
                profileUser.profilePageInfo?.lookingForAJob &&
                    <div>
                        {`Шукаю роботу ${profileUser.profilePageInfo.lookingForAJobDescription}`}
                    </div>
            }

            <div>
                {/*'Change Status with class local State'*/}
                <div>
                    <EditableStatus statusValue={props.status ? props.status : 'Default status'} updateStatus={props.updateStatus} />
                    {/*<EditableStatus statusValue={'Some Status'} />*/}
                </div>
            </div>

            <div>
                Contacts: <hr/>
                <p>{profileUser.profilePageInfo?.userId}</p>
                <a href={profileUser.profilePageInfo?.contacts.facebook}>facebook</a>
                <hr/>
                <a href={profileUser.profilePageInfo?.contacts.vk}>vk</a>
                <hr/>
                <a href={profileUser.profilePageInfo?.contacts.github}>github</a>
                <hr/>
            </div>
        </div>
    );
}


export default Prepostcontent;