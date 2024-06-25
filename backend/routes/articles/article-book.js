import express from "express";
import db from "./../../utils/connect-mysql.js";
import moment from "moment-timezone";
import upload from "./../../utils/upload-imgs.js";

const router = express.Router();

const dateFormat = 'YYYY-MM-DD';

const getArticleType = async (req) => {
  let success = false;
  let redirect = '';
  let subtypes = []

  const sql = `SELECT * FROM CommonType WHERE code_type = 10;`;
  [subtypes] = await db.query(sql);

  success = true;
    return {
      success,
      subtypes,
      qs: req.query
    };
  
  }

const getFullListData = async (req) => {
    let success = false;
    let redirect = '';

    let keyword = req.query.keyword || "";
    let update_begin = req.query.update_begin || "";
    let update_end = req.query.update_end || "";

    let q_sql = ' WHERE 1 ';
    if (keyword) {
      const keyword_ = db.escape(`%${keyword}%`);
      q_sql += ` AND (article_title LIKE ${keyword_} OR article_desc LIKE ${keyword_}) `;
    };

    if (update_begin) {
      const m = moment(update_begin);
      if (m.isValid()) {
        q_sql += ` AND update_at >= '${m.format('YYYY-MM-DD hh:mm:ss')}' `;
      }
    };

    if (update_end) {
      const m = moment(update_end);
      if (m.isValid()) {
        q_sql += ` AND update_at <= '${m.format('YYYY-MM-DD hh:mm:ss')}' `;
      }
    };


    const t_sql = `SELECT COUNT(1) totalRows FROM Articles ${q_sql}`;
    const [[{ totalRows }]] = await db.query(t_sql);

    const perPage = 5;
    let page = parseInt(req.query.page) || 1;
    let totalPages = 0;
    let rows = [];
    if (totalRows) {
      success = true;
      totalPages = Math.ceil(totalRows / perPage);

      if (page < 1) {
        redirect = "?page=1";
        return { success, redirect };
      };
      if (page > totalPages) {
        redirect = `?page=${totalPages}`;
        return { success, redirect };
      };

      const sql = `SELECT A.article_id, A.article_title, AImgs.articleimg_name, CT1.code_desc AS subtype, A.update_at FROM Articles AS A JOIN CommonType AS CT1 ON CT1.code_type = 10 AND A.article_subtype = CT1.code_id JOIN ArticleImgs AImgs ON A.article_id = AImgs.article_id_fk AND AImgs.articleimg_cover = 1 ${q_sql} GROUP BY A.article_id, A.article_title, subtype, articleimg_name, A.update_at ORDER BY article_id DESC LIMIT ${(page - 1) * perPage}, ${perPage};`;
      [rows] = await db.query(sql);
      rows.forEach((el) => {
        const m1 = moment(el.update_at);
        const m2 = moment(el.article_publish_date)
        el.update_at = m1.isValid() ? m1.format('YYYY-MM-DD hh:mm:ss') : '';
        // el.article_publish_date = m2.isValid() ? m2.format('YYYY-MM-DD hh:mm:ss') : '';

      })
    };

    success = true;
    return {
      success,
      perPage,
      page,
      totalRows,
      totalPages,
      rows,
      qs: req.query
    };

  };

  // 測試出現網路延遲, 或出現AJAX競速問題的時候用Abort解決
  // router.use((req,res,next)=>{
  //   const ms = 100 + Math.floor(Math.random()*2000);
  //   setTimeout(()=>{
  //     next()
  //   }, ms)
  // })

  // router.use((req,res,next)=>{
  //   let u = req.url.split("?")[0];
  //   if (u === '/') {
  //     return next();
  //   };
  //   if(req.session.admin){
  //     return next();
  //   } else {
  //     res.redirect("/login");
  //   };
  // });

  router.get("/", async (req, res) => {
    res.locals.title = "Express Practice";
    res.locals.pageName = 'article_list';
    const data = await getFullListData(req);
    if (data.redirect) {
      return res.redirect(data.redirect);
    }
    if (data.success) {
      res.render('articles/list', data);
    }
  });

  router.get("/api", async (req, res) => {
    const data = await getFullListData(req);
    res.json(data);
  });

  router.get("/api/subtypes", async (req, res) => {
    const data = await getArticleType(req);
    res.json(data);
  });

  router.get("/add", async (req, res) => {
    res.locals.title = "Express Practice";
    res.locals.pageName = 'article_add';
    res.render('articles/add');
  });

  // router.post("/add", upload.none(), async(req,res) => {
  //   res.json(req.body);
  // });

  router.post("/add", async (req, res) => {

    const sql = 'INSERT INTO Articles SET ?';

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
      success: !!result.affectedRows
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
      result: ''
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
    res.render('articles/edit', rows[0]);

  });

  router.put("/api/:article_id", upload.none(), async (req, res) => {
    const output = {
      success: false,
      code: 0,
      result: ''
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

  export default router;