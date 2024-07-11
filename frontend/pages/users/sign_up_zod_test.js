import React, { useState } from 'react'
import { useRouter } from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../../styles/sign-in.module.css'
import styles2 from '../../styles/user-sign-up.module.css'
import UserSignup from '@/components/layout/user-layout2'
import StepOne from '../../components/users/StepOne'
import StepTwo from '../../components/users/StepTwo'
import StepThree from '../../components/users/StepThree'
import MyBtn from '@/components/users/MyBtn'
import { z } from 'zod'

// 定義我的 Zod schema們

// 驗證電子信箱格式
const stepOneSchema = z.object({
  email: z.string().email({ message: '請輸入正確的電子信箱格式' }),
})
// 驗證姓名格式
const stepTwoSchema = z.object({
  name: z.string().min(1, { message: '請輸入一個字以上的姓名' }),
})
// 驗證密碼格式，確認密碼與密碼需相同
const stepThreeSchema = z.object({
  password: z.string().min(5, { message: '請輸入5個字以上的密碼' }),
  confirmPassword: z
    .string()
    .min(5, { message: '請輸入5個字以上的密碼' })

    // 使用 refine 方法來自定義驗證規則，確保確認密碼與密碼相同
    .refine(
      (confirmPasswordValue, context) =>
        confirmPasswordValue === context.parent.password,
      {
        message: '密碼不一致',
      }
    ),
})

//整個表單的 schema (有三個步驟)
const formSchema = z.object({
  stepOne: stepOneSchema,
  stepTwo: stepTwoSchema,
  stepThree: stepThreeSchema,
})

export default function SignUp() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // if (password !== confirmPassword) {
    //   alert('密碼不一致，請重新輸入')
    //   return
    // }
    const result = formSchema.safeParse(formData)
    if (result.success) {
      // 表單驗證成功
      console.log('註冊成功:', formData)
      // todo: 註冊成功的madule
      router.push('sign_in') // 跳到登入頁面
    } else {
      // 表單驗證失敗
      console.log('註冊失敗:', result.error.errors)
    }

    console.log('送出', name, email, password)

    const res = await fetch('http://localhost:3001/users/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // 要傳遞的資料
      body: JSON.stringify({ name, email, password }),
    })

    // const result = await res.json()
    // if (result.success) {
    //   alert('註冊成功，請登入')
    //   // todo: 註冊成功的madule
    //   router.push('sign_in') // 跳到登入頁面
    // } else {
    //   alert('Error 會員註冊失敗')
    // }
  }
  //多步驟表單
  const MultiStepForm = () => {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
      stepOne: { email: '' },
      stepTwo: { firstName: '', lastName: '' },
      stepThree: { password: '', confirmPassword: '' },
    })
    //按下一步鈕
    const handleNextStep = (e) => {
      e.preventDefault()
      setStep(step + 1)
    }
    //按下上一步鈕
    const handlePrevStep = (e) => {
      e.preventDefault()
      setStep(step - 1)
    }

    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData({
        ...formData,
        [step === 1 ? 'stepOne' : step === 2 ? 'stepTwo' : 'stepThree']: {
          ...formData[
            step === 1 ? 'stepOne' : step === 2 ? 'stepTwo' : 'stepThree'
          ],
          [name]: value,
        },
      })
    }
  }

  return (
    <UserSignup
      title="建立一個帳戶"
      description="運動是保持健康的關鍵，請填寫以下資訊以創建您的帳號，加入我們，讓健康和活力成為生活常態！"
      currentStep={step} //目前的狀態
    >
      <form onSubmit={handleSubmit} noValidate style={{ width: '100%' }}>
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
