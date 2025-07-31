import React from 'react'
import TextFeild from '../inputs/TextFeild'
import styles from '@/styles/dashboardLayout.module.scss';
import {  SearchIcon } from '@/assets/svgs';

function NavbarSearch() {
  return (
    <div className={styles.navbarSearchContainer}>
      <TextFeild placeholder="Search for anything" type='text'  />
      <div className={styles.searchIcon}>
        <SearchIcon width={14} height={14} style={{ color: "white" }}  />
      </div>

     
    </div>
  );
}

export default NavbarSearch