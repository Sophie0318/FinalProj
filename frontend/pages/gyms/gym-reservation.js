import React, { useEffect, useState } from 'react'
import Layout3 from '@/components/layout/layout3'
import styles from './gym-reservation.module.css'
import AutofillCheckbox from '@/components/gyms/auto-fill-checkbox'
import FormField from '@/components/common/form-field/form-field'
import GymCardSpot from '@/components/gyms/gymCard-spot'
import GymReservationModal from '@/components/gyms/gym-reservation-modal'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/auth-context'
// 假資料
const gymData = {
  id: 1,
  name: '原力覺醒健身房',
  subtitle: '友善的設備，專業的教練',
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
  information:
    '力量源練身館座落於北投市中心，是一間專業健身、體能訓練所在於其中一個的活化空間場館。我們科技力光合有機研發耳機系統，令大家在選擇的時候品質無需擔心。更新科技化新式健身器材設施讓您操作時更為輕鬆......',
  price: [
    '月卡會員: NT$ 1,900/月',
    '季卡會員: NT$ 4,000/月 (每月約1,333)',
    '半年卡會員: NT$ 6,000/月 (每月約1,167)',
    '單次體驗: NT$ 300/次',
  ],
  equipment: [
    '有氧運動區：配備多部跑步機、橢圓機、單車等',
    '團體課教室：舉辦各種團體有氧課程',
    '個人訓練區：可進行一對一的個人訓練',
    '更衣室和淋浴設施：提供舒適的更衣和盥洗空間',
  ],
}
const memberData = {
  name: '張三',
  email: 'zhangsan@example.com',
  phone: '0912345678',
  // ... 其他會員資料
}

export default function GymReservation() {
  const router = useRouter()
  const { auth } = useAuth()

const fetchGymData = async () => {
  const { gymId } = router.query
  if (gymId) {
    try {
      const response = await fetch(`http://localhost:3001/gyms/api/${gymId}`)
    } catch (error) {
      
    }
  }
}










  const handleAutofill = (e) => {
    if(e.target.checked) {
      if(!auth.token){

      }
    }
    // 在這裡處理自動填充的資料，例如更新表單狀態等
  }

  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div>
      <Layout3>
        <div className={styles.container}>
          <div>
            <form onSubmit={handleSubmit}>
              <div className={styles.formTitle}>
                <h4 className="">預約人資訊｜</h4>
                <AutofillCheckbox
                  memberData={memberData}
                  onAutofill={handleAutofill}
                />
              </div>
              <div className={styles.inputsContainer}>
                <FormField label="姓名" name="name" id="name" />
                <FormField
                  label="手機"
                  name="phone"
                  id="phone"
                  placeholder="請輸入您的手機號碼"
                />
                <FormField
                  label="聯絡信箱"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <h4 className="">預約場館｜</h4>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <GymCardSpot data={gymData} style={{ margin: 'auto' }} />
              </div>
              <div className={styles.inputsContainer}>
                <FormField
                  label="選擇時段"
                  type="select"
                  name="time"
                  id="time"
                  options={[
                    { value: '1', label: '上午' },
                    { value: '2', label: '下午' },
                    { value: '3', label: '晚上' },
                  ]}
                />

                <button className={styles.button}>預約</button>
              </div>
            </form>
          </div>
        </div>
      </Layout3>
      {showModal && <GymReservationModal onClose={handleCloseModal} />}
    </div>
  )
}
