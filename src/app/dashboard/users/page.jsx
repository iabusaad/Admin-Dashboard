import React from "react";
import styles from "@/components/dashboard/users/user.module.css";
import Search from "@/components/dashboard/search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/components/dashboard/pagination/Pagination";
import { fetchUser } from "@/app/api/users/route";


const UsersPage = async ({searchParams}) => {
  const users = await fetchUser();
  console.log(users);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="search for a user" />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add new</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          
            <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.jpg"
                    alt=""
                    height={40}
                    width={40}
                    className={styles.userImage}
                  />
                  saad
                </div>
              </td>
              <td>email</td>
              <td>createdAt</td>
              <td>Admin</td>
              <td>Active</td>
              <td className={styles.buttons}>
                <Link href="/dashboard/users/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    view
                  </button>
                </Link>
                <form>
                <input type="hidden" name="id" />
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </form>
              </td>
            </tr>
          
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UsersPage;
