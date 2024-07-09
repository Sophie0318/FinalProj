import { createContext, useContext, useEffect, useState } from 'react'
import { JWT_LOGIN_POST } from '../configs/api-path'

const AuthContext = createContext()
// 保有狀態 usestate
// login
// logout
// getAuthHeader

// component

const storageKey = 'suan-auth'

//預設的狀態:還沒登入
const emptyAuth = {
  id: 0,
  email: '',
  name: '',
  token: '',
}

export function AuthContextProvider({ children }) {
  // 狀態 沒登入
  const [auth, setAuth] = useState(emptyAuth)

  //登入
  const login = async (email, password) => {
    try {
      const r = await fetch(JWT_LOGIN_POST, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const result = await r.json()
      if (result.success) {
        // token 和用戶的相關資料存到 localStorage
        localStorage.setItem(storageKey, JSON.stringify(result.data))
        // **** 如果登入成功，變更狀態 存到狀態中
        setAuth(result.data)
      }

      return result.success
    } catch (ex) {
      console.log(ex)
      return false
    }
  }

  //登出
  //清除狀態
  const logout = () => {
    localStorage.removeItem(storageKey)
    setAuth(emptyAuth)
  }

  //前端 getAuthHeader
  const getAuthHeader = () => {
    if (auth.token) {
      return {
        Authorization: `Bearer ${auth.token}`,
      }
    } else {
      return {}
    }
  }

  //判斷localstorage是否有登入的資料，用戶如果重刷頁面, 狀態可以由 localStorage 載入
  useEffect(() => {
    const str = localStorage.getItem(storageKey)
    if (!str) return //沒有登入的資料，就return
    try {
      const data = JSON.parse(str)
      if (data?.id && data?.token) {
        setAuth(data)
      }
    } catch (ex) {}
  }, [])

  return (
    <AuthContext.Provider value={{ login, logout, auth, getAuthHeader }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
export default AuthContext
