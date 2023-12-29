import React from 'react'
import styles from "@/components/dashboard/loginPage/loginPage.module.css"

const LoginPage = () => {
  return (
    <div className={styles.container}>
     
      <form action="form" className={styles.form}>
      <h1 className={styles.login}>Login Here</h1>
        <input type="text" placeholder='Username' />
        <input type="passwprd" placeholder='password' />
        <button>login</button>
      </form>
    </div>
  )
}

export default LoginPage;