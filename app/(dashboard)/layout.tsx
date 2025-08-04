import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import styles from '@/styles/dashboardLayout.module.scss';
function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.dashboardLayout}>
      <Navbar />
      <div className={styles.dashboardBody}>
        <div>
          <Sidebar />
        </div>
        <div className={styles.dashboardInner}>{children}</div>
      </div>
    </div>
  );

}
export default layout;