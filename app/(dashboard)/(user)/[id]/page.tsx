import React from 'react'
import UserDetailsHeader from './_components/UserDetailsHeader'
import styles from '@/styles/userdetails.module.scss'
import UserDetailsOverview from './_components/UserDetailsOverview'
async function UserDetailsPage( { params }: { params: Promise<{ id: string }> }) {
  console.log(params)
  const { id } = await params;
  
  return (
    <div className={styles.userdetails} >
      <UserDetailsHeader />


      <UserDetailsOverview id={id}  />
    </div>
  )
}

export default UserDetailsPage