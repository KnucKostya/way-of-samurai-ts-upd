import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {RootState} from "../../Redux/store";

type MstpType = {
    isAuth:boolean
}

const mstp = (state: RootState):MstpType => {
   return {isAuth:state.auth.isAuth}
}

export function WithAuthRedirect<T extends object>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MstpType) => {
        let {isAuth, ...rest} = props

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...rest as T}/>
    }

    return connect(mstp)(RedirectComponent)


}

export default WithAuthRedirect;