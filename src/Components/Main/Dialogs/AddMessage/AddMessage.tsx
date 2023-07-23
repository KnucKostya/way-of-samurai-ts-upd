import React, { ReactElement } from 'react'
import styles from './AddMessage.module.css'
import { AddMessageForm } from './AddMessageForm/AddMessageForm'
import { useAppDispatch } from '../../../../Redux/store'
import { addMessageAC } from '../../../../Redux/reducers/dialogReducer'

export const AddMessage = (): ReactElement => {
  const dispatch = useAppDispatch()

  const addNewMessage = (newMessage: string): void => {
    dispatch(addMessageAC(newMessage))
  }

  return (
    <div className={styles.addMessage}>
      <AddMessageForm callback={newMessage => addNewMessage(newMessage)} />
    </div>
  )
}
