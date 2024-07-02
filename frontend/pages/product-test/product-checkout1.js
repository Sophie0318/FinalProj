import React from 'react'
import ProductCheckout1 from '@/components/product/product-checkout1'
import ProductAccordion from '@/components/product/accordion/product-accordion'
import Checkout1Btn from '@/components/product/button/checkout1-btn'

export default function ProductCheckout() {
  return (
    <>
      {/* 結帳進度 */}
      <div className="container">
        <ProductCheckout1 />
        {/* 結帳進度 */}
        {/* 手風琴 */}
        <ProductAccordion />
        <div className="col-12 col-md-8  mx-auto text-center">
          {/* 手風琴 end*/}
          <Checkout1Btn />
        </div>
      </div>
    </>
  )
}
