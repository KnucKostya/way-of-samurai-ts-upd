import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../Redux/profileReducer";
import {connect} from "react-redux";
import {WholeStateType} from "../../Redux/state";
import {RouteComponentProps, withRouter} from "react-router-dom";


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
    userID:string
}

export type CommonType = RouteComponentProps<ParamsType> & combineType

// class ProfileClassComponent extends React.Component<combineType> {
//
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
//             .then(response =>{
//                 this.props.setUserProfile(response.data)
//             })
//     }
//
//     render() {
//         return <div>
//             <Profile profileUser={this.props.profilePage} />
//         </div>
//     }
// }
//
// let mapStateToProps = (state: WholeStateType) => {
//     return {
//         profilePage: state.profilePage
//     }
// }
//
// let mapDispatchToProps = {setUserProfile}
//
// export type mapStateToPropsType = ReturnType<typeof mapStateToProps>
// export type mapDispatchToPropsType = typeof mapDispatchToProps
// export type combineType = mapStateToPropsType & mapDispatchToPropsType
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(WthRouterLessonFunctionWrapper(ProfileClassComponent));


class ProfileClassComponent extends React.Component<CommonType> {

    componentDidMount() {
        let userID = this.props.match.params.userID
        console.log(this.props)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(response =>{
                console.log(response)
                this.props.setUserProfile(response.data)

            })
    }

    render() {
        return <div>
            <Profile profileUser={this.props.profilePage} />
        </div>
    }
}

let mapStateToProps = (state: WholeStateType) => {
        return {
        profilePage: state.profilePage

    }
}
let mapDispatchToProps = {setUserProfile}

let ProfileClassComponentWithRoute = withRouter(ProfileClassComponent)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileClassComponentWithRoute);