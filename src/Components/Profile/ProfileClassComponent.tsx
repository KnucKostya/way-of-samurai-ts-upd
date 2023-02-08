import React from 'react';
import Profile from "./Profile";
import {GetUserProfileThunk, setUserProfile} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {WholeStateType} from "../../Redux/state";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";


export type responseDataType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string,
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type mapStateToPropsType = ReturnType<typeof mapStateToProps>
export type mapDispatchToPropsType = typeof mapDispatchToProps
export type combineType = mapStateToPropsType & mapDispatchToPropsType

export type ParamsType = {
    userID: string
}

export type CommonType = RouteComponentProps<ParamsType> & combineType


class ProfileClassComponent extends React.Component<CommonType> {

    componentDidMount() {
        let userID = this.props.match.params.userID
        this.props.GetUserProfileThunk(userID)
    }

    render() {
        return <div>
            <Profile profileUser={this.props.profilePage}/>
        </div>
    }
}

let mapStateToProps = (state: WholeStateType) => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = {setUserProfile,GetUserProfileThunk}

let ProfileClassComponentWithRoute = withRouter(ProfileClassComponent)

export default compose<React.FC>(connect(mapStateToProps, mapDispatchToProps))(ProfileClassComponentWithRoute);