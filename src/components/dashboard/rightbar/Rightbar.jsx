import React from 'react'
import Image from 'next/image'
import styles from "@/components/dashboard/rightbar/rightbar.module.css"
import { MdPlayCircleFilled } from 'react-icons/md'

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContsiner}>
          logo
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>Avilable now</span>
          <h3 className={styles.title}>how to use the new version of admin dashbpard.</h3>
          <span className={styles.subtitle}>Lorem ipsum dolor sit amet.</span>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cum, natus consequatur recusandae a sit corporis obcaecati, ab officia, quisquam maxime assumenda quis deserunt alias deleniti esse labore voluptas magni.</p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContsiner}>
          logo
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>Avilable now</span>
          <h3 className={styles.title}>how to use the new version of admin dashbpard</h3>
          <span className={styles.subtitle}>Lorem ipsum dolor sit amet.</span>
          <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cum, natus consequatur recusandae a sit corporis obcaecati, ab officia, quisquam maxime assumenda quis deserunt alias deleniti esse labore voluptas magni.</p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            watch
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar