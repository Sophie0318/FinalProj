import { useRef, useEffect, useState } from 'react'
import { register } from 'swiper/element/bundle'

import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import styles from './card-carousel.module.css'

// initial data list
const initlist = Array(12).fill(1)

export default function CardCarousel({
  arrow = true,
  data = initlist,
  width = '100%',
  cardMaxWidth = '350px',
  cardWidth = '100%',
  gap = '20px',
  renderItem,
}) {
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(-1)

  const handleNext = () => {
    if (!swiperRef.current) return
    swiperRef.current.swiper.slideNext()
  }

  const handlePrev = () => {
    if (!swiperRef.current) return
    swiperRef.current.swiper.slidePrev()
  }

  let showArrow = 'block'
  let maxWidth = 'calc(100vw - 16px)'
  let paddingLeft = 'calc(48px)'
  let freeMode = false
  let on = {}
  if (!arrow) {
    showArrow = 'none'
    maxWidth = 'calc(100vw)'
    paddingLeft = '26px'
    freeMode = true
    on = {}
  } else {
    showArrow = 'block'
    maxWidth = 'calc(100vw - 16px)'
    paddingLeft = 'calc(48px + 16px)'
    freeMode = false
    on = {
      slideChange: (swiper) => {
        setActiveIndex(swiper.activeIndex)
      },
    }
  }

  // 加上抓 database 除錯訊息
  if ((data.length === 0) | (data === null) | (data === undefined)) {
    data = initlist
    console.log('data 沒抓到')
  }

  useEffect(() => {
    register()

    if (!swiperRef.current) return
    const params = {
      // centeredSlides: true,
      // centeredSlidesBounds: true,
      slidesPerView: 'auto',
      freeMode: { freeMode },
      spaceBetween: `${gap}`,
      speed: '500',
      observer: true,
      injectStyles: [
        `
      .swiper {
        overflow: visible;
      }
      `,
      ],
      on: { ...on },
    }

    console.log(activeIndex, 'activeIndex')

    Object.assign(swiperRef.current, params)
    swiperRef.current.initialize()
  }, [])

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
        <swiper-container init="false" ref={swiperRef}>
          {data.map((v, i) => {
            return (
              <swiper-slide
                key={i}
                style={{
                  width: `${cardWidth}`,
                  maxWidth: `${cardMaxWidth}`,
                  // display: `${activeIndex > i ? 'none' : 'block'}`,
                  opacity: `${activeIndex > i ? '0' : '1'}`,
                }}
              >
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
                      boxShadow: '3px 3px 20px #000',
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