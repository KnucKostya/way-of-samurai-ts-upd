import { authAPI } from 'api/api'
import { InitializedStatusType } from './appReducer'
import { RootThunkType } from '../store'
import { GetStatusThunk, GetUserProfileThunk, logoutProfile } from './profileReducer'
import { toast } from 'react-toastify'

export type initStateType = {
  data: {
    id: number | null
    login: string
    email: string
  }
  messages: string[]
  fieldsErrors: null
  resultCode: number | null
  isAuth: boolean
  error: string
}

const initialState: initStateType = {
  data: {
    id: null,
    login: '',
    email: '',
  },
  messages: [''],
  fieldsErrors: null,
  resultCode: null,
  isAuth: false,
  error: '',
}

const authReducer = (state = initialState, action: CombinerAuthActionsType): initStateType => {
  switch (action.type) {
    case 'USER-AUTH': {
      return {
        ...state,
        data: { ...state.data, ...action.data },
        isAuth: true,
      }
    }
    case 'LOG-OUT': {
      return { ...state, isAuth: false }
    }
    case 'SET-ERROR': {
      return { ...state, error: action.error }
    }
    default:
      return state
  }
}

export default authReducer

export const SetUserAuth = (id: number, login: string, email: string) => {
  return {
    type: 'USER-AUTH',
    data: { id, login, email },
  } as const
}

export const LogoutAC = () => {
  return { type: 'LOG-OUT', id: null, login: '', email: '' } as const
}

export const SetErrorAC = (error: string) => {
  return { type: 'SET-ERROR', error } as const
}

// --------------------thunks------------------------

export const getAuthUserData = (): RootThunkType<Promise<void>> => {
  return async dispatch => {
    let data = await authAPI.me()
    if (data.resultCode === 0) {
      let { id, login, email } = data.data
      dispatch(SetUserAuth(id, login, email))
      dispatch(SetErrorAC(''))
      dispatch(GetUserProfileThunk(data.data.id))
      dispatch(GetStatusThunk(data.data.id))
    } else {
      dispatch(SetErrorAC(data.messages[0]))
    }
  }
}

export const LoginThunkCreator =
  (email: string, password: string, rememberMe: boolean): RootThunkType =>
  async dispatch => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.resultCode === 0) {
      dispatch(getAuthUserData())
    } else {
      console.log(response.messages[0])
      dispatch(SetErrorAC(response.messages[0]))
    }
  }

export const LogOutThunkCreator = (): RootThunkType => async dispatch => {
  await authAPI
    .logout()
    .then(() => {
      dispatch(LogoutAC())
      dispatch(logoutProfile())
      toast.success(`You are logged out successfully.`)
    })
    .catch(() => {
      toast.error('Oops, check your internet connection, or try logg out again.')
    })
}

//types
export type CombinerAuthActionsType =
  | UserAuthType
  | SetErrorType
  | LogoutType
  | InitializedStatusType
export type UserAuthType = ReturnType<typeof SetUserAuth>
export type SetErrorType = ReturnType<typeof SetErrorAC>
export type LogoutType = ReturnType<typeof LogoutAC>
