import React from 'react'
import LayoutUser from '@/components/layout/user-layout3'
import styles from '../../../styles/user-edit.module.css'
import { useAuth } from '../../../context/auth-context'

export default function LessonsOrders() {
  const { auth } = useAuth()
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
                  <input type="text" id="name" name="name" value={auth.name} />
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
                  />
                </div>
              </div>

              <div className={styles.address}>
                <h5>地址</h5>
                <div className={styles.form_group}>
                  <label htmlFor="city">
                    <p>縣市:</p>
                  </label>
                  <select id="city" name="city">
                    <option value="0">--請選擇--</option>
                    <option value="1">台北市</option>
                    <option value="2">新北市</option>
                    <option value="3">台中市</option>
                    {/* <!-- 青菜加加 --> */}
                  </select>
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="district">
                    <p>行政區:</p>
                  </label>
                  <select id="district" name="district">
                    <option value="0">--請選擇--</option>
                    <option value="1">信義區</option>
                    <option value="2">大安區</option>
                    <option value="3">松山區</option>
                    {/* <!-- 青菜加加 --> */}
                  </select>
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="address">
                    <p>詳細地址:</p>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    style={{ width: '300px' }}
                    value={auth.address}
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
                    <label htmlFor="password">
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
