import { useState, useEffect } from 'react'
// import SwiperCarousel from '@/components/swiperCarousel'
import dataList from '@/data/Product.json'
import dataList2 from '@/data/FakeArticles.json'
import ArticleCard from '@/components/articles/article-card'
import LessonCard from '@/components/lessons/lessonCard'
import CoachCard from '@/components/coaches/coachCard'
import Select from '@/components/common/select/select'
import Btn from '@/components/articles/buttons_test'

import CardCarousel from '@/components/swiperCarousel/cardCarousel'

export default function SwiperTest() {
  const [data, setData] = useState([])

  const renderCard = (item) => {
    return (
      <ArticleCard
        title={item.article_title}
        update_at={item.update_at}
        category={item.article_subtype}
        imgSrc="/defaultImg.png"
      />
    )
  }

  useEffect(() => {
    setData(dataList2)
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
          <Btn size="sm" bgColor="yellow" btnOrLink="btn" maxWidth="250px">
            加入會員
          </Btn>
        </div>

        <div className="row my-5">
          <div className="col-3 d-flex justify-content-end align-items-center">
            <h3 className="m-0">Latest Post</h3>
          </div>
          <div className="col-9">
            <CardCarousel
              data={data}
              arrow={true}
              renderItem={renderCard}
              cardMaxWidth="350px"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-3 d-flex justify-content-end align-items-center">
            <h3 className="m-0">Latest Post</h3>
          </div>
          <div className="col-9">
            {/* <SwiperCarousel arrow={false} data={data} renderItem={renderCard} /> */}
          </div>
        </div>
        <Btn size="lg" bgColor="outlineLight" btnOrLink="link" maxWidth="250px">
          加入會員
        </Btn>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-3 d-flex justify-content-end align-items-center">
            <h3 className="m-0">Latest Post</h3>
          </div>
          <div className="col-9">
            {/* <SwiperCarousel data={data} renderItem={renderCoachCard} /> */}
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-12 d-flex justify-content-end align-items-center">
            <Select />
          </div>
        </div>
      </div>
    </>
  )
}
