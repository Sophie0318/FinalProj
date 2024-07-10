import express from "express";
import db from "./../../utils/connect-mysql.js";
import moment from "moment-timezone";
import upload from "./../../utils/upload-imgs.js";
const router = express.Router();

const getLessonById = async (req) => {
    let success = false;
    let lesson = null;
    const lessonId = req.params.id;

    const sql = `SELECT 
        l.lesson_id,
        l.lesson_name,
        l.lesson_state,
        l.lesson_price,
        l.lesson_desc,
        l.lesson_date,
        GROUP_CONCAT(DISTINCT ct.code_desc ORDER BY ct.code_desc SEPARATOR '/') AS categories,
        li.lesson_img,
        c.coach_name,
        g.gym_name
    FROM 
        Lessons l
    JOIN 
        LessonCategories lc ON l.lesson_id = lc.lesson_id
    JOIN 
        CommonType ct ON lc.commontype_id = ct.commontype_id
    JOIN 
        LessonImgs li ON l.LessonImgs_id = li.LessonImgs_id
    JOIN 
        Coaches c ON l.coach_id = c.coach_id
    JOIN 
        Gyms g ON l.gym_id = g.gym_id
    WHERE 
        l.lesson_id = ?
    GROUP BY 
        l.lesson_id`;

        try {
            const [rows] = await db.query(sql, [lessonId]);
            if (rows.length > 0) {
                lesson = rows[0];
                success = true;
            }
        } catch (error) {
            console.error('Error fetching lesson by id:', error);
        }
    
        return { success, lesson };
};

const getLessonCategories = async () => {
    let success = false;
    let categories = [];
  
    try {
      const sql = `SELECT code_desc FROM CommonType WHERE code_type = 4;`;
      [categories] = await db.query(sql);
      success = true;
    } catch (error) {
      console.error('Error fetching lesson categories:', error);
    }
  
    return { success, categories };
  };

//
const getLessonType = async (req) => {
    let success = false;
    let categories = [];
  
    const sql = `SELECT * FROM CommonType WHERE code_type = 4;`;
    [categories] = await db.query(sql);
  
    success = true;
    return {
        success,
        categories,
        qs: req.query
    };
};

const getLesson = async (req) => {
    let success = false;
    let rows = [];
    
    let code_desc = req.query.code_desc || "";
    //  關鍵字的參數
    let keyword = req.query.keyword || "";
    let q_sql = ' WHERE 1 ';

    if(code_desc){
        const categories = code_desc.split('-');
        if (categories.length > 0) {
            q_sql += ` AND l.lesson_id IN (
                SELECT DISTINCT lc.lesson_id 
                FROM LessonCategories lc 
                JOIN CommonType ct ON lc.commontype_id = ct.commontype_id 
                WHERE ct.code_desc IN (${categories.map(cat => `'${cat}'`).join(',')})
            )`;
        }
    }

    if (keyword) {q_sql += ` AND l.lesson_name LIKE '%${keyword}%'`; }

    const sql = `SELECT 
        l.lesson_id,
        l.lesson_name,
        l.lesson_state,
        l.lesson_price,
        l.lesson_desc,
        l.lesson_date,
        GROUP_CONCAT(DISTINCT ct.code_desc ORDER BY ct.code_desc SEPARATOR '/') AS categories,
        li.lesson_img,
        c.coach_name,
        g.gym_name
    FROM 
        Lessons l
    JOIN 
        LessonCategories lc ON l.lesson_id = lc.lesson_id
    JOIN 
        CommonType ct ON lc.commontype_id = ct.commontype_id
    JOIN 
        LessonImgs li ON l.LessonImgs_id = li.LessonImgs_id
    JOIN 
        Coaches c ON l.coach_id = c.coach_id
    JOIN 
        Gyms g ON l.gym_id = g.gym_id
    ${q_sql}
    GROUP BY 
        l.lesson_id
    ORDER BY 
        l.lesson_id DESC`;

    try {
        [rows] = await db.query(sql);
        success = true;
    } catch (error) {
        console.error('Error fetching lessons:', error);
    }

    console.log('Received code_desc:', req.query.code_desc);
    console.log('Received keyword:', req.query.keyword);
    console.log('Generated SQL:', sql);

    return { success, rows };
};

router.get('/lessons', async (req, res) => {
    try {
        const data = await getLesson(req);
        if (data.redirect) {
            return res.redirect(data.redirect);
        }
        if (data.success) {
            res.render('articles/list', data);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

router.get('/categories', async (req, res) => {
    try {
      const data = await getLessonCategories();
      if (data.success) {
        res.json(data);
      } else {
        res.status(404).json({ success: false, message: 'No categories found' });
      }
    } catch (error) {
      console.error('Route error:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });

router.get("/api", async (req, res) => {
    try {
        const data = await getLesson(req);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

router.get("/api/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const sql = `
        SELECT 
          l.lesson_id,
          l.lesson_name,
          l.lesson_state,
          l.lesson_price,
          l.lesson_desc,
          DATE_FORMAT(l.lesson_date, '%Y-%m-%d %H:%i') AS lesson_date,
          GROUP_CONCAT(DISTINCT ct.code_desc ORDER BY ct.code_desc SEPARATOR '/') AS categories,
          li.lesson_img,
          c.coach_name,
          g.gym_name
        FROM 
          Lessons l
        JOIN 
          LessonCategories lc ON l.lesson_id = lc.lesson_id
        JOIN 
          CommonType ct ON lc.commontype_id = ct.commontype_id
        JOIN 
          LessonImgs li ON l.LessonImgs_id = li.LessonImgs_id
        JOIN 
          Coaches c ON l.coach_id = c.coach_id
        JOIN 
          Gyms g ON l.gym_id = g.gym_id
        WHERE 
          l.lesson_id = ?
        GROUP BY 
          l.lesson_id
      `;
  
      const [rows] = await db.query(sql, [id]);
      if (rows.length > 0) {
        res.json({ success: true, lesson: rows[0] });
      } else {
        res.status(404).json({ success: false, message: 'Lesson not found' });
      }
    } catch (error) {
      console.error('Error fetching lesson:', error);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  });

export default router;
