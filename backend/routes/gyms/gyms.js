import express from "express";
import db from "../../utils/connect-mysql.js";

const router = express.Router();

//搜尋場館類型以渲染checkboxes
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

// 獲取場館列表
const getFullGymData = async (req) => {
  //關鍵字的參數
  let keyword = req.query.keyword || "";
  let feature = req.query.feature_list || "";
  let q_sql = " WHERE 1 "; //就算qs什麼都沒也會是1 = true
  //篩選類別
  if (feature) {
    const featuresArray = feature.split("-");
    if (featuresArray.length > 0) {
      const featuresResult = featuresArray.map((feature) => db.escape(feature));
      q_sql += ` AND gym_features.feature_name IN (${featuresResult.join(",")}) `;
    }
  }
  // 篩選關鍵字
  if (keyword) {
    const keyword_ = db.escape(`%${keyword}%`);
    q_sql += ` AND (gym_name LIKE ${keyword_} OR gym_address LIKE ${keyword_}) `;
  }

  const sql = `SELECT gyms.*, GROUP_CONCAT(DISTINCT features.feature_id) AS feature_id,GROUP_CONCAT(DISTINCT features.feature_name) AS feature_list, GROUP_CONCAT( gym_images.image_filename) AS image_list FROM Gyms gyms LEFT JOIN GymFeatures AS gym_features ON gyms.gym_id = gym_features.gym_id JOIN Features AS features ON gym_features.feature_id = features.feature_id LEFT JOIN GymImages gym_images ON gyms.gym_id = gym_images.gym_id ${q_sql} GROUP BY gyms.gym_id;`;
  try {
    // 執行 SQL 查詢
    const [rows] = await db.query(sql);
    // 對每一行數據進行處理
    const processedRows = rows.map((row) => {
      return {
        ...row, // 保留原有的所有屬性
        feature_list: row.feature_list.split(","), // 將 feature_list 轉換為陣列.
        image_list: row.image_list.split(","), // 將 image_list 轉換為陣列
      };
    });

    console.log(processedRows);
    return {
      processedRows,
      qs: req.query,
    };
  } catch (error) {
    console.error("Error fetching gyms:", error);
  }

  console.log("有收到資料Feature:", req.query.features);
  console.log("有收到資料Keyword:", req.query.keyword);
  console.log("有收到資料SQL:", sql);
};

//獲取場館頁面
router.get("/api", async (req, res) => {
  let data = "";
  try {
    data = await getFullGymData(req);
  } catch (error) {
    console.error("Route error:", error);
    data = { success: false, error: "Internal Server Error" };
  }
  res.json(data);
});

//得到課程類別
router.get("/features", async (req, res) => {
  try {
    const data = await getGymFeatures(req);
    if (data.success) {
      // 提取feature_name值到一個新陣列
      const featureNames = data.features.map((feature) => feature.feature_name);

      // 發送處理後的資料給前端
      res.json({
        success: true,
        features: featureNames,
      });
    } else {
      res.status(404).json({ success: false, message: "NO GymFeatures found" });
    }
  } catch (error) {
    console.error("Route error:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

export default router;
