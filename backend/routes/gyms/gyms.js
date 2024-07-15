import express from "express";
import db from "../../utils/connect-mysql";

const router = express.Router();

// 獲取所有場館類型
const getGymFeatures = async (req) => {
  let success = false;
  let features = [];

  try {
    const sql = `SELECT feature_name FROM Features;`;
    [features] = await db.query(sql);
    success = true;
  } catch (error) {
    console.error("Error fetching features:", error);
  }

  return {
    success,
    features,
    qs: req.query, //???
  };
};

// 獲取所有場館
const getFullGymData = async (req) => {
  let success = false;

  //關鍵字的參數
  let keyword = req.query.keyword || "";
  let q_sql = " WHERE 1 ";
  let feature = req.query.feature_name || "";
  //篩選類別
  if (feature) {
    const features = feature.split("-");
    if (features.length > 0) {
      const features = features.map((feature) => db.escape(feature));
      q_sql += ` AND feature_name IN (${feature.join(", ")}) `;
    }
  }
  // 篩選關鍵字
  if (keyword) {
    const keyword_ = db.escape(`%${keyword}%`);
    q_sql += ` AND (gym_name LIKE '%${keyword_}%' OR address LIKE '%${keyword_}%') `;
  }

  const sql = `SELECT 
  gyms.*, 
  GROUP_CONCAT(DISTINCT features.feature_name) AS feature_list,
  GROUP_CONCAT( gym_images.image_filename) AS image_list
FROM 
  Gyms gyms
LEFT JOIN 
  GymFeatures gym_features ON gyms.gym_id = gym_features.gym_id
LEFT JOIN 
  Features features ON gym_features.feature_id = features.feature_id
LEFT JOIN 
  GymImages gym_images ON gyms.gym_id = gym_images.gym_id
  ${q_sql}
GROUP BY 
  gyms.gym_id;`;
  try {
    // 執行 SQL 查詢
    [rows] = await db.query(sql);
    success = true;
  } catch (error) {
    console.error("Error fetching gyms:", error);
  }

  console.log("有收到資料Feature:", req.query.feature_name);
  console.log("有收到資料Keyword:", req.query.keyword);
  console.log("有收到資料SQL:", sql);

  return {
    success,
    rows,
    qs: req.query,
  };
};

//獲取場館頁面
router.get("/gyms", async (req, res) => {
  try {
    const data = await getFullGymData(req);
    if (data.success) {
      res.json(data);
    } else {
      res.status(404).json({ success: false, message: "No gyms found" });
    }
  } catch (error) {
    console.error("Route error:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});
