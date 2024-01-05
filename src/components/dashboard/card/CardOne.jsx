import React from "react";
import styles from "@/components/dashboard/card/card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";

const CardOne = () => {
  return (
    <div className={styles.container}>
      <div className="">
        <h1 className="font-semibold">Attendance status</h1>
        <p className="mt-2 mb-2">last Week ^</p>
        <div className="flex flex-row gap-5">
          <div className="flex items-center gap-2">
            <MdSupervisedUserCircle size={30} />
            <div>
              <h2>Avg hrs/Day</h2>
              <span>(6hrs 48m)</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MdSupervisedUserCircle size={30} />
            <div>
              <h2>On Time Arrival</h2>
              <span>95%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
