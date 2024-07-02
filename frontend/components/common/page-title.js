import React from 'react'
import Breadcrumb from './breadcrumb'
import styles from './layout.module.css'

export default function PageTitle({ pageName = 'index', height = '205px' }) {
  // 列出所有可能的副標題, 由 prop 決定副標題要用哪一個
  const pageList = {
    index: {
      main: '尋找最適合你的運動方式',
      second: 'Find what suits you best',
    },
    gyms: { main: '友善的運動場館', second: 'Find a Gym near you !' },
    coaches: { main: '親切的健身教練', second: 'Find a Coach you like!' },
    lessons: { main: '多元的健身課程', second: 'Find a Lesson You Like!' },
    products: { main: '豐富的健身商城', second: 'Find a product  you need !' },
    articles: { main: '全面的知識補給', second: 'Find a piece of knowledge !' },
    users: { main: '會員中心', second: 'User Profile' },
  }

  // 決定 prop 的機制
  let activePage = []
  switch (pageName) {
    case 'gyms':
      activePage[0] = pageList.gyms.main
      activePage[1] = pageList.gyms.second
      break

    case 'coaches':
      activePage[0] = pageList.coaches.main
      activePage[1] = pageList.coaches.second
      break

    case 'lessons':
      activePage[0] = pageList.lessons.main
      activePage[1] = pageList.lessons.second
      break

    case 'products':
      activePage[0] = pageList.products.main
      activePage[1] = pageList.products.second
      break

    case 'articles':
      activePage[0] = pageList.articles.main
      activePage[1] = pageList.articles.second
      break

    case 'users':
      activePage[0] = pageList.users.main
      activePage[1] = pageList.users.second
      break

    default:
      activePage[0] = pageList.index.main
      activePage[1] = pageList.index.second
      break
  }

  return (
    <>
      <section className={styles.intro} style={{ height: height }}>
        <div className={`${styles.info}`}>
          <Breadcrumb />
          <div className={`${styles.title}`}>{activePage[0]}</div>
          <div className={`${styles.subTitle}`}>{activePage[1]}</div>
        </div>
      </section>
    </>
  )
}
