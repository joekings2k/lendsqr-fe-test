"use client";
import { BackIcon } from '@/assets/svgs'
import { Button } from '@/components/buttons/Buttons';
import { useRouter } from 'next/navigation';
import React from 'react'
import styles from '@/styles/userdetails.module.scss';

function UserDetailsHeader( ) {
  const router = useRouter()
  return (
    <div className={styles.userdetailsHeader}>
      <div className={styles.backButton} onClick={() => router.push("/")}>
        <BackIcon width={26} height={16} /> <p>Back to Users</p>
      </div>

      <div className={styles.userdetailsHeaderBottom}>
        <h1>User Details</h1>
        <div className={styles.userdetailsHeaderBottomButtons}>
          <Button className={styles.blacklistButton}>Blacklist User</Button>
          <Button className={styles.activateButton}>Activate User</Button>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsHeader