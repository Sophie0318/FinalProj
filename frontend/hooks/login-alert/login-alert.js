import React from 'react'
import Swal from 'sweetalert2'
import styles from './login-alert.module.css'

export default function LoginAlert() {
  const LoginAlert = Swal.mixin({
    customClass: {
      popup: `${styles.popup}`,
      title: `${styles.title}`,
      icon: `${styles.icon}`,
      closeButton: `${styles.closeButton}`,
      confirmButton: `${styles.confirmButton} ${styles.midnightgreen}`,
      cancelButton: `${styles.cancelButton} ${styles.gray50}`,
    },
    titleText: '要登入才能收藏喔~',
    icon: 'info',
    iconColor: 'var(--color-yellow)',
    heightAuto: false,
    confirmButtonText: '登入',
    showCancelButton: true,
    cancelButtonText: '回到頁面',
    showCloseButton: true,
    closeButtonHtml: "<img src='/ioclose.svg'/>",
  })

  return LoginAlert
}
