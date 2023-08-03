import { CurrentNewsResponseType, newsApi, NewsResponseType } from '../../api/api'
import { Dispatch } from 'redux'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'

const initialState: NewsResponseType = {
  status: '',
  sources: [] as CurrentNewsResponseType[],
  isFetching: true,
}

export const newsReducer = (
  state: NewsResponseType = initialState,
  action: CommonType
): NewsResponseType => {
  switch (action.type) {
    case 'GET-NEWS': {
      return { ...state, sources: [...state.sources, ...action.data] }
    }
    case 'FETCHING': {
      return { ...state, isFetching: action.value }
    }
    default:
      return state
  }
}

export const getNewsData = (data: CurrentNewsResponseType[]) => {
  return { type: 'GET-NEWS', data } as const
}
export const changeFetching = (value: boolean) => {
  return { type: 'FETCHING', value } as const
}
type CommonType = getNewsDataType | changeFetchingType
export type getNewsDataType = ReturnType<typeof getNewsData>
export type changeFetchingType = ReturnType<typeof changeFetching>

export const getNewsDataThunk = () => {
  return (dispatch: Dispatch) => {
    newsApi
      .getNews()
      .then(response => {
        dispatch(changeFetching(false))
        dispatch(getNewsData(response.data.sources))
      })
      .catch((e: AxiosError) => toast.error(e.message))
  }
}
