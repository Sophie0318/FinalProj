import React from 'react'

export default function PageTitle() {
  return (
    <>
      <section className="bg-secondary d-flex flex-column justify-content-center align-items-center py-3">
        {/* TODO: 麵包屑做成元件 */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">首頁</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              找課程
            </li>
          </ol>
        </nav>
        <h4>多元的運動課程</h4>
        <h5>Find a Lesson fit you !</h5>
      </section>
    </>
  )
}
