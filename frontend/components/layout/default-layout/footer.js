import React from 'react'
import Link from 'next/link'
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5'
import { FaLine, FaArrowUpLong } from 'react-icons/fa6'

export default function Navbar() {
  return (
    <>
      <footer>
        <div className="icon">
          <li>
            <Link href="/">
              <IoLogoFacebook />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FaLine />
            </Link>
          </li>
          <li>
            <Link href="/">
              <IoLogoInstagram />
            </Link>
          </li>
        </div>
        <div>
          <img src="/logo.png" alt="" className="logo_photo" />
          <p className="copyRight">
            Copyright &copy; 2024 All Rights Reserved.{' '}
          </p>
        </div>
      </footer>
      <button id="back-to-top" onclick="scrollToTop()">
        <FaArrowUpLong />
        <p>Top</p>
      </button>
    </>
  )
}
