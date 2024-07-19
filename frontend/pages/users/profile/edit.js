import React, { useState, useEffect } from 'react'
import LayoutUser from '@/components/layout/user-layout3'
import styles from '../../../styles/user-edit.module.css'
import { useAuth } from '../../../context/auth-context'
import { useRouter } from 'next/router'

export default function LessonsOrders() {
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
  const [errorMessage, setErrorMessage] = useState('')

  console.log('auth.id:', auth.id)

  useEffect(() => {
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

  const handleSubmit = async (e) => {
    e.preventDefault()
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
      password,
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
          alert('密碼已更新，請重新登入')
          // 呼叫登出函數
          logout()
          // 導向登入頁面
          router.push('/users/sign_in')
        } else {
          alert('個人資料更新成功')
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
                  <input
                    type="password"
                    id="new_password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className={styles.form_groupMb} style={{ width: '350px' }}>
                  <label htmlFor="confirm_password">
                    <p>請再輸入一次密碼:</p>
                  </label>
                  <div className={styles.input_container}>
                    <input
                      className={styles.myinput}
                      type="password"
                      id="confirm_password"
                      name="confirm_password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className={styles.myicon}>
                      <a href="#">
                        <i className="fa-solid fa-eye-slash"></i>
                      </a>
                    </div>
                  </div>
                  {errorMessage && (
                    <div className={styles.error_message}>
                      <p>{errorMessage}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.edit_btn}>
            <a href="./edit.html" className={styles.btn_md}>
              <div className={styles.h6_font}>取消更新</div>
            </a>
            <button type="submit" className={styles.btn_md}>
              <div className={styles.h6_font}>資料更新</div>
            </button>
          </div>
        </form>
      </div>
    </LayoutUser>
  )
}
