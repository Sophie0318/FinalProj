import express from "express";
import db from "./../../utils/connect-mysql.js";
import moment from "moment-timezone";
import upload from "./../../utils/upload-imgs.js";
const router = express.Router();

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
    let redirect = '';
    let rows = [];
    let totalPages = 0;
    let page = parseInt(req.query.page) || 1;
    
    const q_sql = ' WHERE 1 ';
    const t_sql = `SELECT COUNT(1) totalRows FROM Lessons ${q_sql}`;
    const [[{ totalRows }]] = await db.query(t_sql);

    if (totalRows) {
        success = true;
        const perPage = 5;
        totalPages = Math.ceil(totalRows / perPage);

        if (page < 1) {
            redirect = "?page=1";
            return { success, redirect };
        }
        if (page > totalPages) {
            redirect = `?page=${totalPages}`;
            return { success, redirect };
        }

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
GROUP BY 
    l.lesson_id
ORDER BY 
    l.lesson_id DESC;`;

    [rows] = await db.query(sql);
        rows.forEach((el) => {
            const m1 = moment(el.lesson_date);
            el.lesson_date = m1.isValid() ? m1.format('YYYY-MM-DD hh:mm:ss') : '';
        });
    }

    return { success, rows, totalPages, page };
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

router.get("/api", async (req, res) => {
    try {
        const data = await getLesson(req);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

export default router;
