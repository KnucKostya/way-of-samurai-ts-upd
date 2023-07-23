import { getAuthUserData } from './authReducer'
import { RootThunkType } from '../store'

const initialState: InitialStateType = {
  isInitialized: false,
}

export const appReducer = (
  state = initialState,
  action: CombinerAuthActionsType
): InitialStateType => {
  switch (action.type) {
    case 'INITIALIZED-SUCCESS': {
      return {
        ...state,
        isInitialized: action.isInitialized,
      }
    }
    default:
      return state
  }
}

export const initializedSuccess = (isInitialized: boolean) => {
  return {
    type: 'INITIALIZED-SUCCESS',
    isInitialized,
  } as const
}

// --------------------thunks------------------------

export const InitializeApp = (): RootThunkType => {
  return dispatch => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
      dispatch(initializedSuccess(true))
    })
  }
}

//types
export type InitialStateType = {
  isInitialized: boolean
}

export type CombinerAuthActionsType = InitializedStatusType
export type InitializedStatusType = ReturnType<typeof initializedSuccess>
