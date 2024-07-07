import React, { useState } from 'react'
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../../styles/sign-in.module.css'
import styles2 from '../../styles/user-sign-up.module.css'
import UserSignup from '@/components/layout/user-layout2'
// import MyStepProcess from '@/components/users/MyStepProcess'
import StepOne from '../../components/users/StepOne'
import StepTwo from '../../components/users/StepTwo'
import StepThree from '../../components/users/StepThree'
import MyBtn from '@/components/users/MyBtn'

export default function SignUp() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('密碼不一致，請重新輸入')
      return
    }
    console.log('提交表單', { email, name, password })
  }

  const handleNextStep = (e) => {
    e.preventDefault()
    setStep(step + 1)
  }

  const handlePrevStep = (e) => {
    e.preventDefault()
    setStep(step - 1)
  }

  return (
    <UserSignup
      title="建立一個帳戶"
      description="運動是保持健康的關鍵，請填寫以下資訊以創建您的帳號，加入我們，讓健康和活力成為生活常態！"
    >
      <form onSubmit={handleSubmit}>
        {step === 1 && <StepOne email={email} setEmail={setEmail} />}
        {step === 2 && <StepTwo name={name} setName={setName} />}
        {step === 3 && (
          <StepThree
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />
        )}

        <div className={styles2.form_group_row}>
          {step === 1 ? (
            <button
              className={styles2.btn_md_back}
              type="button"
              onClick={() => {
                router.push('/')
              }}
            >
              <h6 className={styles.h6}>回首頁</h6>
            </button>
          ) : (
            <button
              className={styles2.btn_md_back}
              type="button"
              onClick={handlePrevStep}
            >
              <h6 className={styles.h6}>上一步</h6>
            </button>
          )}
          {step < 3 ? (
            <button
              className={styles.btn_md}
              type="button"
              onClick={handleNextStep}
            >
              <h6 className={styles.h6}>下一步</h6>
            </button>
          ) : (
            <MyBtn buttonText="送出" />
          )}
        </div>
      </form>
    </UserSignup>
  )
}
