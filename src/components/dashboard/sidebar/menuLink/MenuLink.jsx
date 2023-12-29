"use client"
import Link from 'next/link';
import React from 'react'
import styles from "@/components/dashboard/sidebar/menuLink/menuLink.module.css"
import { usePathname } from 'next/navigation';

const MenuLinks = ({ item }) => {
  const pathname = usePathname();
  console.log(pathname)
  return (
      <Link href={item.path} className={`${styles.container} ${pathname===item.path && styles.active}`}>
          {item.icon}
          {item.title}
      </Link>
  )
}

export default MenuLinks;