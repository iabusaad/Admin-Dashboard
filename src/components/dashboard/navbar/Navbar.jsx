
"use client"
import React from 'react'
import { MdSearch,MdPublic,MdNotifications,MdOutlineChat } from "react-icons/md";

import styles from "@/components/dashboard/navbar/navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={30} />
          <MdNotifications size={30} />
          <MdPublic size={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar