import React, { ReactElement } from 'react'
import styles from './Groups.module.css'
import Group from './Group/Group'
import { ShowMore } from '../../../UIKit/ShowMore'
import { useAppSelector } from '../../../Redux/store'
import { Redirect } from 'react-router-dom'

export const Groups = (): ReactElement => {
  const groupsData = useAppSelector(state => state.groupsData)
  const isAuth = useAppSelector(state => state.auth.isAuth)
  if (isAuth === false) {
    return <Redirect to="/login" />
  }
  const groupElement = groupsData.map(group => (
    <Group
      key={group.id}
      id={group.id}
      name={group.name}
      follow={group.follow}
      type={group.type}
      logo={group.logo}
    />
  ))

  return (
    <div className={styles.groups}>
      <div className={styles.title}>Joined Groups</div>
      {groupElement}
      <ShowMore callback={() => {}} />
    </div>
  )
}
