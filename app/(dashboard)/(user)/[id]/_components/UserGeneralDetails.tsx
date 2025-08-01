import React from 'react'
import styles from '@/styles/userdetails.module.scss'
import { userDetails } from '@/constants'
function UserGeneralDetails() {
  return (
    <div
      className={styles.userdetailsGeneralDetails}
    >
      {
        userDetails.map((section, index) => (
          <div key={index}>
            <h2>{section.section}</h2>
            <div className={styles.userdetailsGeneralDetailsContainer}>
              {
                section.data.map((item, index) => (
                  <div key={index}>
                    <p>{item.label}</p>
                    <p>{item.value}</p>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
      
    </div>
  )
}

export default UserGeneralDetails