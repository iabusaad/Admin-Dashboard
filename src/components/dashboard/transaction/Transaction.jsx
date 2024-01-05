import React from "react";
import styles from "@/components/dashboard/transaction/transaction.module.css";
import { FaRegClock } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { BsEmojiExpressionless } from "react-icons/bs";
import { GiDefibrilate } from "react-icons/gi";

const Transaction = () => {
  return (
    <div className={styles.container}>
      <div className=" flex items-center justify-between  border border-white px-3">
        <div>
          <h1 className="text-lg font-semibold">December 2023</h1>
        </div>
        <div class="grid grid-cols-7 rounded-lg gap-0">
          <div className="border border-white bg-yellow-500">30 Day</div>
          <div className="border border-white text-center">Nov</div>
          <div className="border border-white text-center">Oct</div>
          <div className="border border-white text-center">Aug</div>
          <div className="border border-white text-center">01</div>
          <div className="border border-white text-center">July</div>
          <div className="border border-white text-center">June</div>
        </div>
        <div className="grid grid-cols-2 ">
          <div className="border border-white bg-yellow-500 text-center">
            <FaRegClock size={30} />
          </div>
          <div className="border border-white text-center">
            <FaRegClock size={30} />
          </div>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr className="border border-white">
            <td>Date</td>
            <td>Attendance Visual</td>
            <td>Effective Hours</td>
            <td>Gross Hours</td>
            <td>Extra Hours</td>
            <td>Arrival Hours</td>
            <td>Log</td>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-white">
            <td>Dec 04,Mon</td>
            <td>
              <span className="p-2 bg-green-500 text-white rounded-md">
                Pending
              </span>
            </td>
            <td className="flex gap-2 items-center">
              <span>
                <FaRegClock />
              </span>
              9h 15m
            </td>
            <td>9h 59m </td>
            <td>0h 59m </td>
            <td className="flex gap-2 items-center">
              <span>
                <TiTick />
              </span>
              On time
            </td>
            <td>
              <FaRegClock />
            </td>
          </tr>
          <tr className="bg-gray-700">
            <td className="flex items-center gap-2">
              Dec 03,Sun
              <button className="bg-yellow-400 w-16 rounded-md">w-off</button>
            </td>
            <td></td>
            <td>Full day weekly-off</td>
            <td></td>
            <td> </td>
            <td></td>
            <td></td>
          </tr>
          <tr className="border border-white rounded-lg">
            <td>Dec 02,Sat</td>
            <td>
              <span className="p-2 bg-green-500 text-white rounded-md">
                Pending
              </span>
            </td>
            <td className="flex gap-2 items-center">
              <span>
                <FaRegClock />
              </span>
              9h 15m
            </td>
            <td>9h 59m </td>
            <td>0h 59m </td>
            <td className="flex gap-2 items-center">
              <span>
                <BsEmojiExpressionless />
              </span>
            </td>
            <td>
              <FaRegClock />
            </td>
          </tr>
          <tr className="border border-white rounded-lg">
            <td>Dec 01,Fri</td>
            <td>
              <span className="p-2 bg-green-500 text-white rounded-md">
                Pending
              </span>
            </td>
            <td className="flex gap-2 items-center">
              <span>
                <FaRegClock />
              </span>
              9h 15m
            </td>
            <td>9h 59m </td>
            <td>0h 59m </td>
            <td className="flex gap-2 items-center">
              <span>
                <GiDefibrilate />
              </span>
              0h 30m late
            </td>
            <td>
              <FaRegClock />
            </td>
          </tr>
          <tr className="bg-amber-900 border border-white rounded-lg">
            <td className="flex items-center gap-2">
              Nov 30,Thur
              <button className="bg-purple-600 text-white w-16 rounded-md">
                w-off
              </button>
            </td>
            <td></td>
            <td className="flex gap-2 items-center">
              <span>
                <FaRegClock />
              </span>
              9h 15m
            </td>
            <td>9h 59m </td>
            <td>0h 59m </td>
            <td className="flex gap-2 items-center">
              <span>
                <TiTick />
              </span>
              On time
            </td>
            <td>
              <FaRegClock />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
