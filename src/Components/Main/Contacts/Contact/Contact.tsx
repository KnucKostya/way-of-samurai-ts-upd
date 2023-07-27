import React, { ReactElement } from 'react'
import styles from './Contact.module.css'
import { NavLink } from 'react-router-dom'

export const Contact: React.FC<ContactPropsType> = ({ id, email, name, photos }): ReactElement => {
  return (
    <div className={styles.contact}>
      <div className={styles.avatar}>
        <img src={photos} alt={photos} />
      </div>
      <div className={styles.contactInfo}>
        <div className={styles.name}>
          <NavLink to={'/messages/' + id}>{name}</NavLink>
        </div>
        <div className={styles.email}>{email}</div>
      </div>
    </div>
  )
}

// TYPES
type ContactPropsType = {
  id: string
  name: string
  email?: string
  photos?: string
}
