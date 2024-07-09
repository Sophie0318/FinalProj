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
  let category = req.query.category || ""; //網頁的分類
  let subCategory = req.query.type || ""; //健身護具的分類

  let product_sql = " WHERE 1 ";
  if (category === "productTraningList") {
    product_sql += " AND CommonType.commontype_id = 50"; //居家訓練
  }
  if (category === "productFoodList") {
    product_sql += " AND CommonType.commontype_id = 53"; //健康食品
  }
  if (category === "productClothList") {
    product_sql += " AND CommonType.commontype_id = 51"; // 健身服飾
  }
  if (category === "productProtectList") {
    product_sql += " AND CommonType.commontype_id = 52"; //健身護具
  }
  if (subCategory === "") {
  } else {
    // console.log(subCategory, "subcate");
    // console.log(req.query.type, "req.query.type");
    product_sql = " WHERE 1 ";
    if (subCategory === "knee") {
      product_sql += " AND CommonType.commontype_id = 54"; // 護膝
    }
    if (subCategory === "leg") {
      product_sql += " AND CommonType.commontype_id = 55"; // 護腿
    }
    if (subCategory === "ankle") {
      product_sql += " AND CommonType.commontype_id = 56"; // 護踝
    }
    if (subCategory === "waist") {
      product_sql += " AND CommonType.commontype_id = 57"; // 護腰
    }
  }

  let keyword = req.query.keyword || "";
  let where = " ";
  if (keyword) {
    where = ` AND \`Product_name\` LIKE '%${keyword}%' `;
  }
  //健身護具分類
  // let type = req.query.type || "";

  // if (type === "knee") {
  //   where += "AND CommonType.commontype_id =54";
  // }
  // if (type === "leg") {
  //   where += "AND CommonType.commontype_id =55";
  // }
  // if (type === "ankle") {
  //   where += "AND CommonType.commontype_id =56";
  // }
  // if (type === "waist") {
  //   where += "AND CommonType.commontype_id =57";
  // }

  const t_sql = `SELECT COUNT(1) AS totalRows FROM products join CommonType on Products.Product_type_id_fk = CommonType.commontype_id ${product_sql}${where}`;
  const [[{ totalRows }]] = await db.query(t_sql);
  console.log(t_sql);

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
       commontype.code_desc AS 'product_type'
		from Products 
      join CommonType
      on Products.Product_type_id_fk = commontype.commontype_id
       join CommonType as iCommonType 
      on Products.Suppliers_id_fk = iCommonType.commontype_id
        ${product_sql}${where} LIMIT 
       ${(page - 1) * perPage}, ${perPage}`;

    console.log(sql);

    [rows] = await db.query(sql, [(page - 1) * perPage, perPage]);
  }

  // res.json({ scccess, perPage, page, totalRows, rows });
  success = true;
  return {
    success,
    perPage, //每頁最多有幾筆
    page, //現在第幾頁
    totalRows, //總筆數
    totalPages, //總頁數
    rows, //分頁資料
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

router.get("/api/:pid", async (req, res) => {
  let success = false;
  const product_id = +req.params.pid || 0;

  if (!product_id) {
    return res.redirect("/product");
  }
  // const data = await getListData(req);
  // if (data.redirect) {
  //   return res.redirect(data.redirect);
  // }

  const sql = `select   
      Product_id,
      Product_name,
      Product_photo,
      Product_desc,
      Product_price,
       commontype.code_desc AS 'product_type'
		from Products 
      join CommonType
      on Products.Product_type_id_fk = commontype.commontype_id
       join CommonType as iCommonType 
      on Products.Suppliers_id_fk = iCommonType.commontype_id
      WHERE Product_id = ${product_id}`;
  const [data] = await db.query(sql);
  // console.log(data);
  success = true;
  if (data) {
    // 這裡應該使用模板渲染，否則使用 JSON 渲染
    return res.json({
      success,
      data,
    });

    // try {
    //   res.json(data); // 確保你已經配置了模板引擎，並有相應的模板
    // } catch (error) {
    //   console.error("模板渲染錯誤:", error);
    //   res.json(data); // 在未配置模板引擎的情況下，先使用 JSON 返回數據
    // }
  }
}); //商品細節

router.get("/api", async (req, res) => {
  try {
    const data = await getListData(req);
    return res.json(data);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
});

export default router;
