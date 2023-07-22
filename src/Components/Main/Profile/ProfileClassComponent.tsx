import React, {FC} from 'react';
import Profile from "./Profile";
import {
    GetStatusThunk,
    GetUserProfileThunk,
    setUserProfile,
    UpdateUserStatusThunk
} from "../../../Redux/reducers/profileReducer";
import {connect} from "react-redux";
import {WholeStateType} from "../../../Redux/state";
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
        let userID = +this.props.match.params.userID
        if(!userID){
            if(this.props.userId){
                userID = this.props.userId
            }
        }
        // this.props.GetUserProfileThunk(userID)
        // this.props.GetStatusThunk(userID)
    }

    render() {
        return <div>
            <Profile profileUser={this.props.profilePage}
                     status={this.props.status}
                     updateStatus={this.props.UpdateUserStatusThunk}
                     paramUserId={+this?.props?.match.params.userID}
            />
        </div>
    }
}

let mapStateToProps = (state: WholeStateType) => {
    return {
        profilePage: state.profilePage,
        status:state.profilePage.status,
        userId:state.auth.data.id,
    }
}
let mapDispatchToProps = {setUserProfile,GetUserProfileThunk,GetStatusThunk,UpdateUserStatusThunk}

export default compose<FC>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    // withAuthRedirect
)(ProfileClassComponent)