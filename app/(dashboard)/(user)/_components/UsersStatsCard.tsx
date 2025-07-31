import React from "react";
import styles from "@/styles/users.module.scss";
interface UsersStatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  color: string;
}

function UsersStatsCard({ icon, title, value, color }: UsersStatsCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon} style={{ backgroundColor: color }}>
        {icon}
      </div>
      <p className={styles.title}>{title}</p>
      <h3 className={styles.value}>{value}</h3>
    </div>
  );
}

export default UsersStatsCard;
