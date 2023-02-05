import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {initStateType, SetUserAuth} from "../../Redux/authReducer";
import {WholeStateType} from "../../Redux/state";
import api from "../../api/api";


type mstpType = ReturnType<typeof mstp>
type mdtpType = typeof mdtp
export type commonType = mstpType & mdtpType

class HeaderContainer extends React.Component<commonType> {

    componentDidMount() {

        api.authMe()
        .then(data=>{
                if(data.resultCode === 0) {
                    let {id,login,email} = data.data
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
