import React from 'react'
import Layout2 from '@/components/layout/layout2'
import Index from '@/components/joinMember'
import IndexPhoto from '@/components/product/index-photo'

export default function ProductTest() {
  return (
    <Layout2 pageName="products">
      <main>
        <IndexPhoto />
        <Index />
      </main>
    </Layout2>
  )
}
