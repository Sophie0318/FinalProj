import React from 'react'
import Image from 'next/image'

export default function PhotoText() {
  return (
    <>
      <div className="container">
        {/* 第一組 - 彈性表面 */}
        <div
          className="row text-center align-items-center"
          style={{
            marginTop: '50px',
          }}
        >
          <h2 className="col-12 text-center my-5">產品特性</h2>
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
    </>
  )
}
