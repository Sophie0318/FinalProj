import React, { useState } from 'react'
import Layout3 from '@/components/layout/layout3'
import styles from './gyms.module.css'
import SearchBar from '@/components/common/searchbar/searchbar'
import Switch from '@/components/common/switch/switch'

export default function Gyms() {
  // 功能寫在這
  //switch 的state
  const [boo, setBoo] = useState(true)
  return (
    <Layout3 title="尋找場館" pageName="gyms">
      <div className={`${styles.p16} ${styles.containerFixedP80} `}>
        <div className={'row'}>
          <div className={` ${styles.rt50}`}>
            <div
              className={
                'd-flex flex-row justify-content-between align-items-stretch '
              }
            >
              <SearchBar
                className=""
                placeholder="輸入地址查詢最近場館..."
                maxWidth="789px"
              />
              <div className="d-none d-md-flex align-items-center ps-3">
                <Switch isOn={boo} handleToggle={() => setBoo(!boo)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout3>
  )
}
