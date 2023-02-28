import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";


export const AddNewPostForm = (props: AddNewPostFormPropsType) => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        console.log(data)
        if(data.newPost.length){
            props.addPost(data.newPost)
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder={'type a new post'}
                       {...register("newPost")}>
                </input>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}



type Inputs = {
    newPost: string,
};

type AddNewPostFormPropsType = {
    addPost: (newPostText: string) => void
}