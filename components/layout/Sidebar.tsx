'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from '@/styles/sidebar.module.scss';
import { BackIcon, Breifcase, DropdownIcon, HomeIcon, MenuIcon } from '@/assets/svgs';
import { usePathname } from 'next/navigation';
import { sidebarItems } from '@/constants';
function Sidebar() {
  const  pathname = usePathname();

  //optional set width of sidebar to 0 if a button is cliked
  
  return (
    <aside className={styles.sidebar} >
      
      <div className={styles.top}>
        <button className={styles.switchOrg}>
          <Breifcase width={16} height={16} />
          <span>Switch Organization</span>
          <DropdownIcon width={12} height={12} />
        </button>

        <Link
          href="/"
          className={`${styles.navItem} ${
            pathname === "/" ? styles.active : ""
          }`}
        >
          <HomeIcon width={16} height={16} />
          <span>Dashboard</span>
        </Link>
      </div>
      {
        sidebarItems.map((group,index) => (
          <div className={styles.navGroup} key={index}>
            <p className={styles.sectionTitle}>{group.groupLabel}</p>
            {
              group.items.map((item,index) => (
                <Link
                  href={item.href}
                  key={index}
                  className={`${styles.navItem} ${
                    pathname === item.href ? styles.active : ""
                  }`}
                >
                  <item.icon width={16} height={16} />
                  <span>{item.label}</span>
                </Link>
              ))
            }
          </div>
        ) )
      }

    </aside>
  );
}

export default Sidebar