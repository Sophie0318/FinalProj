import React from 'react'
import Link from 'next/link'
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5'
import { FaLine, FaArrowUpLong } from 'react-icons/fa6'

export default function Footer() {
  // TODO: to top button javascript 放到react有bug要再修
  // Show the button when the user scrolls down 100px from the top of the document
  // window.onscroll = function () {
  //   var button = document.getElementById('back-to-top')
  //   if (
  //     document.body.scrollTop > 10 ||
  //     document.documentElement.scrollTop > 10
  //   ) {
  //     button.style.display = 'block'
  //   } else {
  //     button.style.display = 'none'
  //   }
  // }

  // Smooth scroll to top function
  // const scrollToTop = function () {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   })
  // }
  return (
    <>
      <footer className="mt-auto">
        <div className="icon">
          <li>
            <a href="#">
              <IoLogoFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLine />
            </a>
          </li>
          <li>
            <a href="#">
              <IoLogoInstagram />
            </a>
          </li>
        </div>
        <div>
          <img src="/logo.png" alt="" className="logo_photo" />
          <p className="copyRight">
            Copyright &copy; 2024 All Rights Reserved.{' '}
          </p>
        </div>
      </footer>
      <button id="back-to-top" onClick={() => {}}>
        <FaArrowUpLong />
        <p>Top</p>
      </button>
    </>
  )
}
