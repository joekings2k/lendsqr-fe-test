import React from 'react'
import UserDetailsHeader from './_components/UserDetailsHeader'
import styles from '@/styles/userdetails.module.scss'
import UserDetailsOverview from './_components/UserDetailsOverview'
function UserDetailsPage() {
  return (
    <div className={styles.userdetails} >
      <UserDetailsHeader />

      <UserDetailsOverview />
    </div>
  )
}

export default UserDetailsPage