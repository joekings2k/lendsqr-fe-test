import React from 'react'
import styles from '@/styles/users.module.scss';
import CardsSection from './_components/CardsSection';

import Tablesection from './_components/Tablesection';
function HomePage() {
  return (
    <div className={styles.userpage}>
      <h1>Users</h1>
      <CardsSection />

      <Tablesection />
      <div id="dropdown-root" />
    </div>
  );
}

export default HomePage