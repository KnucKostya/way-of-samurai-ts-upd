import { Postdata, ProfilePageDataType } from '../state'
import { RootThunkType } from '../store'
import api, { profileApi } from '../../api/api'
import { responseDataType } from '../../Components/Main/Profile/ProfileClassComponent'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'

const initialState: ProfilePageDataType = {
  postData: [
    {
      postText: 'Hello',
      likesCount: 10,
      dislikesCount: 0,
      date: '22.02.2022',
      isLike: false,
      isDislike: false,
    },
    {
      postText: 'Congratulations with join to my Social Network',
      likesCount: 31,
      dislikesCount: 3,
      date: '21.03.2023',
      isLike: false,
      isDislike: false,
    },
    {
      postText: 'Here u can leave your post with your thoughts',
      likesCount: 21,
      dislikesCount: 0,
      date: '03.01.2023',
      isLike: false,
      isDislike: false,
    },
  ] as Postdata[],
  profilePageInfo: {} as responseDataType,
  status: '',
}

export const profileReducer = (
  state: ProfilePageDataType = initialState,
  action: CombinerProfileActionTypes
): ProfilePageDataType => {
  switch (action.type) {
    case 'ADD-POST': {
      let newObj: Postdata = {
        postText: action.newPostMessage,
        likesCount: 0,
        dislikesCount: 0,
        date: action.date,
        isLike: false,
        isDislike: false,
      }
      return { ...state, postData: [newObj, ...state.postData] }
    }
    case 'DELETE-POST': {
      return {
        ...state,
        postData: state.postData.filter(
          post => post.postText !== action.postText
        ),
      }
    }

    case 'SET-DATA': {
      return { ...state, profilePageInfo: action.data }
    }
    case 'SET-STATUS': {
      return { ...state, status: action.status }
    }
    case 'SET-PHOTO': {
      return {
        ...state,
        profilePageInfo: {
          ...state.profilePageInfo,
          photos: action.photos,
        },
      }
    }
    case 'LOG-OUT-PROFILE': {
      return {
        ...state,
        profilePageInfo: {} as responseDataType,
        status: 'login to see profile data',
      }
    }
    case 'SET-LIKE': {
      if (action.operation === 'like') {
        return {
          ...state,
          postData: state.postData.map(post =>
            post.postText === action.postText
              ? {
                  ...post,
                  likesCount: post.likesCount + 1,
                  dislikesCount: post.isDislike
                    ? post.dislikesCount - 1
                    : post.dislikesCount,
                  isLike: true,
                  isDislike: false,
                }
              : post
          ),
        }
      } else {
        return {
          ...state,
          postData: state.postData.map(post =>
            post.postText === action.postText
              ? {
                  ...post,
                  likesCount: post.isLike
                    ? post.likesCount - 1
                    : post.likesCount,
                  dislikesCount: post.dislikesCount + 1,
                  isLike: false,
                  isDislike: true,
                }
              : post
          ),
        }
      }
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
  | LogoutProfileType
  | SetLikeType
  | DeletePostType

type AddPostACType = ReturnType<typeof AddPostAC>
type DeletePostType = ReturnType<typeof DeletePostAC>

export const AddPostAC = (newPostMessage: string, date: string) => {
  return {
    type: 'ADD-POST',
    newPostMessage,
    date,
  } as const
}
export const DeletePostAC = (postText: string) => {
  return {
    type: 'DELETE-POST',
    postText,
  } as const
}

export const setUserProfile = (data: responseDataType) => {
  return { type: 'SET-DATA', data } as const
}

export const SetStatus = (status: string) => {
  return { type: 'SET-STATUS', status } as const
}

export const setPhoto = (photos: any) => {
  return { type: 'SET-PHOTO', photos } as const
}
export const logoutProfile = () => {
  return { type: 'LOG-OUT-PROFILE' } as const
}
export const SetLikeAC = (postText: string, operation: string) => {
  return { type: 'SET-LIKE', postText, operation } as const
}
export type SetStatusType = ReturnType<typeof SetStatus>
type setUserProfileType = ReturnType<typeof setUserProfile>
type setPhotoType = ReturnType<typeof setPhoto>
type LogoutProfileType = ReturnType<typeof logoutProfile>
type SetLikeType = ReturnType<typeof SetLikeAC>

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
export const UpdatePhotoProfile = (file: FormData): RootThunkType => {
  return dispatch => {
    profileApi
      .updatePhoto(file)
      .then((response: any) => {
        if (response.data.resultCode === 0) {
          console.log(response)
          dispatch(setPhoto(response.data.data.photos))
        } else {
          toast.error(response.data.messages[0])
        }
      })
      .catch((e: AxiosError) => {
        console.log(e)
        toast.error(e.message)
      })
  }
}
