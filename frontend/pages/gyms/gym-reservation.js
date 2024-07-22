import React, { useEffect, useState } from 'react'
import Layout3 from '@/components/layout/layout3'
import styles from './gym-reservation.module.css'
import AutofillCheckbox from '@/components/gyms/auto-fill-checkbox'
import FormField from '@/components/common/form-field/form-field'
import GymCardSpot from '@/components/gyms/gymCard-spot'
import GymReservationModal from '@/components/gyms/gym-reservation-modal'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/auth-context'
import GymDatePicker from '@/components/gyms/date-picker'
// 假資料
// const gymData = {
//   id: 1,
//   name: '原力覺醒健身房',
//   subtitle: '友善的設備，專業的教練',
//   address: '台北市中正區杭州南路二段308號',
//   businessHours: '上午9:00 - 下午11:00',
//   features: ['重量訓練', '有氧運動', '瑜伽課程'],
//   distance: 500,
//   images: [
//     '/gym1.jpg',
//     '/gym1.jpg',
//     '/gym1.jpg',
//     '/gym1.jpg',
//     '/gym1.jpg',
//     '/gym1.jpg',
//   ],
//   phoneNumber: '02-1234-5678',
//   information:
//     '力量源練身館座落於北投市中心，是一間專業健身、體能訓練所在於其中一個的活化空間場館。我們科技力光合有機研發耳機系統，令大家在選擇的時候品質無需擔心。更新科技化新式健身器材設施讓您操作時更為輕鬆......',
//   price: [
//     '月卡會員: NT$ 1,900/月',
//     '季卡會員: NT$ 4,000/月 (每月約1,333)',
//     '半年卡會員: NT$ 6,000/月 (每月約1,167)',
//     '單次體驗: NT$ 300/次',
//   ],
//   equipment: [
//     '有氧運動區：配備多部跑步機、橢圓機、單車等',
//     '團體課教室：舉辦各種團體有氧課程',
//     '個人訓練區：可進行一對一的個人訓練',
//     '更衣室和淋浴設施：提供舒適的更衣和盥洗空間',
//   ],
// }
const memberData = {
  name: '張三',
  email: 'zhangsan@example.com',
  phone: '0912345678',
  // ... 其他會員資料
}

export default function GymReservation({}) {
  const router = useRouter()
  const { auth } = useAuth()
  const [gymData, setGymData] = useState({
    name: '',
    images: [],
    address: '',
    businessHours: '',
    features: [],
  })

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    timeSlot: '',
    // ... 其他欄位
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    // 當用戶輸入時，清除該欄位的錯誤
    // setErrors((prevErrors) => ({
    //   ...prevErrors,
    //   [name]: '',
    // }))
  }

  // 表單驗證
  const validateForm = () => {
    // 創建newErrors來儲存錯誤訊息
    const newErrors = {}
    // 去除首尾空格後檢查是否為空
    if (!formData.name.trim()) newErrors.name = '請填寫姓名'
    if (!formData.phone.trim()) newErrors.phone = '請填寫電話'
    if (!formData.email.trim()) newErrors.email = '請填寫信箱'
    // 檢查是否有選擇時段
    if (!formData.timeSlot) newErrors.timeSlot = '請選擇時段'
    // 重新設定錯誤訊息
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // const gymsDatatoGeoJson = (gymData) => {
  //   if (!Array.isArray(gymData)) {
  //     console.error('Invalid gymsData Structure .應該要是 Array', gymData)
  //     return null
  //   }

  // fetch 資料函式
  const fetchGymData = async (gymId) => {
    if (!router.isReady) return null

    const url = `http://localhost:3001/gyms/api/${gymId}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log('gymId', gymId)
      if (data && data.processedRow && data.processedRow.length > 0) {
        console.log(data.processedRow[0])
        setGymData({
          name: data.processedRow[0].gym_name,
          images: data.processedRow[0].images,
          address: data.processedRow[0].gym_address,
          businessHours: data.processedRow[0].business_hours,
          features: data.processedRow[0].feature_list,
        })
      } else {
        console.error('API request was not successful:', data)
        setError('無法獲取健身房數據')
        return null
      }
    } catch (error) {
      console.error('Error fetching gym data:', error)
      setError('載入數據時發生錯誤')
      return null
    }
  }

  const handleAutofill = (isChecked) => {
    if (isChecked) {
      if (!auth.token) {
        router.push('/users/sign_in')
      } else {
        setFormData((pervData) => ({
          ...pervData,
          name: auth.name || '',
          phone: auth.mobile || '', // 使用 mobile 或 phone，取決於您在後端返回的字段名
          email: auth.email || '',
        }))
      }
    } else {
      setFormData((pervData) => ({
        ...pervData,
        name: '',
        phone: '',
        email: '',
      }))
    }
  }

  const [showModal, setShowModal] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    try {
      //處理預約的時間選項

      console.log(formData, 'Sending Data')

      const response = await axios.post(
        'http://localhost:3001/users/add/reservations/api',
        formData
      )
    } catch (error) {}
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    if (router.isReady) {
      const { Id } = router.query
      // console.log(Id)

      fetchGymData(Id)
      console.log(gymData)
    }
  }, [router.isReady])
  return (
    <div>
      <Layout3 title="預約場館" pageName="gyms2">
        <div className={styles.container}>
          <div>
            <form onSubmit={handleSubmit}>
              <div className={styles.formTitle}>
                <h4 className="">預約人資訊｜</h4>
                <AutofillCheckbox
                  // memberData={memberData}
                  onAutofill={handleAutofill}
                />
              </div>
              <div className={styles.inputsContainer}>
                <FormField
                  label="姓名"
                  name="name"
                  id="name"
                  placeholder="請輸入您的姓名"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <FormField
                  label="手機"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="請輸入您的手機號碼"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <FormField
                  label="聯絡信箱"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="請輸入您的聯絡信箱"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <h4 className="">預約場館｜</h4>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {gymData ? (
                  <GymCardSpot data={gymData} style={{ margin: 'auto' }} />
                ) : (
                  <div>Loading...</div>
                )}
              </div>
              <div className={styles.inputsContainerGap0}>
                {/* <FormField
                  label="選擇時段"
                  type="select"
                  name="time"
                  id="time"
                  options={[
                    { value: '1', label: '上午' },
                    { value: '2', label: '下午' },
                    { value: '3', label: '晚上' },
                  ]}
                /> */}
                <GymDatePicker />
                <button type="submit" className={styles.button}>
                  預約
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout3>
      {showModal && <GymReservationModal onClose={handleCloseModal} />}
    </div>
  )
}
