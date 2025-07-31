import React from 'react'
import UserDetailsHeader from './_components/UserDetailsHeader'
import styles from '@/styles/userdetails.module.scss'
function UserDetailsPage() {
  return (
    <div className={styles.userdetails} >
      <UserDetailsHeader />
    </div>
  )
}

export default UserDetailsPage