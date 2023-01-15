import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {setPhoto} from "../../Redux/profileReducer";


class ProfileClassComponent extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response=>{
                debugger
            })
    }

    render(){

        return <div>
            <Profile/>
        </div>
    }


}

export default ProfileClassComponent;