import React from 'react'
import styles from '@/styles/users.module.scss';
import CardsSection from './_components/CardsSection';
import UsersTable from './_components/UsersTable';
import { users } from '@/constants';
function HomePage() {
  return (
    <div className={styles.userpage}>
      <h1>Users</h1>
      <CardsSection />

      <UsersTable data={users} />
      <div id="dropdown-root" />
    </div>
  );
}

export default HomePage