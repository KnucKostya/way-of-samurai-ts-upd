import React, {useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {RootReducersType, useAppDispatchThunk} from "Redux/store";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {LoginThunkCreator} from "../../Redux/reducers/authReducer";


const schema = yup.object({
    login: yup.string().email().required(),
    password: yup.string().required(),
    rememberMe: yup.boolean()
}).required();

const LoginForm = (props:{error:string}) => {
    const dispatch = useAppDispatchThunk()
    const {register, handleSubmit, formState: {errors}, trigger} = useForm<Inputs>({
        resolver: yupResolver(schema),
        defaultValues: {
            password: ""
        }
    });
    const onSubmit: SubmitHandler<Inputs> = data => {
        dispatch(LoginThunkCreator(data.login, data.password, data.rememberMe!))
    }

    return (
        <div>
            <form action="src/Common/Login/LoginPage" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input placeholder={'login'} {...register("login", {required: true})}/>
                    <p>{errors.login?.message}</p>
                </div>
                <div>
                    <input id='password' type='password'
                           placeholder={'password'} {...register("password", {required: true})} onClick={async () => {
                        const result = await trigger("password", {shouldFocus: true});
                    }}/>
                    <p>{errors ? errors.password?.message : ''}</p>
                    <p>{props.error && props.error!== 'You are not authorized' ? props.error : ''}</p>
                </div>
                <div>
                    <input type="checkbox" {...register("checkbox")}/>
                    <span>Remember Me</span>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}


const LoginPage = ({isAuth,error}:{isAuth:boolean,error:string}) => {
    useEffect(() => {
        // console.log(props.error)
    }, [error])

    if(isAuth){
        return <Redirect to="/profile" />
    }
    if(isAuth){
        return <Redirect to="/profile" />
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm error={error}/>
        </div>
    );
};

let mapStateToProps = (state:RootReducersType)=>({
    isAuth:state.auth.isAuth,
    error:state.auth.error
})

export default connect(mapStateToProps,{})(LoginPage)

type Inputs = FormData & {
    login: string,
    password: string,
    checkbox: boolean,
}
type FormData = yup.InferType<typeof schema>;
export type mapStateToPropsType = ReturnType<typeof mapStateToProps>
// export type mapDispatchToPropsType = typeof mapDispatchToProps
export type combineType = mapStateToPropsType