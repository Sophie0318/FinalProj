import React, { useEffect, useState } from 'react'
import Layout2 from '@/components/layout/layout2'

export default function ArticleAdd() {
  const [subtypes, setSubtypes] = useState({
    success: false,
    subtypes: [],
  })

  useEffect(() => {
    fetch(`http://localhost:3001/articles/api/subtypes`)
      .then((r) => r.json())
      .then((data) => {
        setSubtypes(data)
      })
  }, [])

  const [myForm, setMyForm] = useState({
    article_title: '',
    article_subtype: '',
    article_publish_date: '',
    article_desc: '',
    article_content: '',
  })

  const onChange = (e) => {
    console.log(e.target.value)
    const newForm = {
      ...myForm,
      [e.target.name]: e.target.value,
    }
    setMyForm(newForm)
  }

  return (
    <>
      <Layout2 title="新增文章" pageName="articles">
        <div className="container justify-content-center">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="card">
                <div className="card-body">
                  <form name="form1" onSubmit={() => {}} onInput={() => {}}>
                    <h2>新增項目</h2>
                    <div className="mb-3">
                      <label htmlFor="article_title" className="form-label">
                        文章標題:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="article_title"
                        name="article_title"
                        value={myForm.article_title} // value綁定一個變數, rerender 也不會變, 除非設定 onChange
                        onChange={onChange}
                      />
                      <div id="article_titleHelp" className="form-text"></div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="article_subtype" className="form-label">
                        文章分類:
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="article_subtype"
                        name="article_subtype"
                        value={myForm.article_subtype}
                        onChange={onChange}
                      />
                      <div id="article_subtypeHelp" className="form-text"></div>
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="article_publish_date"
                        className="form-label"
                      >
                        文章上架時間:
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="article_publish_date"
                        name="article_publish_date"
                        value={myForm.article_publish_date}
                        onChange={onChange}
                      />
                      <div
                        id="article_publish_dateHelp"
                        className="form-text"
                      ></div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="article_desc" className="form-label">
                        文章編按:
                      </label>
                      <textarea
                        className="form-control"
                        id="article_desc"
                        name="article_desc"
                        cols="30"
                        rows="3"
                        value={myForm.article_desc}
                        onChange={onChange}
                      ></textarea>
                      <div id="article_descHelp" className="form-text"></div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="article_content" className="form-label">
                        文章內容:
                      </label>
                      <textarea
                        className="form-control"
                        id="article_content"
                        name="article_content"
                        cols="30"
                        rows="3"
                        value={myForm.article_content}
                        onChange={onChange}
                      ></textarea>
                      <div id="article_contentHelp" className="form-text"></div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      送出
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="staticBackDrop"
          tabIndex="-1"
          aria-labelledby="staticBackDropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackDropLabel">
                  確認新增
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">成功新增</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  繼續新增
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {}}
                >
                  回到列表
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout2>
    </>
  )
}
