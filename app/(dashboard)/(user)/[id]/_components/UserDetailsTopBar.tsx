import { UserprofileimgIcon } from '@/assets/svgs'
import React from 'react'
import styles from '@/styles/userdetails.module.scss'
function UserDetailsTopBar() {
  return (
    <div className={styles.userdetailsTopBar}>
      <div className={styles.userDetailsTopBarContainer}>
        <div className={styles.userMainInfo}>
          <div className={styles.userdetailsIcon}>
            <UserprofileimgIcon width={28} height={28} />
          </div>
          <div className={styles.nameSection}>
            <p className={styles.name}>Grace Effiom</p>
            <p className={styles.id}>LSQFf587g90</p>
          </div>
        </div>

        <div className={styles.userTier}>
          <p>User’s Tier</p>
          <div className={styles.stars}>
            <span>⭐</span>
            <span>⭐</span>
            <span>☆</span>
          </div>
        </div>

        <div className={styles.accountInfo}>
          <p className={styles.balance}>₦200,000.00</p>
          <p className={styles.accountNumber}>9912345678 / Providus Bank</p>
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