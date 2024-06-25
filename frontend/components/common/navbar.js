import React from 'react'
import Link from 'next/link'
import { IoPersonAdd, IoCart } from 'react-icons/io5'

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="" className="logo_photo" />
        </div>
        <ul className="list">
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

        <ul className="icons">
          <li>
            <a href="#">
              <IoPersonAdd className="member" />
            </a>
          </li>
          <li>
            <a href="#">
              <IoCart className="cart" />
            </a>
          </li>
        </ul>
      </header>
    </>
  )
}
