import { UserprofileimgIcon } from '@/assets/svgs'
import React from 'react'
import styles from '@/styles/userdetails.module.scss'
import { User } from '@/constants/types'
import { getUserFullName } from '@/helper'

function UserDetailsTopBar({ user }: { user: User }) {
  return (
    <div className={styles.userdetailsTopBar}>
      <div className={styles.userDetailsTopBarContainer}>
        <div className={styles.userMainInfo}>
          <div className={styles.userdetailsIcon}>
            {
              user.profile.avatar ? (
                <img src={user.profile.avatar} alt="User Avatar" />
              ) : (
                <UserprofileimgIcon width={28} height={28} />
              )
            }
            
            
          </div>
          <div className={styles.nameSection}>
            <p className={styles.name}>{getUserFullName(user)}</p>
            <p className={styles.id}>{user.id}</p>
          </div>
        </div>

        <div className={styles.userTier}>
          <p>User’s Tier</p>
          <div className={styles.stars}>
            {/* {Array.from({ length: user.profile.}, (_, index) => (
              <span key={index}>⭐</span>
            ))} */}
            <span>⭐</span>
            <span>⭐</span>
            <span>☆</span>
          </div>
        </div>

        <div className={styles.accountInfo}>
          <p className={styles.balance}>{user?.account.balance}</p>
          <p className={styles.accountNumber}>{user.account.accountNumber} / {user.account.bankName}</p>
        </div>
      </div>

      <div className={styles.navTabs}>
        <span className={styles.active}>General Details</span>
        <span>Documents</span>
        <span>Bank Details</span>
        <span>Loans</span>
        <span>Savings</span>
        <span>App and System</span>
      </div>
    </div>
  );
}

export default UserDetailsTopBar
