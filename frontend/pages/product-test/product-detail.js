import React from 'react'
import Image from 'next/image'
import styles from '@/styles/product-detail.module.css'
import Layout2 from '@/components/layout/layout2'

export default function ProductDetail() {
  return (
    <Layout2>
      {/* 卡片輪播 */}
      <div className="container mt-4 ">
        <div className="row">
          <div className="col-12 col-md-6">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active ">
                  <img
                    src="/product-img/cloth.jpg"
                    className=" w-75"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/product-img/cloth.jpg"
                    className=" w-75"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/product-img/cloth.jpg"
                    className=" w-75"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="row">
              <div className="col-6 col-md-3 mt-3">
                <img
                  src="/product-img/cloth.jpg"
                  className="img-fluid"
                  alt="Cloth 1"
                />
              </div>
              <div className="col-6 col-md-3 mt-3">
                <img
                  src="/product-img/cloth.jpg"
                  className="img-fluid"
                  alt="Cloth 2"
                />
              </div>
              <div className="col-6 col-md-3 mt-3">
                <img
                  src="/product-img/cloth.jpg"
                  className="img-fluid"
                  alt="Cloth 3"
                />
              </div>
              <div className="col-6 col-md-3 mt-3">
                <img
                  src="/product-img/cloth.jpg"
                  className="img-fluid"
                  alt="Cloth 4"
                />
              </div>
            </div>
          </div>
          <div
            className="col-md-4"
            style={{
              paddingLeft: '50px',
            }}
          >
            <h3 className={styles.fountText}>筋膜按摩球</h3>
            <h6 className={styles.fountP}>
              放鬆肌肉 按摩球可以有效放鬆身體的緊張肌肉和筋膜。
            </h6>
            <h3 className={styles.fountPrice}>NT$1200</h3>
            <h5 className={styles.fountTitle}>商品介紹｜</h5>
            <p className={styles.fountP}>
              可助肌肉延展與收縮，達到身體肌肉、血液循環的好處。學會筋膜按摩，對保健有長遠的好處。
              功能：重量輕，按摩舒緩肌肉、肩頸僵硬。適合：腿部、上下背脊與肩頸。特性：環保、節能產品、100％可回收、無味、不殘留汗漬、易清洗
              收費。可助肌肉延展與收縮，達到身體肌肉、血液循環的好處。學會筋膜按摩，對保健有長遠的好處。
              功能：重量輕，按摩舒緩肌肉、肩頸僵硬。適合：腿部、上下背脊與肩頸。特性：環保、節能產品、100％可回收、無味、不殘留汗漬、易清洗
              收費。可助肌肉延展與收縮，達到身體肌肉、血液循環的好處。學會筋膜按摩，對保健有長遠的好處。
            </p>
            <p className={styles.fountP}>
              利用按摩球在需要放鬆的肌肉部位進行滾動，以自身的力量施加適當壓力按摩肌肉緊繃的部位，藉此達到放鬆筋膜的效果。舒緩深層肌肉緊繃問題，也可以減緩肌肉痠痛避免肌肉經攣，和局部的肌筋膜伸展效果。
            </p>
            <button className={styles.btnCart}>加入購物車</button>
          </div>
        </div>
        {/* 第二區 */}
        <div className="container">
          {/* 第一組 - 彈性表面 */}
          <div
            className="row text-center align-items-center"
            style={{
              marginTop: '120px',
            }}
          >
            <h2 className={`col-12 text-center my-5 ${styles.sectionTitle}`}>
              產品特性
            </h2>
            <div className="col-md-6 mt-5">
              <h2>彈性表面</h2>
              <p>
                彈性表面
                硬度50D舒緩筋膜不刺激，持續施壓，滾動按摩大肌群，深層紓壓。硬度50D最剛好，12CM大尺寸，可助肌肉延展與收縮，達到身體肌肉、血液循環的好處。學會筋膜按摩，對保健有長遠的好處。筋膜按摩球的彈性表面是一個非常重要的特性，它不僅影響按摩效果，還關係到使用者的舒適度和安全性
              </p>
            </div>
            <div className="col-md-6">
              <img
                className="w-75"
                src="/product-img/three.jpg"
                alt=""
                style={{ borderRadius: '50px 50px 50px 0px' }}
              />
            </div>
          </div>
          {/* 第二組 - 大尺寸好滾動 */}
          <div className="row text-center align-items-center">
            <div className="col-md-6 order-md-2 mt-5">
              <h2>大尺寸好滾動</h2>
              <p>適合大肌群按摩，按摩腿部、臀部、胸肌等運動前後都可以使用</p>
              <p>
                大尺寸的筋膜按摩球在肌肉放鬆和疼痛緩解方面具有顯著的優勢，特別是對於需要大面積肌肉按摩的人群來說。通過正確使用和選擇合適的產品，你可以有效地利用大尺寸按摩球來提升身體的健康和舒適度。如果你正在尋找一種便捷且多功能的按摩工具，大尺寸的筋膜按摩球無疑是個理想的選擇。
              </p>
            </div>
            <div className="col-md-6 order-md-1">
              <img
                className="w-75"
                src="/product-img/one.png"
                alt=""
                style={{ borderRadius: '50px 50px 50px 0px' }}
              />
            </div>
          </div>
          {/* 第三組 - 特殊紋理設計 */}
          <div className="row text-center align-items-center">
            <div className="col-md-6 mt-5">
              <h2>特殊紋理設計</h2>
              <p>
                球狀和特殊紋理有更好的貼合效果可自我按摩需要部位，達到深層按摩的需要
              </p>
              <p>
                筋膜按摩球的特殊紋理設計在提升按摩效果和多樣化使用方面具有獨特的優勢。這些紋理可以根據不同的設計目標提供深層組織按摩、刺激血液循環、增加抓地力以及針對性地放鬆緊張的肌肉群
              </p>
            </div>
            <div className="col-md-6">
              <img
                className="w-75"
                src="/product-img/three.jpg"
                alt=""
                style={{ borderRadius: '50px 50px 50px 0px' }}
              />
            </div>
          </div>
        </div>
        <div className="row  text-center align-items-center d-flex">
          <div className="col-12 col-md-12">
            <h2
              style={{
                marginTop: '50px',
                marginBottom: '50px',
              }}
            >
              你可能喜歡
            </h2>
          </div>
          <div className="col-12 col-md-12 d-flex flex-wrap justify-content-center">
            <div className={styles.cardsize}>
              <img
                src="/product-img/大豆.webp"
                alt=""
                className="img-fluid"
                style={{
                  marginBottom: '110px',
                }}
              />
              <div className={styles.card}>
                <h6
                  style={{
                    paddingRight: '100px',
                  }}
                >
                  乳清蛋白
                </h6>
                <p>每份蛋白質含量高達....</p>
              </div>
            </div>
            <div className={styles.cardsize}>
              <img
                src="/product-img/大豆.webp"
                alt=""
                className="img-fluid"
                style={{
                  marginBottom: '110px',
                }}
              />
              <div className={styles.card}>
                <h6
                  style={{
                    paddingRight: '100px',
                  }}
                >
                  乳清蛋白
                </h6>
                <p>每份蛋白質含量高達....</p>
              </div>
            </div>
            <div className={styles.cardsize}>
              <img
                src="/product-img/大豆.webp"
                alt=""
                className="img-fluid"
                style={{
                  marginBottom: '110px',
                }}
              />
              <div className={styles.card}>
                <h6
                  style={{
                    paddingRight: '100px',
                  }}
                >
                  乳清蛋白
                </h6>
                <p>每份蛋白質含量高達....</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  )
}
