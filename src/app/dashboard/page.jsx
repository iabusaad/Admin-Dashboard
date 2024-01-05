import CardOne from "@/components/dashboard/card/CardOne";
import Card from "@/components/dashboard/card/CardOne";
import CardThree from "@/components/dashboard/card/CardThree";
import CardTwo from "@/components/dashboard/card/CardTwo";
import styles from "@/components/dashboard/dashboard.module.css";
import Transaction from "@/components/dashboard/transaction/Transaction";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <h1>
          My Space / <span className="text-yellow-600">Attendance</span>
        </h1>
        <div class="border border-sky-500">
          <div className={styles.cards}>
            <CardOne />
            <CardTwo />
            <CardThree />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold mb-3 border-white">
            Log & Request
          </h1>
          <div className="flex">
            <h1 className="text-xl font-semibold p-2 bg-yellow-500 rounded-md text-black">
              Attendance Log
            </h1>
            <h1 className="text-xl font-semibold p-2 bg-black rounded-md text-white">
              Attendance Request
            </h1>
          </div>
        </div>

        <Transaction />
      </div>
    </div>
  );
};

export default Dashboard;
