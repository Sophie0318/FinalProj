import React from 'react'
import Link from 'next/link'
import { IoPersonAdd, IoCart } from 'react-icons/io5'

export default function Navbar() {
  return (
    <>
      <header class="navbar">
        <div class="logo">
          <img src="/logo.png" alt="" className="logo_photo" />
        </div>
        <ul class="list">
          <li>找場館</li>
          <li>找商城</li>
          <li>找課程</li>
          <li>找教練</li>
          <li>找商城</li>
          <li>找知識</li>
        </ul>

        <ul class="icons">
          <li>
            <Link href="/">
              <IoPersonAdd className="member" />
              {/* <ion-icon name="person-add" class="member"></ion-icon> */}
            </Link>
          </li>
          <li>
            <Link href="/">
              <IoCart className="cart" />
            </Link>
          </li>
        </ul>
      </header>
    </>
  )
}
