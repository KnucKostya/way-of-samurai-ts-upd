import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {LoginisationThunk, SetUserAuth} from "../../Redux/authReducer";
import {WholeStateType} from "../../Redux/state";
import {compose} from "redux";


type mstpType = ReturnType<typeof mstp>
type mdtpType = typeof mdtp
export type commonType = mstpType & mdtpType

class HeaderContainer extends React.Component<commonType> {

    componentDidMount() {
        this.props.LoginisationThunk()
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
const mdtp = {SetUserAuth,LoginisationThunk}

export default compose<React.FC>(connect(mstp,mdtp))(HeaderContainer);
