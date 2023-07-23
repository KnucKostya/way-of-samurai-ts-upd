import { Postdata, ProfilePageDataType } from '../state'
import { RootThunkType } from '../store'
import api, { profileApi } from '../../api/api'
import { responseDataType } from '../../Components/Main/Profile/ProfileClassComponent'

const initialState: ProfilePageDataType = {
  postData: [
    { postText: 'Hello', likesCount: 41, date: '22.02.2022' },
    {
      postText: 'Congratulations with join to my Social Network',
      likesCount: 11,
      date: '21.03.2023',
    },
    {
      postText: 'Here u can leave your post with your thoughts',
      likesCount: 12,
      date: '03.01.2023',
    },
  ],
  profilePageInfo: null, //сюда сет из аксиос запроса,
  status: '',
}

export const profileReducer = (
  state: ProfilePageDataType = initialState,
  action: CombinerProfileActionTypes
): ProfilePageDataType => {
  switch (action.type) {
    case 'ADD-POST': {
      let newObj: Postdata = { postText: action.newPostMessage, likesCount: 0, date: action.date }
      return { ...state, postData: [newObj, ...state.postData] }
    }

    case 'SET-DATA': {
      return { ...state, profilePageInfo: action.data }
    }
    case 'SET-STATUS': {
      return { ...state, status: action.status }
    }
    case 'SET-PHOTO': {
      return { ...state }
    }

    default:
      return state
  }
}

export type CombinerProfileActionTypes =
  | AddPostACType
  | setUserProfileType
  | SetStatusType
  | setPhotoType

type AddPostACType = ReturnType<typeof AddPostAC>

export const AddPostAC = (newPostMessage: string, date: string) => {
  return {
    type: 'ADD-POST',
    newPostMessage,
    date,
  } as const
}

export const setUserProfile = (data: responseDataType) => {
  return { type: 'SET-DATA', data } as const
}

export const SetStatus = (status: string) => {
  return { type: 'SET-STATUS', status } as const
}

export const setPhoto = (data: any) => {
  return { type: 'SET-PHOTO', data } as const
}
export type SetStatusType = ReturnType<typeof SetStatus>
type setUserProfileType = ReturnType<typeof setUserProfile>
type setPhotoType = ReturnType<typeof setPhoto>

export const GetUserProfileThunk = (userID: number): RootThunkType => {
  return (dispatch: any) => {
    api.getUsersProfile(userID).then((response: any) => {
      dispatch(setUserProfile(response))
    })
  }
}

export const GetStatusThunk = (userID: number): RootThunkType => {
  return (dispatch: any) => {
    profileApi.getStatus(userID).then((response: any) => {
      dispatch(SetStatus(response.data))
    })
  }
}

export const UpdateUserStatusThunk = (status: string): RootThunkType => {
  return (dispatch: any) => {
    profileApi.updateStatus(status).then((response: any) => {
      if (response.data.resultCode === 0) {
        dispatch(SetStatus(status))
      }
    })
  }
}
export const updatePhotoProfile = (file: File): RootThunkType => {
  return dispatch => {
    profileApi.updatePhoto(file).then((response: any) => {
      console.log(response)
      if (response.data.resultCode === 0) {
        // dispatch(setPhoto(response.data.small))
      }
    })
  }
}
