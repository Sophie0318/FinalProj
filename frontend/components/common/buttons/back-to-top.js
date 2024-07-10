import { FaArrowUpLong } from 'react-icons/fa6'
import styles from './back-to-top.module.css'

export default function BackToTop({ showBtn, hasScrolled }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {hasScrolled && (
        <button
          className={`${styles.backto_top} ${
            showBtn ? styles.slideUp : styles.slideDown
          }`}
          onClick={scrollToTop}
        >
          <FaArrowUpLong className={styles.backto_top_icon} />
          Top
        </button>
      )}
    </>
  )
}
