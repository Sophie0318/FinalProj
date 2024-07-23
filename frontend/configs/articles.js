import { API_SERVER } from './api-path'

export const ArticlesAPI = `${API_SERVER}/articles/api`

export const ArticlesListData = `${ArticlesAPI}/listData`

export const ArticlesEntry = `${ArticlesAPI}/entry`

export const ArticlesIndex = `${ArticlesAPI}/articleIndex`

// POST 文章加入收藏
export const ArticlesAddFav = `${ArticlesAPI}/addfavarticle`

// DELETE 文章取消收藏
export const ArticlesRemoveFav = `${ArticlesAPI}/removefavarticle`

// POST 新增文章留言或回覆
export const ArticlesComment = `${ArticlesAPI}/comment`

// UPDATE 更新文章留言或回覆
export const ArticlesUpdateComment = `${ArticlesAPI}/comment`

// export const AB_ADD_POST = `${API_SERVER}/address-book/add`

// // `${API_SERVER}/address-book/api/${sid}`, method: DELETE
// export const AB_ITEM_DELETE = `${API_SERVER}/address-book/api`

// // `${API_SERVER}/address-book/api/${sid}`, method: GET, 取得單筆資料
// export const AB_GET_ITEM = `${API_SERVER}/address-book/api`

// // `${API_SERVER}/address-book/api/${sid}`, method: PUT, 修改單筆資料
// export const AB_UPDATE_PUT = `${API_SERVER}/address-book/api`
