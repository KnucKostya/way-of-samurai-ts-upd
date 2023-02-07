import React from 'react';
import Prepostcontent from "./Prepostcontent/Prepostcontent";
import ContaineerMyPostComponent from "./MyPosts/ContaineerMyPostComponent";
import {ProfilePageDataType} from "../../Redux/state";


type ProfilePropsType = {
    profileUser: ProfilePageDataType
}

const Profile = (props:ProfilePropsType) => {

    return <div>
        <Prepostcontent profileUser={props.profileUser}/>
        <ContaineerMyPostComponent/>
    </div>

}

export default Profile;