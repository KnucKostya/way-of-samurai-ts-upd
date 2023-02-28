import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {loginApi} from "../../api/api";



const LoginForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data.login)
        console.log(data.password)
        loginApi.login(data.login,data.password)
            .then(res=>(console.log(res)))
        // console.log(data);
    }


    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input placeholder={'login'} {...register("login", { required: true })}/>
                </div>
                <div>
                    <input placeholder={'password'} {...register("password", { required: true })}/>
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


export const LoginPage = () => {
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm/>
        </div>
    );
};




type Inputs = {
    login: string,
    password: string,
    checkbox: boolean,
}

