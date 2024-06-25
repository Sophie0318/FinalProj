import React, { useEffect } from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

export default function Carousel({
  carouselTitle = '熱門選項',
  data = ['card1', 'card2', 'card3'],
}) {
  const list = ['card1', 'card2', 'card3']

  // TODO: bootstrap 輪播覆蓋也很難做出一模一樣的效果, 考慮直接用kacco網站用的https://swiperjs.com/
  return (
    <>
      <div className="row" style={{ marginBottom: '86px' }}>
        <div className="col-lg-3 d-flex justify-content-center align-items-center">
          <h3>{carouselTitle}</h3>
        </div>
        <div className="col-lg-9">
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
              className="carousel-control-prev"
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
              className="carousel-control-next"
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
