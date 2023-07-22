import React, {useEffect} from 'react';
import {RootReducersType} from "Redux/store";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import s from './LoginPage.module.css'
import {LoginForm} from "./LoginForm/LoginForm";


const LoginPage = ({isAuth,error}:{isAuth:boolean,error:string}) => {
    useEffect(() => {
    }, [error])

    if(isAuth){
        return <Redirect to="/profile" />
    }
    return (
        <div className={s.loginForm}>
            <LoginForm error={error}/>
        </div>
    );
};

let mapStateToProps = (state:RootReducersType)=>({
    isAuth:state.auth.isAuth,
    error:state.auth.error
})

export default connect(mapStateToProps,{})(LoginPage)

export type mapStateToPropsType = ReturnType<typeof mapStateToProps>
// export type mapDispatchToPropsType = typeof mapDispatchToProps
export type combineType = mapStateToPropsType