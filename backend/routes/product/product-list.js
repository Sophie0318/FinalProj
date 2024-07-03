import express from "express";
import db from "./../../utils/connect-mysql.js";

const router = express.Router();

const getListData = async (req) => {
  let success = false;
  let redirect = "";

  const perPage = 6; //每頁最多有幾筆
  let page = parseInt(req.query.page) || 1;
  if (page < 1) {
    redirect = "?page=1";
    return { success, redirect }; //res.redirect("?page=1"); //跳轉頁面。排除0以下的
  }

  const t_sql = `SELECT COUNT(1) totalRows FROM products`;
  const [[{ totalRows }]] = await db.query(t_sql);
  let totalPages = 0; //總頁數，預設值
  let rows = []; //分頁資料
  if (totalRows) {
    totalPages = Math.ceil(totalRows / perPage);

    if (page > totalPages) {
      redirect = `?page=${totalPages}`;
      return { success, redirect };
    }
    //取得分頁資料;
    const sql = `SELECT * FROM \`products\` LIMIT ${
      (page - 1) * perPage
    }, ${perPage}`;

    [rows] = await db.query(sql);
  }

  // res.json({ scccess, perPage, page, totalRows, rows });
  success = true;
  return {
    success,
    perPage,
    page,
    totalRows,
    totalPages,
    rows,
  };
};

router.get("/", async (req, res) => {
  const data = await getListData(req);
  if (data.redirect) {
    return res.redirect(data.redirect);
  }
  if (data.success) {
    res.render("product/list", data); //會跳錯誤，因沒有用模板(view)
  }
});

router.get("/api", async (req, res) => {
  try {
    const data = await getListData(req);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

export default router;
