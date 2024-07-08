import { useState, useEffect } from 'react'
import SwiperCarousel from '@/components/swiperCarousel'
import dataList from '@/data/Product.json'
import LessonCard from '@/components/lessons/lessonCard'
import CoachCard from '@/components/coaches/coacgCard'

export default function SwiperTest() {
  const [data, setData] = useState([])

  const renderCard = (item) => {
    return (
      <LessonCard
        title={item.name}
        price={item.price}
        category={item.stock}
        imgSrc="/defaultImg.png"
      />
    )
  }

  useEffect(() => {
    setData(dataList)
  }, [])

  const renderCoachCard = (item) => {
    return (
      <CoachCard name={item.name} skill={item.price} imgSrc="/defaultImg.png" />
    )
  }

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-3 d-flex justify-content-end align-items-center">
            <h3 className="m-0">Latest Post</h3>
          </div>
          <div className="col-9">
            <SwiperCarousel data={data} renderItem={renderCard} />
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-3 d-flex justify-content-end align-items-center">
            <h3 className="m-0">Latest Post</h3>
          </div>
          <div className="col-9">
            <SwiperCarousel data={data} renderItem={renderCoachCard} />
          </div>
        </div>
      </div>
    </>
  )
}
