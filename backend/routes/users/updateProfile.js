import express from 'express';
import db from '../../utils/connect-mysql.js'; // 調整路徑以匹配你的項目結構

const router = express.Router();

// POST /users/updateProfile/:member_id
router.post('/:member_id', (req, res) => {
    console.log('Received request for member ID:', req.params.member_id);
    console.log('Request body:', req.body);
    const memberId = req.params.member_id;
    const { name, nick_name, mobile, address, city, district, password } = req.body;

    // 更新用户资料的 SQL 查询
    const query = `
        UPDATE members 
        SET member_name = ?, nick_name = ?, mobile = ?, address = ?, city_id = ?, district_id = ?, member_password = ?
        WHERE member_id = ?
    `;

    db.query(query, [name, nick_name, mobile, address, city, district, password, memberId], (error, results) => {
        if (error) {
            console.error('更新用户资料时出错:', error);
            return res.status(500).json({ message: '无法更新用户资料' });
        }

        // 返回成功信息
        res.json({ message: '资料更新成功' });
    });
});

export default router;
