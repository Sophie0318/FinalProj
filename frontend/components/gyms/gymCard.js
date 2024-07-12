import React, { useEffect, useRef, useState } from 'react'
import styles from './gymCard.module.css'
import Link from 'next/link'
import { IoCall } from 'react-icons/io5'
import Image from 'next/image'

const GymCard = ({ data }) => {
  const [isWideScreen, setIsWideScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {isWideScreen ? (
          <Image
            src={data.images[0]}
            alt="場館照片"
            width={120}
            height={120}
            className={styles.image}
            loading="lazy"
          />
        ) : (
          data.images.map((src, i) => {
            return (
              <Image
                key={i}
                src={src}
                alt={`場館圖片${i + 1}`}
                width={150}
                height={150}
                className={styles.image}
                loading="lazy"
              />
            )
          })
        )}
      </div>
      <div className={styles.textBtn}>
        <div className={styles.content}>
          <Link href="/gyms/[id]" as={`/gyms/${data.id}`}>
            <h5 className={styles.title}>{data.name}</h5>
          </Link>
          <div className="cardInfo">
            <p className={styles.smallFont}>{data.address}</p>
            <p className={styles.smallFont}>營業時間 | {data.businessHours}</p>
            <div className={styles.badgeRow}>
              {data.features.map((feature, i) => (
                <span key={i} className={styles.badge}>
                  {feature}
                </span>
              ))}

              <span className={styles.badge}>500公尺</span>
            </div>
          </div>
        </div>
        <a href="#" className={styles.bookButton}>
          <IoCall />
          預約
        </a>
      </div>
    </div>
  )
}

const ResultCards = ({ gyms }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const containerRef = useRef(null)
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current
      if (container) {
        setIsScrolled(container.scrollTop > 0)
      }
    }
    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  if (!gyms) {
    return <div>Loading...</div>
  }
  return (
    <div className={styles.resultCards}>
      {Array.isArray(gyms) && gyms.length > 0 ? (
        gyms.map((gym, i) => <GymCard key={i} data={gym} />)
      ) : (
        <p>沒有接收到gyms資料，檢查是不是陣列</p>
      )}
    </div>
  )
}
export { GymCard }
export default ResultCards
