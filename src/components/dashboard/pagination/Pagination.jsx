import React from "react";
import styles from "@/components/dashboard/pagination/pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled>
        previous
      </button>
      <button className={styles.button}>Next</button>
    </div>
  );
};

export default Pagination;