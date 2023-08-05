import React, { ReactElement } from 'react'
import { AddMessageForm } from './AddMessageForm/AddMessageForm'
import { useAppDispatch } from '../../../../Redux/store'
import { addMessageAC } from '../../../../Redux/reducers/dialogReducer'

export const AddMessage = (): ReactElement => {
  const dispatch = useAppDispatch()

  const addNewMessage = (newMessage: string): void => {
    dispatch(addMessageAC(newMessage))
  }

  return (
    <div>
      <AddMessageForm callback={newMessage => addNewMessage(newMessage)} />
    </div>
  )
}
