import React, { useEffect } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import styles from './carousel.module.css'

export default function Carousel({
  carouselTitle = '熱門選項',
  data = ['card1', 'card2', 'card3'],
}) {
  const list = ['card1', 'card2', 'card3']

  // TODO: bootstrap 輪播覆蓋也很難做出一模一樣的效果, 考慮直接用kacco網站用的https://swiperjs.com/
  return (
    <>
      <div className={`${styles.carouselRow} row px-0 mx-0`}>
        <div
          className={`${styles.carouselTitle} col-md-3 d-flex justify-content-start align-items-center`}
        >
          <h3>{carouselTitle}</h3>
        </div>
        <div className="col-md-9 ps-md-4 ps-sm-3">
          <div id="carousel" className="carousel slide" data-bs-wrap="false">
            <div className="carousel-inner">
              {data.map((v, i) => {
                return (
                  <div
                    key={i}
                    className={
                      i === 0 ? 'carousel-item active' : 'carousel-item'
                    }
                  >
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        height: '400px',
                        width: '504px',
                        backgroundColor: 'var(--color-light-gray)',
                        borderRadius: '50px',
                      }}
                    >
                      {v}
                    </div>
                  </div>
                )
              })}
            </div>
            <button
              className={`${styles.hideBtn} carousel-control-prev`}
              type="button"
              data-bs-target="#carousel"
              data-bs-slide="prev"
            >
              <FaArrowLeftLong
                className="carousel-control-prev-icon"
                aria-hidden="true"
              />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className={`${styles.hideBtn} carousel-control-next`}
              type="button"
              data-bs-target="#carousel"
              data-bs-slide="next"
            >
              <FaArrowRightLong
                className="carousel-control-prev-icon"
                aria-hidden="true"
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
