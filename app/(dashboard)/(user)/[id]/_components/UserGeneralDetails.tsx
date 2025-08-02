import React from 'react'
import styles from '@/styles/userdetails.module.scss'
import { User } from '@/constants/types'

function UserGeneralDetails({ user }: { user:   User }) {
  const userDetailSections = [
    {
      section: "Personal Information",
      data: [
        { label: "FULL NAME", value: `${user?.profile?.firstName} ${user?.profile?.lastName}` },
        { label: "PHONE NUMBER", value: user?.phoneNumber },
        { label: "EMAIL ADDRESS", value: user?.email },
        { label: "BVN", value: user?.profile?.bvn },
        { label: "GENDER", value: user?.profile?.gender },
        { label: "ADDRESS", value: user?.profile?.address },
      ],
    },
    {
      section: "Education and Employment",
      data: user.education ? [
        { label: "LEVEL OF EDUCATION", value: user.education.level || "N/A" },
        { label: "EMPLOYMENT STATUS", value: user.education.employmentStatus || "N/A" },
        { label: "SECTOR OF EMPLOYMENT", value: user.education.sector || "N/A" },
        { label: "DURATION OF EMPLOYMENT", value: user.education.duration || "N/A" },
        { label: "OFFICE EMAIL", value: user.education.officeEmail || "N/A" },
        { label: "MONTHLY INCOME", value: user.education.monthlyIncome || "N/A" },
        { label: "LOAN REPAYMENT", value: user.education.loanRepayment || "N/A" },
      ] : [],
    },
    {
      section: "Socials",
      data: user.socials ? [
        { label: "TWITTER", value: user.socials.twitter || "N/A" },
        { label: "FACEBOOK", value: user.socials.facebook || "N/A" },
        { label: "INSTAGRAM", value: user.socials.instagram || "N/A" },
      ] : [],
    },
    {
      section: "Guarantor",
      data: user.guarantor ? [
        { label: "FULL NAME", value: user.guarantor.fullName || "N/A" },
        { label: "PHONE NUMBER", value: user.guarantor.phoneNumber || "N/A" },
        { label: "ADDRESS", value: user.guarantor.address || "N/A" },
      ] : [],
    },
  ];

  return (
    <div className={styles.userdetailsGeneralDetails}>
      {userDetailSections.map((section, index) => (
        <div key={index}>
          <h2>{section.section}</h2>
          <div className={styles.userdetailsGeneralDetailsContainer}>
            {section.data.map((item, index) => (
              <div key={index}>
                <p>{item.label}</p>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserGeneralDetails
