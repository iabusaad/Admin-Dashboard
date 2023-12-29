import React from 'react'
import styles from "@/components/dashboard/product/product.module.css"
import Link from 'next/link';
import Image from 'next/image';
import Search from '@/components/dashboard/search/Search';
import Pagination from '@/components/dashboard/pagination/Pagination';

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="search for a products..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add new</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>price</td>
            <td>date</td>
            <td>stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.products}>
                <Image
                  src="/noavatar.jpg"
                  alt=""
                  height={40}
                  width={40}
                  className={styles.productsImage}
                />
               Iphone
              </div>
            </td>
            <td>desc</td>
            <td>$999</td>
            <td>13.01.2023</td>
            <td>72</td>
            <td className={styles.buttons}>
              <Link href="/dashboard/products/test">
                <button className={`${styles.button} ${styles.view}`}>
                  view
                </button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>
              delete
            </button>
            </td>
          </tr>
        </tbody>
        
      </table>
      <Pagination/>
    </div>
  )
}

export default ProductsPage;