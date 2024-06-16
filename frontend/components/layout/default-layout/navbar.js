import React from 'react'
import Link from 'next/link'
import { IoPersonAdd, IoCart } from 'react-icons/io5'

export default function Navbar() {
  return (
    <>
      <header className="navbar mb-4">
        <div className="logo">
          <img src="/logo.png" alt="" className="logo_photo" />
        </div>
        <ul className="list">
          <li>找場館</li>
          <li>找商城</li>
          <li>找課程</li>
          <li>找教練</li>
          <li>找商城</li>
          <li>找知識</li>
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
