import * as yup from 'yup'
import { useTypedDispatch } from '../../../Redux/store'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginThunkCreator } from '../../../Redux/reducers/authReducer'
import s from './LoginForm.module.css'
import React, { useState } from 'react'

const schema = yup
  .object({
    login: yup.string().email().required(),
    password: yup.string().required(),
    rememberMe: yup.boolean(),
  })
  .required()

export const LoginForm = (props: { error: string }) => {
  const [inputType, setInputType] = useState('password')

  const dispatch = useTypedDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      password: '',
    },
  })
  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(LoginThunkCreator(data.login, data.password, data.rememberMe!))
  }

  const setInputTypeHandler = () => {
    setInputType(inputType === 'password' ? 'text' : 'password')
  }

  return (
    <form
      className={s.loginForm}
      action="Common/Login/LoginPage"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className={s.title}>LOGIN</h3>
      <span>
        <h5 className={s.greeting}>
          Welcome to my social network!
          <br /> Here test account if you haven't bought api account
        </h5>
        <h5 className={s.greeting}>
          <div>Login: free@samuraijs.com </div>
          <div>Password: free </div>
        </h5>
        <h3 className={s.warning}>Warning!</h3>
        <h5 className={s.warning}>
          If you are trying to login with phone - you need to accept cookies{' '}
          <br /> in your browser in private policy menu and <br /> turn off
          "Prevent Cross-Site-Tracking", or login from PC or Laptop
        </h5>
      </span>

      <div>
        <input
          className={s.formInput}
          placeholder={'login'}
          {...register('login', { required: true })}
        />
        <p className={s.error}>{errors.login?.message}</p>
      </div>
      <div>
        <input
          className={s.formInput}
          id="password"
          type={inputType}
          placeholder={'password'}
          {...register('password', { required: true })}
          onClick={async () => {
            await trigger('password', { shouldFocus: true })
          }}
        />
        <button className={s.showPassword} onClick={setInputTypeHandler}>
          Show password
        </button>
        <p className={s.error}>
          {props.error && props.error !== 'You are not authorized'
            ? props.error
            : ''}
        </p>
      </div>
      <div>
        <input
          className={s.formCheckbox}
          type="checkbox"
          {...register('checkbox')}
        />
        <span>Remember Me</span>
      </div>
      <div>
        <button className={s.formBtn} type="submit">
          Login
        </button>
      </div>
    </form>
  )
}

type Inputs = FormData & {
  login: string
  password: string
  checkbox: boolean
}
type FormData = yup.InferType<typeof schema>
