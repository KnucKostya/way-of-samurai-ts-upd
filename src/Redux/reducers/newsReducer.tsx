import { CurrentNewsResponseType, newsApi, NewsResponseType } from '../../api/api'
import { Dispatch } from 'redux'

const initialState: NewsResponseType = {
  status: '',
  sources: [] as CurrentNewsResponseType[],
}

export const newsReducer = (
  state: NewsResponseType = initialState,
  action: getNewsDataType
): NewsResponseType => {
  switch (action.type) {
    case 'GET-NEWS': {
      return { ...state, sources: [...state.sources, ...action.data] }
      // return {...state}
    }
    default:
      return state
  }
}

export const getNewsData = (data: CurrentNewsResponseType[]) => {
  return { type: 'GET-NEWS', data } as const
}
export type getNewsDataType = ReturnType<typeof getNewsData>

export const getNewsDataThunk = () => {
  return (dispatch: Dispatch) => {
    newsApi.getNews().then(response => {
      console.log(response.data.sources)
      dispatch(getNewsData(response.data.sources))
    })
  }
}
