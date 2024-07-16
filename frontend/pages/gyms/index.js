import React, { useEffect, useState } from 'react'
import Layout3 from '@/components/layout/layout3'
import styles from './gyms.module.css'
import SearchBar from '@/components/common/searchbar/searchbar'
import Switch from '@/components/common/switch/switch'
import MapErea from '@/components/gyms/map-erea'
import GymFilters from './gymfilter'
import ResultCards from '@/components/gyms/gymCard'
import { useRouter } from 'next/router'

export default function Gyms() {
  // 功能寫在這
  const router = useRouter()
  const [gymsData, setGymsData] = useState([])
  useEffect(() => {
    const url = 'http://localhost:3001/gyms/api'
if(router.isReady){
  
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setGymsData(data.processedRows)
      console.log(gymsData)
    })
}
  }, [router.isReady])

  const fakeData = [
    {
      id: 1,
      name: '原力覺醒健身房',
      address: '台北市中正區杭州南路二段308號',
      businessHours: '上午9:00 - 下午11:00',
      features: ['重量訓練', '有氧運動', '瑜伽課程'],
      distance: 500,
      images: [
        '/gym1.jpg',
        '/gym1.jpg',
        '/gym1.jpg',
        '/gym1.jpg',
        '/gym1.jpg',
        '/gym1.jpg',
      ],
      phoneNumber: '02-1234-5678',
    },
    {
      id: 2,
      name: '極限挑戰健身中心',
      address: '台北市信義區松仁路100號',
      businessHours: '24小時營業',
      features: ['CrossFit', '格鬥訓練', '游泳池'],
      distance: 1200,
      images: ['/gym1.jpg', '/gym1.jpg', '/gym1.jpg', '/gym1.jpg'],
      phoneNumber: '02-2345-6789',
    },
    {
      id: 3,
      name: '靜心瑜伽館',
      address: '台北市大安區敦化南路一段233號',
      businessHours: '上午6:00 - 晚上9:00',
      features: ['熱瑜伽', '冥想課程', '芳療按摩'],
      distance: 800,
      images: ['/gym1.jpg', '/gym1.jpg', '/gym1.jpg'],
      phoneNumber: '02-3456-7890',
    },
    {
      id: 4,
      name: '巔峰體能訓練營',
      address: '台北市內湖區成功路四段188號',
      businessHours: '上午7:00 - 晚上10:00',
      features: ['團體課程', '私人教練', '營養諮詢'],
      distance: 1500,
      images: ['/gym1.jpg', '/gym1.jpg', '/gym1.jpg', '/gym1.jpg', '/gym1.jpg'],
      phoneNumber: '02-4567-8901',
    },
    {
      id: 5,
      name: '都會運動俱樂部',
      address: '台北市松山區南京東路五段250號',
      businessHours: '上午8:00 - 晚上11:00',
      features: ['室內跑道', '攀岩牆', '桑拿浴室'],
      distance: 350,
      images: ['/gym1.jpg', '/gym1.jpg', '/gym1.jpg', '/gym1.jpg'],
      phoneNumber: '02-5678-9012',
    },
  ]
  const [boo, setBoo] = useState(true) //switch 的外觀state
  return (
    <Layout3 title="尋找場館" pageName="gyms">
      <div className={styles.indexContainer}>
        <div className={styles.zIndex}>
          <div className={styles.container}>
            <div title="searchbar&Switch" className={styles.searchAndSwitch}>
              <SearchBar
                className=""
                placeholder="輸入地址查詢最近場館..."
                maxWidth="789px"
              />
              <div
                title="switch"
                className="d-none d-md-flex align-items-center ps-3"
              >
                <Switch isOn={boo} handleToggle={() => setBoo(!boo)} />
              </div>
            </div>
          </div>
          <GymFilters />
        </div>
        <div className={styles.flexRow}>
          <div className={styles.mapContainerStyle}>
            <MapErea />
          </div>
          <ResultCards gyms={gymsData} />
        </div>
      </div>
    </Layout3>
  )
}
