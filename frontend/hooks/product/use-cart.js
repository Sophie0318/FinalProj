// import { createContext, useContext, useState } from 'react'

// const CartContext = createContext(null)

// export function CarProvider({ children }) {
//   const [item, setItem] = useState(() => {
//     if (typeof window !== 'undefined') {
//       const savedItems = localStorage.getItem('shoppingCart')
//       return savedItems ? JSON.parse(savedItems) : []
//     }
//     return []
//   }) // 購物車陣列  如果在客戶端環境中（即瀏覽器中），就從 localStorage 中讀取名為 'shoppingCart' 的資料。如果資料存在，則將其解析為 JSON 格式，作為初始的 item 狀態；如果資料不存在或者無法解析，則初始為空陣列 []

//   //遞增
//   const increaseItem = (id) => {
//     const nextItem = item.map((v) => {
//       if (v.Product_id === id) return { ...v, qty: v.qty + 1 }
//       else return v
//     })
//     setItem(nextItem)
//     localStorage.setItem('shoppingCart', JSON.stringify(nextItem))
//   }

//   //遞減
//   const decreaseItem = (id) => {
//     const nextItem = item.map((v) => {
//       if (v.Product_id === id && v.qty > 1) return { ...v, qty: v.qty - 1 }
//       else return v
//     })
//     setItem(nextItem)
//     localStorage.setItem('shoppingCart', JSON.stringify(nextItem))
//   }
//   //移除
//   const removeItem = (id) => {
//     const nextItem = item.filter((v) => {
//       return v.Product_id !== id
//     })
//     setItem(nextItem)
//     localStorage.setItem('shoppingCart', JSON.stringify(nextItem))
//   }
//   return (
//     <CartContext.Provider value={{ increaseItem, decreaseItem, removeItem }}>
//       {children}
//     </CartContext.Provider>
//   )
// }

// export const useCart = () => useContext(CartContext)
