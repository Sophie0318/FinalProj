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
  const router = useRouter()
  const [gymsData, setGymsData] = useState([])
  const [selectedFeatures, setSelectedFeatures] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredGyms, setFilteredGyms] = useState([])
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
// fetch資料
  useEffect(() => {
    const url = 'http://localhost:3001/gyms/api'
    if (router.isReady) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setGymsData(data.processedRows)
          setFilteredGyms(data.processedRows)
        })
    }
  }, [router.isReady])

  useEffect(() => {
    // 從URL取得搜尋關鍵字

    if (router.isReady && router.query.search) {
      setSearchTerm(router.query.search)
    }
  }, [router.isReady, router.query.search])

  useEffect(() => {
    const filtered = gymsData.filter(gym => 
      gym.gym_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredGyms(filtered);
  //更新URL
  const currentPath = router.pathname;
  const query = searchTerm ? { search: searchTerm } : {};
  router.push({
    pathname: currentPath,
    query,
  }, undefined, { shallow: true });
  }, [searchTerm, gymsData,router]);

  const clearAllCheckboxes = () => {
    setSelectedFeatures([])
  }
  const handleCheckboxChange = (feature) => {
    setSelectedFeatures((prev) => {
      if (prev.includes(feature)) {
        return prev.filter((f) => f !== feature)
      } else {
        return [...prev, feature]
      }
    })
  }

  // 搜尋關鍵字的hook
  useEffect(() => {
    // 當searchTerm 變化時，進行搜尋
    const filtered = gymsData.filter((gym) =>
      gym.gym_name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredGyms(filtered)
  }, [searchTerm, gymsData])

  // checkbox的動態選染hook
  useEffect(() => {
    const query = selectedFeatures.length
      ? { feature_list: selectedFeatures.join('-') }
      : {}
    router.replace(
      {
        pathname: '/gyms',
        query,
      },
      undefined,
      { shallow: true }
    )
  }, [selectedFeatures, router.isReady])

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
                onChange={handleSearchChange}
                value={searchTerm}
              />
              <div
                title="switch"
                className="d-none d-md-flex align-items-center ps-3"
              >
                <Switch isOn={boo} handleToggle={() => setBoo(!boo)} />
              </div>
            </div>
          </div>
          <GymFilters
            selectedFeatures={selectedFeatures}
            handleCheckboxChange={handleCheckboxChange}
            clearAllCheckboxes={clearAllCheckboxes}
          />
        </div>
        <div className={styles.flexRow}>
          <div className={styles.mapContainerStyle}>
            <MapErea />
          </div>
          <ResultCards gyms={gymsData} selectedFeatures={selectedFeatures} />
        </div>
      </div>
    </Layout3>
  )
}
