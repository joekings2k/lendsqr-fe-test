import React from 'react'
import UserDetailsHeader from './_components/UserDetailsHeader'
import styles from '@/styles/userdetails.module.scss'
import UserDetailsOverview from './_components/UserDetailsOverview'
function UserDetailsPage( { params }: { params: { id: string } }) {
  const { id } = params;
  
  return (
    <div className={styles.userdetails} >
      <UserDetailsHeader />


      <UserDetailsOverview id={id}  />
    </div>
  )
}

export default UserDetailsPage