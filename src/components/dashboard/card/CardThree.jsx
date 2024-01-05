import React from "react";
import styles from "@/components/dashboard/card/card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";

const CardThree = () => {
  return (
    <div className={styles.container}>
      <div className="flex flex-col ">
        <h1 className="text-center mb-4 font-semibold text-xl">Action</h1>
        <div className="flex flex-row gap-3">
          <div className="flex items-center gap-2">
            <div>
              <h1 className="text-xl font-semibold"> 04:04:39 PM</h1>
              <span>Wed 06,December 2023</span>
            </div>
          </div>
          <div className="flex items-center flex-col gap-2">
            <button className="p-2 bg-yellow-500 w-36 text-black rounded-md">
              Leave Request
            </button>
            <button className="p-2 bg-yellow-500 w-36 text-black rounded-md">
              Work From Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
