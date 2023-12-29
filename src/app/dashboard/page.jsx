import Card from "@/components/dashboard/card/Card";
import Chart from "@/components/dashboard/chart/Chart";
import styles from "@/components/dashboard/dashboard.module.css";
import Rightbar from "@/components/dashboard/rightbar/Rightbar";
import Transaction from "@/components/dashboard/transaction/Transaction";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Chart/>
        <div className={styles.side}>
          <Rightbar/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
