import React, { useEffect, useRef, useState } from 'react'
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
  const [boo, setBoo] = useState(true) //switch 的外觀state
  const [isComposing, setIsComposing] = useState(false)

  const searchBarRef = useRef(null)

  const handleClick = () => {
    const yOffset = -50 // 50px offset above the target
    const element = searchBarRef.current
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset

    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  //用fetch請後端搜尋資料的函式
  const handleCompositionChange = (composing) => {
    setIsComposing(composing)
  }

  const fetchGymsData = () => {
    const qq = new URLSearchParams(router.query)
    // console.log(qq)
    const url = `http://localhost:3001/gyms/api?keyword=${searchTerm}&features=${selectedFeatures}`
    if (router.isReady) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setGymsData(data.processedRows)
        })
    }
  }

  //處理checkbox狀態改變的函式
  const handleCheckboxChange = (feature) => {
    setSelectedFeatures((prev) => {
      if (prev.includes(feature)) {
        return prev.filter((f) => f !== feature)
      } else {
        return [...prev, feature]
      }
    })
  }

  // 清除所有checkbox函式
  const clearAllCheckboxes = () => {
    setSelectedFeatures([])
  }

  //更新URL
  // const query = searchTerm ? { gym_name: searchTerm } : {}
  // router.push(
  //   {
  //     pathname: '/gyms',
  //     query,
  //   },
  //   undefined,
  //   { shallow: true }
  // )

  const handleSearch = (e) => {
    // if(!isComposing){
    router.push({
      pathname: '/gyms',
      query: { ...router.query, gym_name: searchTerm },
    })
    // }
  }

  // 從URL取得搜尋關鍵字
  useEffect(() => {
    if (router.isReady) {
      if (!isComposing) {
        // fetch資料
        fetchGymsData()
      }
      // checkbox的動態選染hook
      const query = selectedFeatures.length
        ? { feature_list: selectedFeatures.join('-') }
        : {}
      router.push(
        {
          pathname: '/gyms',
          query: { ...router.query, features: selectedFeatures.join('-') },
        },
        undefined,
        { scroll: false }
      )
    }
  }, [router.isReady, searchTerm, selectedFeatures, isComposing])

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
                setSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
                gymsData={gymsData}
                onCompositionChange={handleCompositionChange}
                handleSearch={handleSearch}
                handleClick={handleClick}
                ref={searchBarRef}
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
            <MapErea gymsData={gymsData} searchTerm={searchTerm}/>
          </div>
          <ResultCards gyms={gymsData} selectedFeatures={selectedFeatures} />
        </div>
      </div>
    </Layout3>
  )
}
