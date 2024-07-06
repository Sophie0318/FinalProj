import { useState, useEffect } from 'react'
import SwiperCarousel from '@/components/swiperCarousel'
import dataList from '@/data/Product.json'
import LessonCard from '@/components/lessons/lessonCard'

export default function SwiperTest() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(dataList)
  }, [])

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
    </>
  )
}
