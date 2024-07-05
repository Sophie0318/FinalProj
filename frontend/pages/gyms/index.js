import React, { useState } from 'react'
import Layout3 from '@/components/layout/layout3'
import styles from './gyms.module.css'
import SearchBar from '@/components/common/searchbar/searchbar'
import Switch from '@/components/common/switch/switch'
import MapErea from '@/components/gyms/map-erea'
import GymFilters from './gymfilter'
import GymCard from '@/components/gyms/gym-card'

export default function Gyms() {
  // 功能寫在這

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
        <div className={styles.mapContainerStyle}>
          <MapErea />
        </div>
      </div>

      <div title="resultCard">
        <GymCard />
      </div>
    </Layout3>
  )
}
