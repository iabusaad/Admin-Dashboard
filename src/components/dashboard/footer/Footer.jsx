import React from 'react'
import styles from "@/components/dashboard/footer/footer.module.css"

const Footer = () => {
  return (
      <div className={styles.container}>
          <h1 className={styles.logo}>Footer</h1>
          <div className={styles.text}>
              @ All ight reserved
          </div>
      </div>
  )
}

export default Footer