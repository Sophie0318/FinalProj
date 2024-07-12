import React from 'react'
import CardCarousel from '@/components/swiperCarousel/cardCarousel'
import ArticleCard from '@/components/articles/article-card'
import SwiperCarousel from '@/components/swiperCarousel'

import data from '@/data/FakeArticles.json'

export default function SwiperTestPage() {
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
  return (
    <>
      <div className="container">
        <div className="row py-5 overflow-hidden">
          <CardCarousel
            data={data}
            arrow={true}
            renderItem={renderCard}
            cardWidth="350px"
          />
        </div>
        <div className="row py-5 overflow-hidden">
          <CardCarousel
            data={data}
            arrow={false}
            renderItem={renderCard}
            cardMaxWidth="150px"
          />
        </div>
        <div className="row my-5">
          <SwiperCarousel />
        </div>
      </div>
    </>
  )
}
