import React from "react";

import {

  ActiveUsersIcon,
  DashUsers,
  UserLoansIcon,
  UserSavingsIcon,
} from "@/assets/svgs";
import styles from "@/styles/users.module.scss";
import UsersStatsCard from "./UsersStatsCard";

const CardsSection = () => {
  const cards = [
    {
      icon: <DashUsers />,
      title: "Total Users",
      value: "1,234",
      color: "#e018ff2c",
    },
    {
      icon: <ActiveUsersIcon />,
      title: "Active Users",
      value: "1,234",
      color: "#5618ff2c",
    },

    {
      icon: <UserLoansIcon />,
      title: "Users with Loans",
      value: "980",
      color: "#f55f442c",
    },
    {
      icon: <UserSavingsIcon />,
      title: "Users with Savings",
      value: "770",
      color: "#ff33662c",
    },
  ];

  return (
    <div className={styles.cardsGrid}>
      {cards.map((card, index) => (
        <UsersStatsCard key={index} {...card} />
      ))}
    </div>
  );
};

export default CardsSection;
