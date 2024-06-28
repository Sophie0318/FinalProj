import React from 'react'
import Layout2 from '@/components/layout/layout2'
import styles from './gyms.module.css'
import SearchBar from '@/components/common/searchbar/searchbar'
import Toggle from '@/components/common/toggle/toggle'

export default function FindGyms() {
  // 功能寫在這
  return (
    <Layout2 title="尋找場館" pageName="gyms">  
      <div className={styles.containerFixedP80}>
        <div className="row">
          <div className={styles.mt50}>
            <SearchBar  placeholder="輸入地址查詢最近場館..." maxWidth="789px" />
            <Toggle/>
          </div>
        </div>
      </div>
    </Layout2>
  )
}
