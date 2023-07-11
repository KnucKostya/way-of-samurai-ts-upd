import React, {useEffect} from 'react';
import s from './postForm.module.css'
import {SubmitHandler, useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera, faImage, faMusic} from "@fortawesome/free-solid-svg-icons";
import {toast} from "react-toastify";


const schema = yup.object({
	newPost: yup.string().required()
		.min(2, "Too Short!")
		.max(100, "Too Long!"),
});


export const AddNewPostForm = (props: AddNewPostFormPropsType) => {

	const {register, handleSubmit, watch, formState: {errors}} = useForm<TotalType>({
		resolver: yupResolver(schema)
	});

	const onSubmit: SubmitHandler<TotalType> = data => {
		if (data.newPost.length) {
			props.addPost(data.newPost)
		}
	}

	useEffect(() => {
		if(errors.newPost?.message) {
			toast.error('required to field text area from 2-100 symbols')
		}

	},[errors])

	return (

		<form className={s.item} onSubmit={handleSubmit(onSubmit)}>

			<textarea {...register("newPost")} placeholder="write new post"/>

			<a href="#"><FontAwesomeIcon className={s.icon} icon={faMusic} size="lg"/></a>
			<a href="#"><FontAwesomeIcon className={s.icon} icon={faImage} size="lg"/></a>
			<a href="#"><FontAwesomeIcon className={s.icon} icon={faCamera} size="lg"/></a>

			<div className={s.submit}><input type="submit" name={'Send'}/></div>
		</form>
	)
}

//TYPES
type TotalType = Inputs & FormData

type Inputs = {
	newPost: string,
};

type AddNewPostFormPropsType = {
	addPost: (newPostText: string) => void
}

type FormData = yup.InferType<typeof schema>;
