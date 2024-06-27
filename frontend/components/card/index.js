import React from 'react'

export default function Card() {
  return (
    <>
      <div className="card" style={{ width: '18rem' }}>
        <img
          src="https://picsum.photos/200"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h3 className="card-title">
            枯木逢春訓練法是什麼？大豬教練與你分享銀髮族...
          </h3>
          <p className="card-text d-flex justify-content-between">
            <span>體能鍛鍊</span>
            <span>2023.05.16</span>
          </p>
        </div>
      </div>
    </>
  )
}
