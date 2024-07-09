import express from "express";
import db from "./../../utils/connect-mysql.js";
import moment from "moment-timezone";
import upload from "./../../utils/upload-imgs.js";
const router = express.Router();

const getCoachType = async (req) => {
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

const getCoach = async (req) => {
    let success = false;
    let redirect = '';
    let rows = [];
    let totalPages = 0;
    let page = parseInt(req.query.page) || 1;
    
    const q_sql = ' WHERE 1 ';
    const t_sql = `SELECT COUNT(1) totalRows FROM Coaches ${q_sql}`;
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
        c.coach_id,
        c.coach_name,
        c.coach_phone,
        c.coach_gender,
        c.coach_info,
        c.coach_price,
        c.create_date,
        c.update_at,
        GROUP_CONCAT(DISTINCT ct.code_desc ORDER BY ct.code_desc SEPARATOR '/') AS skills,
        ci.coach_img,
        g.gym_name AS gym
    FROM 
        Coaches c
    JOIN 
        CoachSkills cs ON c.coach_id = cs.coach_id
    JOIN 
        CommonType ct ON cs.commontype_id = ct.commontype_id
    JOIN 
        CoachImgs ci ON c.coachImgs_id = ci.coachImgs_id
    JOIN 
        Gyms g ON c.gym_id = g.gym_id
    GROUP BY 
        c.coach_id, g.gym_name, ci.coach_img
    ORDER BY 
        c.coach_id DESC;`;
    
        [rows] = await db.query(sql);
        rows.forEach((el) => {
            const m1 = moment(el.update_at);
            el.lesson_date = m1.isValid() ? m1.format('YYYY-MM-DD hh:mm:ss') : '';
        });
    }

    return { success, rows, totalPages, page };
};

router.get('/coaches', async (req, res) => {
    try {
        const data = await getCoach(req);
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
        const data = await getCoach(req);
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

export default router;
