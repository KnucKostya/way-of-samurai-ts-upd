import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import {Postdata, TsarType} from "../../Redux/state";
import Prepostcontent from "./Prepostcontent/Prepostcontent";
import ContaineerMyPostComponent from "./MyPosts/ContaineerMyPostComponent";



const Profile = () => {

    return <div>
        <Prepostcontent/>
        <ContaineerMyPostComponent/>
    </div>

}

export default Profile;