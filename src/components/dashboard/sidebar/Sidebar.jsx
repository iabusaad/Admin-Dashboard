import React from "react";
import styles from "@/components/dashboard/sidebar/sidebar.module.css";
import Image from "next/image";
import { MdDashboard, MdSupervisedUserCircle } from "react-icons/md";
import MenuLinks from "./menuLink/MenuLink";
const menuItems = [
  {
    list: [
      {
        title: "Home",
        path: "/",
        icon: <MdDashboard />,
      },
      {
        title: "My Space",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Leave",
        path: "/dashboard/leave",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Attendence",
        path: "/dashboard/attendance",
      },
      {
        title: "Performance",
        path: "/dashboard/performance",
      },
      {
        title: "Expence &Travel",
        path: "/dashboard/travel",
      },
      {
        title: "Help Desk",
        path: "/dashboard/help",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="sticky top-10">
      <div className="flex flex-col items-center justify-center gap-2 mb-8">
        <h1 className="text-3xl font-bold">KDSIP</h1>
        <span>Interior & Architecture</span>
      </div>
      <hr />
      <ul>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLinks key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
