import React from 'react'
import Link from 'next/link'
import { IoPersonAdd, IoCart } from 'react-icons/io5'
import styles from './layout.module.css'

export default function Navbar() {
  return (
    <>
      <header className={`${styles.navbarPC}`}>
        <div className={`${styles.logo}`}>
          <img src="/logo.png" alt="" className={`${styles.logoPhoto}`} />
        </div>
        <ul className={`${styles.list}`}>
          <li>
            <Link href="./gyms">找場館</Link>
          </li>
          <li>
            <Link href="./products">找商城</Link>
          </li>
          <li>
            <Link href="./lessons">找課程</Link>
          </li>
          <li>
            <Link href="./coaches">找教練</Link>
          </li>
          <li>
            <Link href="./articles">找知識</Link>
          </li>
        </ul>

        <ul className={`${styles.icons}`}>
          <li>
            <a href="#">
              <IoPersonAdd className={`${styles.member}`} />
            </a>
          </li>
          <li>
            <a href="#">
              <IoCart className={`${styles.cart}`} />
            </a>
          </li>
        </ul>
      </header>
    </>
  )
}
