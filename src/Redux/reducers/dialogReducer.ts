import { v1 } from 'uuid'
import { ADD_MESSAGE } from '../types'

export const initialState: MessagesDataType = {
  messages: [
    { id: v1(), message: 'Hello' },
    { id: v1(), message: 'How are you?' },
  ],
}

export const messagesReducer = (
  state = initialState,
  action: MessagesActionType
): MessagesDataType => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: v1(),
            message: action.newMessage,
          },
        ],
      }
    default:
      return state
  }
}

export const addMessageAC = (newMessage: string) =>
  ({
    type: ADD_MESSAGE,
    newMessage,
  } as const)

// Types
export type MessagesData = {
  id: string
  message: string
}

export type MessagesDataType = {
  messages: Array<MessagesData>
}

export type MessagesActionType = ReturnType<typeof addMessageAC>
