import React, { useState, useEffect } from 'react'
import LayoutUser from '@/components/layout/user-layout3'
import styles from '../../../styles/user-edit.module.css'
import { useAuth } from '../../../context/auth-context'

export default function LessonsOrders() {
  const { auth } = useAuth()
  const [city, setcity] = useState([])
  const [districts, setDistrict] = useState([])
  const [selectedCity, setSelectedCity] = useState(auth.city)
  const [selectedDistrict, setSelectedDistrict] = useState(auth.district)

  // 重新整理頁面時，讀取 token 中的 city 和 district
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const { city, district } = JSON.parse(atob(token.split('.')[1]))
        setSelectedCity(city)
        setSelectedDistrict(district)
      } catch (error) {
        console.error('Error parsing token:', error)
      }
    }
  }, [])

  const fetchDistrict = async (cityId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/users/selectWhere/district/${cityId}`
      )
      const data = await response.json()
      setDistrict(data)
    } catch (error) {
      console.error('Error fetching district:', error)
    }
  }

  // Fetch 資料庫縣市資料
  useEffect(() => {
    const fetchcity = async () => {
      try {
        const response = await fetch(
          'http://localhost:3001/users/selectWhere/city'
        )
        const data = await response.json()
        setcity(data)
      } catch (error) {
        console.error('Error fetching city:', error)
      }
    }

    fetchcity()

    if (auth.city !== 0) {
      fetchDistrict(auth.city)
    }
  }, [])

  // 根據選擇的城市 fetch 鄉鎮市區
  useEffect(() => {
    if (selectedCity !== 0) {
      fetchDistrict(selectedCity)
    } else {
      setDistrict([])
    }
  }, [selectedCity])

  const handleCityChange = (e) => {
    const newCityId = parseInt(e.target.value)
    setSelectedCity(newCityId)
    setSelectedDistrict(0)
    if (newCityId !== 0) {
      fetchDistrict(newCityId)
    } else {
      setDistrict([])
    }
  }

  return (
    <>
      <LayoutUser title="myProfile">
        <div className={styles.userinfo_edit}>
          <div className={styles.user_title}>
            <h4>我的檔案</h4>
          </div>
          <form action="">
            <div className={styles.user_details}>
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
                    value={auth.name}
                    readOnly
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
                    value={auth.nick_name}
                    readOnly
                  />
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="phone">
                    <p>手機:</p>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={auth.mobile}
                    readOnly
                  />
                </div>
              </div>

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
                    {city.map((city) => (
                      <option key={city.code_id} value={city.code_id}>
                        {city.code_desc}
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
                    {districts.map((district) => (
                      <option key={district.code_id} value={district.code_id}>
                        {district.code_desc}
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
                    value={auth.address}
                    readOnly
                  />
                </div>
              </div>

              <div className={styles.change_password}>
                <h5>更改密碼</h5>
                <div className={styles.flex}>
                  <div className={styles.form_groupMb}>
                    <label htmlFor="password">
                      <p>密碼:</p>
                    </label>
                    <input type="password" id="new_password" name="password" />
                  </div>
                  <div
                    className={styles.form_groupMb}
                    style={{ width: '350px' }}
                  >
                    <label htmlFor="confirm_password">
                      <p>請再輸入一次密碼:</p>
                    </label>
                    <div className={styles.input_container}>
                      <input
                        className={styles.myinput}
                        type="password"
                        id="confirm_password"
                        name="password"
                      />
                      <div className={styles.myicon}>
                        <a href="">
                          <i className="fa-solid fa-eye-slash"></i>
                        </a>
                      </div>
                    </div>
                    <div className={styles.erro_message}>
                      <p>輸入的密碼不對，別擔心我們再試一次吧!</p>
                    </div>
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
    </>
  )
}
