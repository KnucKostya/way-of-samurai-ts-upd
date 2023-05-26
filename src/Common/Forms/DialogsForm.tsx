import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import {RootState} from "../../Redux/store";


const DialogsForm = (props: FormPropsType) => {

    const user = useSelector<RootState,string>(state => state.auth.data.login)

    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data.value)
        console.log(user)
        if(data.value.length) {
                    props.sendMessage(data.value,user)
                }

    }

    return (
        <div>
            <form action="src/Common/Forms/DialogsForm" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder={'enter message'}
                       {...register("value")}>
                </input>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default DialogsForm;


type Inputs = {
    value: string
}

type FormPropsType = {
    sendMessage:(value:string,user:string)=>void
    // value:string
}