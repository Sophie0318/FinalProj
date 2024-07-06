import { useRef } from 'react'
import { register } from 'swiper/element/bundle'

import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import styles from './swiperCarousel.module.css'

// register Swiper custom elements
register()

// initial data list
const initlist = Array(12).fill(1)

export default function SwiperCarousel({
  arrow = true,
  data = initlist,
  width = '100%',
  gap = '-30',
  renderItem,
}) {
  const sliderRef = useRef(null)

  const handleNext = () => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }

  const handlePrev = () => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }

  let showArrow = 'block'
  let maxWidth = 'calc(100vw - 16px)'
  let paddingLeft = 'calc(48px + 20px)'
  let freeMode = 'false'
  if (!arrow) {
    showArrow = 'none'
    maxWidth = 'calc(100vw)'
    paddingLeft = '0px'
    freeMode = 'true'
  } else {
    showArrow = 'block'
    maxWidth = 'calc(100vw - 16px)'
    paddingLeft = 'calc(48px + 20px)'
    freeMode = 'false'
  }

  // 加上抓 database 除錯訊息
  if ((data.length === 0) | (data === null) | (data === undefined)) {
    data = initlist
    console.log('data 沒抓到')
  }

  return (
    <>
      <div
        className={styles.swiperCarousel}
        style={{
          maxWidth: `${maxWidth}`,
          width: `${width}`,
          paddingLeft: `${paddingLeft}`,
        }}
      >
        <swiper-container
          ref={sliderRef}
          free-mode={freeMode}
          slides-per-view="auto"
          space-between={gap}
          speed="500"
        >
          {data.map((v, i) => {
            return (
              <swiper-slide key={i}>
                {renderItem ? (
                  renderItem(v)
                ) : (
                  <div
                    className="
                    d-flex justify-content-center align-items-center"
                    style={{
                      backgroundColor: '#bbb',
                      height: '392px',
                      width: '80vw',
                      maxWidth: '301px',
                      borderRadius: '40px',
                    }}
                  >
                    Card {i + 1}
                  </div>
                )}
              </swiper-slide>
            )
          })}
        </swiper-container>
        <button
          className={`${styles.navBtn} ${styles.prevBtn}`}
          style={{ display: `${showArrow}` }}
        >
          <FaArrowLeftLong className={styles.navIcon} onClick={handlePrev} />
        </button>
        <button
          className={`${styles.navBtn} ${styles.nextBtn}`}
          style={{ display: `${showArrow}` }}
        >
          <FaArrowRightLong className={styles.navIcon} onClick={handleNext} />
        </button>
      </div>
    </>
  )
}
