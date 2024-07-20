import React, { useState, useEffect } from 'react'
import LayoutUser from '@/components/layout/user-layout3'
import styles from '../../../styles/user-edit.module.css'
import { useAuth } from '../../../context/auth-context'
import { useRouter } from 'next/router'
import UserModal from '../../../components/users/UserModal'
import MyPasswordInput from '@/components/users/MyPasswordInput'

export default function Edit() {
  const router = useRouter()
  const { auth, setAuth, logout } = useAuth()
  const [city, setCity] = useState([])
  const [districts, setDistricts] = useState([])
  const [selectedCity, setSelectedCity] = useState(auth.city || 0)
  const [selectedDistrict, setSelectedDistrict] = useState(auth.district || 0)

  const [name, setName] = useState(auth.name || '')
  const [nickName, setNickName] = useState(auth.nick_name || '')
  const [mobile, setMobile] = useState(auth.mobile || '')
  const [address, setAddress] = useState(auth.address || '')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [originalUserData, setOriginalUserData] = useState({}) //保存原始資料
  const [errorMessage, setErrorMessage] = useState('')

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [userMessage, setUserMessage] = useState('')

  console.log('auth.id:', auth.id)

  //當auth被更新時保存原先的資料
  useEffect(() => {
    //保存原始資料
    setOriginalUserData({
      name: auth.name || '',
      nick_name: auth.nick_name || '',
      mobile: auth.mobile || '',
      address: auth.address || '',
      city: auth.city || 0,
      district: auth.district || 0,
    })
    //更新的資料
    setName(auth.name || '')
    setNickName(auth.nick_name || '')
    setMobile(auth.mobile || '')
    setAddress(auth.address || '')
    setSelectedCity(auth.city || 0)
    setSelectedDistrict(auth.district || 0)
  }, [auth])

  useEffect(() => {
    // Fetch city data
    const fetchCity = async () => {
      try {
        const response = await fetch(
          'http://localhost:3001/users/selectWhere/city'
        )
        const data = await response.json()
        setCity(data)
      } catch (error) {
        console.error('Error fetching city:', error)
      }
    }

    fetchCity()
  }, [])

  // Fetch district data when city changes
  useEffect(() => {
    const fetchDistrict = async () => {
      if (selectedCity !== 0) {
        try {
          const response = await fetch(
            `http://localhost:3001/users/selectWhere/district/${selectedCity}`
          )
          const data = await response.json()
          setDistricts(data)
        } catch (error) {
          console.error('Error fetching district:', error)
        }
      } else {
        setDistricts([])
      }
    }

    fetchDistrict()
  }, [selectedCity])

  const handleCityChange = (e) => {
    const newCityId = parseInt(e.target.value)
    setSelectedCity(newCityId)
    setSelectedDistrict(0)
  }

  // 檢查是否有資烙更新
  const isDataChanged = () => {
    return (
      name !== originalUserData.name ||
      nickName !== originalUserData.nick_name ||
      mobile !== originalUserData.mobile ||
      address !== originalUserData.address ||
      selectedCity !== originalUserData.city ||
      selectedDistrict !== originalUserData.district ||
      password !== '' || // 如果輸入了新密碼，視為有更新
      confirmPassword !== ''
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // 檢查是否有資料更新
    if (!isDataChanged()) {
      setAlertMessage('尚無資料更新')
      setUserMessage('沒有資料異動')
      setIsModalOpen(true)
      setTimeout(() => {
        setIsModalOpen(false)
      }, 1000)
      //回到頂部
      window.scrollTo(0, 0)
      return
    }
    //檢查密碼是否一致
    if (password !== confirmPassword) {
      setErrorMessage('密碼不一致')
      return
    }

    const updateProfile = {
      id: auth.id,
      name,
      nick_name: nickName,
      mobile,
      address,
      city: selectedCity,
      district: selectedDistrict,
    }

    // 只有在有輸入密碼時才包含密碼欄位
    if (password) {
      updateProfile.password = password
    }

    try {
      if (!auth.id) {
        throw new Error('User ID is not defined')
      }

      const updateResponse = await fetch(
        `http://localhost:3001/users/updateProfile/${auth.id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updateProfile),
        }
      )

      if (!updateResponse.ok) {
        throw new Error(`HTTP error! status: ${updateResponse.status}`)
      }

      const updatedData = await updateResponse.json()
      console.log('後端返回的數據:', updatedData)

      if (updatedData.message === '個人資料更新成功') {
        // 使用本地更新的數據來更新 auth context
        if (typeof setAuth === 'function') {
          setAuth({
            ...auth,
            name: name,
            nick_name: nickName,
            mobile: mobile,
            address: address,
            city: selectedCity,
            district: selectedDistrict,
          })
        } else {
          console.error('setAuth is not a function')
        }

        setErrorMessage('') // 清除錯誤訊息

        if (updatedData.isPasswordChange) {
          setAlertMessage('更新成功')
          setUserMessage('密碼已更新，請重新登入')
          setIsModalOpen(true)
          setTimeout(() => {
            setIsModalOpen(false)
          }, 1000)
          // 呼叫登出函數
          logout()
          // 導向登入頁面
          router.push('/users/sign_in')
        } else {
          setAlertMessage('更新成功')
          setUserMessage('個人資料已成功更新')
          setIsModalOpen(true)
          setTimeout(() => {
            setIsModalOpen(false)
          }, 1000)
          //回到頂部
          window.scrollTo(0, 0)
        }
      } else {
        throw new Error('更新失敗')
      }
    } catch (error) {
      console.error('Failed to update profile:', error)
      setErrorMessage('更新失敗，請稍後再試')
    }
  }
  return (
    <>
      <LayoutUser title="myProfile">
        <div className={styles.userinfo_edit}>
          <div className={styles.user_title}>
            <h4>我的檔案</h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.user_details}>
              {/* Personal Information */}
              <div className={styles.information}>
                <h5>個人資料</h5>
                <div className={styles.form_group}>
                  <label htmlFor="name">
                    <p>姓名:</p>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="nickname">
                    <p>暱稱:</p>
                  </label>
                  <input
                    type="text"
                    id="nickname"
                    name="nickname"
                    value={nickName}
                    onChange={(e) => setNickName(e.target.value)}
                  />
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="mobile">
                    <p>手機:</p>
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
              </div>

              {/* Address */}
              <div className={styles.address}>
                <h5>地址</h5>
                <div className={styles.form_group}>
                  <label htmlFor="city">
                    <p>縣市:</p>
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={selectedCity}
                    onChange={handleCityChange}
                  >
                    <option value="0">--請選擇--</option>
                    {city.map((c) => (
                      <option key={c.code_id} value={c.code_id}>
                        {c.code_desc}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="district">
                    <p>行政區:</p>
                  </label>
                  <select
                    id="district"
                    name="district"
                    value={selectedDistrict}
                    onChange={(e) =>
                      setSelectedDistrict(parseInt(e.target.value))
                    }
                  >
                    <option value="0">--請選擇--</option>
                    {districts.map((d) => (
                      <option key={d.code_id} value={d.code_id}>
                        {d.code_desc}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="address">
                    <p>地址:</p>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    style={{ width: '300px' }}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              {/* Change Password */}
              <div className={styles.change_password}>
                <h5>更改密碼</h5>
                <div className={styles.flex}>
                  <div className={styles.form_groupMb}>
                    <label htmlFor="password">
                      <p>密碼:</p>
                    </label>
                    <MyPasswordInput
                      password={password}
                      setPassword={setPassword}
                      id="new_password"
                      name="password"
                      placeholder="請輸入新密碼"
                    />
                  </div>
                  <div
                    className={styles.form_groupMb}
                    style={{ width: '350px' }}
                  >
                    <label htmlFor="confirm_password">
                      <p>請再輸入一次密碼:</p>
                    </label>
                    <MyPasswordInput
                      password={confirmPassword}
                      setPassword={setConfirmPassword}
                      id="confirm_password"
                      name="confirm_password"
                      placeholder="請再次輸入新密碼"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.edit_btn}>
              <a href="./edit.html" className={styles.btn_md}>
                <div className={styles.h6_font}>取消更新</div>
              </a>
              <button type="submit" className={styles.btn_md} formNoValidate>
                <div className={styles.h6_font}>資料更新</div>
              </button>
            </div>
          </form>
        </div>
      </LayoutUser>
      {isModalOpen && (
        <UserModal
          onClose={() => setIsModalOpen(false)}
          alertMessage={alertMessage}
          userMessage={userMessage}
        />
      )}
    </>
  )
}
