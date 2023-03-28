import React, {FC} from 'react';
import Profile from "./Profile";
import {GetStatusThunk, GetUserProfileThunk, setUserProfile, UpdateUserStatusThunk} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {WholeStateType} from "../../Redux/state";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import withAuthRedirect from "../hoc/AuthRedirect";


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
        let userID = +this.props.match.params.userID
        this.props.GetUserProfileThunk(userID)
        this.props.GetStatusThunk(userID)
    }

    render() {
        return <div>
            <Profile profileUser={this.props.profilePage} status={this.props.status} updateStatus={this.props.UpdateUserStatusThunk}/>
        </div>
    }
}

let mapStateToProps = (state: WholeStateType) => {
    return {
        profilePage: state.profilePage,
        status:state.profilePage.status,
    }
}
let mapDispatchToProps = {setUserProfile,GetUserProfileThunk,GetStatusThunk,UpdateUserStatusThunk}

export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileClassComponent)