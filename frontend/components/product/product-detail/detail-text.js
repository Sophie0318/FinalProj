import React from 'react'
import styles from '@/components/product/product-detail/detail-text.module.css'
// import DetailBtncard from '../button/detail-btncard'
export default function DetailText({ price, desc, name }) {
  return (
    <>
      <div
        className="col-md-12"
        style={{
          paddingLeft: '50px',
        }}
      >
        <h3 className={styles.fountText}>{name}</h3>
        {/* <h6 className={styles.fountP}>{name}</h6> */}
        <h3 className={styles.fountPrice}>NT${price}</h3>
        <h5 className={styles.fountTitle}>商品介紹｜</h5>
        <p className={styles.fountP}>
          {desc}
          {/* 可助肌肉延展與收縮，達到身體肌肉、血液循環的好處。學會筋膜按摩，對保健有長遠的好處。
          功能：重量輕，按摩舒緩肌肉、肩頸僵硬。適合：腿部、上下背脊與肩頸。特性：環保、節能產品、100％可回收、無味、不殘留汗漬、易清洗
          收費。可助肌肉延展與收縮，達到身體肌肉、血液循環的好處。學會筋膜按摩，對保健有長遠的好處。
          功能：重量輕，按摩舒緩肌肉、肩頸僵硬。適合：腿部、上下背脊與肩頸。特性：環保、節能產品、100％可回收、無味、不殘留汗漬、易清洗
          收費。可助肌肉延展與收縮，達到身體肌肉、血液循環的好處。學會筋膜按摩，對保健有長遠的好處。 */}
        </p>
        <p className={styles.fountP}>
          {/* 利用按摩球在需要放鬆的肌肉部位進行滾動，以自身的力量施加適當壓力按摩肌肉緊繃的部位，藉此達到放鬆筋膜的效果。舒緩深層肌肉緊繃問題，也可以減緩肌肉痠痛避免肌肉經攣，和局部的肌筋膜伸展效果。 */}
        </p>
        {/* <button className={styles.btnCart}>加入購物車</button> */}
      </div>
    </>
  )
}
