import express from "express";
import db from "../../utils/connect-mysql.js";

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
  // let traning = req.query.traning || "";
  // let protection = req.query.protection || "";
  // let food = req.query.food || "";
  // let cloth = req.query.cloth || "";

  // let where = " WHERE 1 ";
  // if (traning) {
  //   where += ` AND \`CommonType.commontype_id\` = 50 ${traning}`;
  // }

  const t_sql = ` SELECT COUNT(1) AS totalRows
    FROM Products
    JOIN CommonType ON Products.Product_type_id_fk = CommonType.commontype_id
    WHERE CommonType.commontype_id = 50;`;
  const [[{ totalRows }]] = await db.query(t_sql);
  let totalPages = 0; //總頁數，預設值
  let rows = []; //分頁資料
  if (totalRows) {
    success = true;
    totalPages = Math.ceil(totalRows / perPage);

    if (page > totalPages) {
      redirect = `?page=${totalPages}`;
      return { success, redirect };
    }
    //取得分頁資料;
    const sql = `select   
      Product_id,
      Product_name,
      Product_photo,
      Product_desc,
      Product_price,
       commontype.code_desc 'product_type'
		from Products 
      join CommonType
      on Products.Product_type_id_fk = commontype.commontype_id
       join CommonType as iCommonType 
      on Products.Suppliers_id_fk = iCommonType.commontype_id
       where commontype.commontype_id =50 LIMIT 
       ${(page - 1) * perPage}, ${perPage}`;

    [rows] = await db.query(sql, [(page - 1) * perPage, perPage]);
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
    error: "finish query",
  };
};

router.get("/", async (req, res) => {
  const data = await getListData(req);
  if (data.redirect) {
    return res.redirect(data.redirect);
  }
  if (data.success) {
    // 這裡應該使用模板渲染，否則使用 JSON 渲染
    try {
      res.render("product/list", data); // 確保你已經配置了模板引擎，並有相應的模板
    } catch (error) {
      console.error("模板渲染錯誤:", error);
      res.json(data); // 在未配置模板引擎的情況下，先使用 JSON 返回數據
    }
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
