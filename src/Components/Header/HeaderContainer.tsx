import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {initStateType, SetUserAuth} from "../../Redux/authReducer";
import {WholeStateType} from "../../Redux/state";

// export const instanse = axios.create({
//     withCredentials:true,
//     baseURL:'https://social-network.samuraijs.com/api/1.0/'
// })

type mstpType = ReturnType<typeof mstp>
type mdtpType = typeof mdtp
export type commonType = mstpType & mdtpType

class HeaderContainer extends React.Component<commonType> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true})
            .then(response=>{
                if(response.data.resultCode === 0) {
                    let {id,login,email} = response.data.data
                    this.props.SetUserAuth(id,login,email)
                }

        })
    }

    render() {
        return (
            <>
                <Header {...this.props}/>
            </>
        )
    }
}

//почему тип не initStateType
const mstp = (state:WholeStateType) => {
    return {
        login:state.auth.data.login,
        isLogined:state.auth.isLogined
    }
}
const mdtp = {SetUserAuth}

export default connect(mstp,mdtp)(HeaderContainer);
