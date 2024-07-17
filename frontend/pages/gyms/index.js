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
  const [boo, setBoo] = useState(true) //switch 的外觀state
  const [isComposing, setIsComposing] = useState(false)

  const fetchGymsData = () => {
    const url = `http://localhost:3001/gyms/api?keyword=${searchTerm}&features=${selectedFeatures}`
    if (router.isReady) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setGymsData(data.processedRows)
        })
    }
  }

  // 從URL取得搜尋關鍵字
  useEffect(() => {
    if (router.isReady) {
      if (!isComposing) {
        // fetch資料
        fetchGymsData()
      }
    }

    //更新URL
    const query = searchTerm ? { gym_name: searchTerm } : {}
    router.push(
      {
        pathname: '/gyms',
        query,
      },
      undefined,
      { shallow: true }
    )
  }, [router.isReady, searchTerm, selectedFeatures, isComposing])

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

  // checkbox的動態選染hook
  useEffect(() => {
    const query = selectedFeatures.length
      ? { feature_list: selectedFeatures.join('-') }
      : {}
    router.push(
      {
        pathname: '/gyms',
        query,
      },
      undefined,
      { shallow: true }
    )
  }, [selectedFeatures, router.isReady])

  const handleCompositionChange = (composing) => {
    setIsComposing(composing);
  };
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
