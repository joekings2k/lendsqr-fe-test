import React from 'react'
import styles from '@/styles/dashboardLayout.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/svgs/logo.svg';
import NavbarSearch from './NavbarSearch';
import { ArrowDownIcon, Logo, NotificationIcon, SearchIcon } from '@/assets/svgs';
import profielpic from "@/public/images/profilepic.png"
import TextFeild from '../inputs/TextFeild';
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoSection}>
        <Logo width={145} height={30} />
      </div>

      
        <NavbarSearch />
      

      {/* Right Section */}
      <div className={styles.profileSection}>
        <a href="#">Docs</a>
        <NotificationIcon width={22} height={24} />
        <div className={styles.user}>
          <Image
            src={profielpic}
            alt="User Avatar"
            width={32}
            height={32}
          />
          <span>Adedeji</span>
          <ArrowDownIcon width={10} height={6} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar




