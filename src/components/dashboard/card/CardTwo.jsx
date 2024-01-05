import React from "react";
import styles from "@/components/dashboard/card/card.module.css";

const CardTwo = () => {
  return (
    <div className={styles.container}>
      <div className="flex flex-col gap-3">
        <h1 className="text-center mb-2 font-semibold text-xl">Timing</h1>
        <span></span>

        <div className="flex flex-col gap-2 justify-center">
          <h2>Today(9:30AM-6:30PM)</h2>
          <span>Duration:9h 0m break:0m</span>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
