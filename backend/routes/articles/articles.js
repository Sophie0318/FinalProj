import express, { query } from "express";
import db from "../../utils/connect-mysql.js";
import moment from "moment-timezone";
import upload from "../../utils/upload-imgs.js";

const router = express.Router();

const dateFormat = "YYYY-MM-DD";

const getArticleList = async (req) => {
  // debug 用 message
  let success = false;

  // 有做分頁功能, 先檢查傳來的頁數是不是 < 1
  let page = req.query.page || 1;
  let redirect = '';

  // 篩選文章列表用的參數
  let category = req.query.category || '';
  let categoryID = 1;
  let keyword = req.query.keyword || "";
  let later_than = req.query.later_than || "";
  // 處理關鍵字搜尋參數
  let searchBy = [];
  if (req.query.searchBy) {
    if (typeof req.query.searchBy === "string") {
      // 單一關鍵字參數時 query 會是 string, 把它變成陣列
      searchBy[0] = req.query.searchBy
    } else {
      // 多重關鍵字參數時 query 會是 array
      searchBy = req.query.searchBy
    }
  }

  // 預設 WHERE 子句
  let q_sql = " WHERE 1 ";

  // 先判斷有沒有類別
  if (category) {
    switch (category) {
      case "fitness":
        categoryID = 1;
        break;
      case "healthy_diet":
        categoryID = 2;
        break;
      case "medical_care":
        categoryID = 3;
        break;
      case "mental_wellness":
        categoryID = 4;
        break;
      case "happy_learning":
        categoryID = 5;
        break;

      default:
        categoryID = 1;
        break;
    }
    q_sql += ` AND code_id = ${categoryID} `;
  }

  // 判斷有沒有指定關鍵字搜尋
  if (searchBy && keyword) {
    let q_sql_segment = ''

    searchBy.forEach((element) => {
      const keyword_ = db.escape(`%${keyword}%`)
      if (searchBy.indexOf(element) === 0) {
        q_sql_segment += ` ${element} LIKE ${keyword_} `
      } else {
        q_sql_segment += ` OR ${element} LIKE ${keyword_} `
      }
    })
    q_sql += ` AND (${q_sql_segment}) `
  }

  // 判斷有沒有時間篩選
  if (later_than) {
    const m = moment(later_than)
    if (m.isValid()) {
      q_sql += ` AND update_at >= '${m.format(dateFormat)}' `
    }
  }

  // 決定列表文章數 & 分頁用的參數
  const perPage = 12;
  let totalPages = 0;
  let totalRows = 0;
  let rows = [];
  // 得知篩選資料總筆數
  let t_sql = `SELECT COUNT(1) totalRows FROM Articles JOIN CommonType ON CommonType.code_type = 9 AND CommonType.code_id = Articles.code_id_fk ${q_sql}`;
  try {
    [[{ totalRows }]] = await db.query(t_sql);
    if (totalRows) {
      success = true;
      totalPages = Math.ceil(totalRows / perPage);
      if (page < 1) {
        page = 1;
        redirect = { page: "1" }
      }
      if (page > totalPages) {
        page = totalPages;
        redirect = { page: `${totalPages}` }
      }
    }
  } catch (error) {
    console.log('database query totalRows error: ', error)
    return { success }
  }

  // 從資料庫拿文章列表
  const sql = `SELECT article_id, article_title, update_at, code_desc, article_cover FROM Articles JOIN CommonType AS CT ON CT.code_type = 9 AND CT.code_id = Articles.code_id_fk ${q_sql} ORDER BY update_at DESC LIMIT ${(page - 1) * perPage}, ${perPage};`;

  try {
    [rows] = await db.query(sql);
    rows.forEach((element) => {
      const m = moment(element.update_at)
      element.update_at = m.isValid() ? m.format(dateFormat) : "";
    })
    success = true;
    return {
      success,
      perPage,
      page,
      totalRows,
      totalPages,
      rows,
      redirect,
      qs: req.query,
    }
  } catch (error) {
    console.log('database query list error: ', error)
    success = false
    return {
      success,
      rows
    }
  }
}

const getAuthorData = async (author_id, author_is_coach) => {
  let success = false
  let author_sql = ''
  let data = {}
  let result = {
    author_id: 0,
    author_name: '',
    author_desc: '',
    author_image: '',
    author_href: ''
  }

  try {
    if (author_is_coach === 0) {
      author_sql = `SELECT * FROM Authors WHERE author_id = ${author_id}`;
    } else {
      author_sql = `SELECT c.coach_id, c.coach_name, c.coach_info, ci.coach_img FROM Coaches c JOIN CoachImgs ci ON c.coachImgs_id = ci.coachImgs_id WHERE c.coach_id = ${author_is_coach}`;
    }
    [[data]] = await db.query(author_sql)
    if (data) {
      if (author_is_coach === 0) {
        result = {
          ...result,
          author_name: data.author_name,
          author_desc: data.author_desc,
          author_image: `/articles-img/${data.author_image}`,
          author_href: data.author_href
        }
      } else {
        result = {
          ...result,
          author_id: data.coach_id,
          author_name: data.coach_name,
          author_desc: data.coach_info,
          author_image: `/${data.coach_img}`
        }
      }
      success = !!result
    }
  } catch (error) {
    console.log('database fetch author error: ', error)
  }
  return {
    success,
    result
  }
}

router.get("/api/listData", async (req, res) => {
  const data = await getArticleList(req);
  res.json(data);
});

router.get("/api/articleIndex", async (req, res) => {
  // 定義最新文章及熱門文章
  let latestQuery = { ...req, query: { later_than: "2024-01-01" } };
  let hotQuery = { ...req, query: { searchBy: "article_title", keyword: "挑戰" } };
  // debug 用參數, 存列表的參數
  let success = false;
  let latestList = [];
  let hotList = [];

  // 從資料庫拿最新及熱門文章列表
  const latestData = await getArticleList(latestQuery);
  if (latestData.success) {
    latestList = latestData.rows;
  }
  const hotData = await getArticleList(hotQuery);
  if (hotData.success) {
    hotList = hotData.rows;
  }

  // 兩個列表都成功 success = true
  if (hotData.success && latestData.success) {
    success = true;
  }

  res.json({
    success,
    latestList,
    hotList
  })
})

router.get("/api/entry/:article_id", async (req, res) => {
  const output = {
    success: true,
    code: 0,
    result: {},
    furtherReading: [],
    authorInfo: {}
  }

  const article_id = +req.params.article_id || 0;
  if (!article_id) {
    return res.json(output)
  }

  let articleCategory = 0;
  let category = '';
  let author_id = 0;
  let author_is_coach = 0;
  const sql = `SELECT article_id, article_title, author_id, author_is_coach, update_at, code_id, article_cover, article_desc, article_content FROM Articles JOIN CommonType AS CT ON CT.code_type = 9 AND CT.code_id = Articles.code_id_fk JOIN Authors ON author_id_fk = author_id WHERE article_id = ${article_id}`;

  try {
    [[output.result]] = await db.query(sql);
    output.success = !!output.result
    if (output.success) {
      const m = moment(output.result.update_at)
      output.result.update_at = m.isValid() ? m.format(dateFormat) : "";
      articleCategory = output.result.code_id
      author_id = output.result.author_id
      author_is_coach = output.result.author_is_coach
    }
  } catch (error) {
    console.log('database fetch article error: ', error)
    output.code = 400
    output.message = `database fetch article error: ${error}`
  }

  try {
    if (articleCategory) {
      switch (articleCategory) {
        case 1:
          category = "fitness";
          break;
        case 2:
          category = "healthy_diet";
          break;
        case 3:
          category = "medical_care";
          break;
        case 4:
          category = "mental_wellness";
          break;
        case 5:
          category = "happy_learning";
          break;

        default:
          category = '';
          break;
      }
    }

    const queryParam = { query: { category: category } }

    const listData = await getArticleList(queryParam)
    if (listData.success) {
      output.furtherReading = listData.rows
      output.furtherReading.forEach((element) => {
        const m = moment(element.update_at)
        element.update_at = m.isValid() ? m.format(dateFormat) : "";
      })
    }
  } catch (error) {
    console.log('database fetch further reading list error: ', error)
    output.code = 400
    output.message += `database fetch further reading list error: ${error}`
  }

  try {
    const authorData = await getAuthorData(author_id, author_is_coach)
    if (authorData.success) {
      output.authorInfo = authorData.result
    }
  } catch (error) {
    console.log('database fetch author data error', error)
    output.code = 400
    output.message += `database fetch author data error: ${error}`
  }

  res.json(output)
})

router.post("/add", async (req, res) => {
  const sql = "INSERT INTO Articles SET ?";

  const m = moment(req.body.article_publish_date);
  req.body.article_publish_date = m.isValid() ? m.format(dateFormat) : null;

  let body = { ...req.body };
  body.update_at = new Date();
  const [result] = await db.query(sql, [body]);

  // const sql = 'INSERT INTO Articles (article_title, update_at, article_desc, article_content, article_publish_date) VALUES(?,?,?,?,NOW())';

  // const [result] = await db.query(sql, [
  //   req.body.article_title,
  //   req.body.update_at,
  //   req.body.article_desc,
  //   req.body.article_email,
  // ]);

  res.json({
    result,
    success: !!result.affectedRows,
  });
  //   {
  //     "fieldCount": 0,
  //     "affectedRows": 1,
  //     "insertId": 28,
  //     "info": "",
  //     "serverStatus": 2,
  //     "warningStatus": 0,
  //     "changedRows": 0
  // }
});

router.delete("/api/:article_id", async (req, res) => {
  const output = {
    success: false,
    code: 0,
    result: "",
  };
  const article_id = +req.params.article_id || 0;
  if (!article_id) {
    return res.json(output);
  }

  const sql = `DELETE FROM Articles WHERE article_id = ${article_id}`;
  const [result] = await db.query(sql);
  output.result = result;
  output.success = !!result.affectedRows;

  res.json(output);
});

router.get("/edit/:article_id", async (req, res) => {
  const article_id = +req.params.article_id || 0;
  if (!article_id) {
    return res.redirect("/articles");
  }

  const sql = `SELECT * FROM Articles WHERE article_id = ${article_id}`;
  const [rows] = await db.query(sql);
  if (!rows.length) {
    return res.redirect("/article-book");
  }

  let m = moment(rows[0].article_publish_date);
  rows[0].article_publish_date = m.format(dateFormat);

  // res.json(rows[0]);
  res.render("articles/edit", rows[0]);
});

router.put("/api/:article_id", upload.none(), async (req, res) => {
  const output = {
    success: false,
    code: 0,
    result: "",
  };
  const article_id = +req.params.article_id || 0;
  if (!article_id) {
    return res.json(output);
  }

  try {
    const sql = `UPDATE Articles SET ? WHERE article_id=${article_id}`;
    let body = { ...req.body };
    const [result] = await db.query(sql, [body, article_id]);

    output.result = result;
    output.body = req.body;
    output.success = !!(result.affectedRows && result.changedRows);
  } catch (error) {
    output.error = error;
  }

  res.json(output);
});

// const getArticleCategory = async (req) => {
//   let success = false;
//   let categories = [];

//   const sql = `SELECT code_id, code_desc FROM CommonType WHERE code_type = 9;`;
//   [categories] = await db.query(sql);

//   success = true;
//   return {
//     success,
//     categories,
//     qs: req.query,
//   };
// };
// router.get("/api/categories", async (req, res) => {
//   const data = await getArticleCategory(req);
//   res.json(data);
// });


export default router;