import React from 'react'
import Link from 'next/link'

export default function SideBar() {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item">類別</li>

        <li className="list-group-item">
          <Link href="../product/productTraningList">居家訓練</Link>
        </li>

        <li className="list-group-item">
          <Link href="../product/productClothList">健身服飾</Link>
        </li>
        <li className="list-group-item">
          <Link href="../product/productFoodList">健康食品</Link>
        </li>
      </ul>
    </>
  )
}
