import express from 'express';
import db from '../../utils/connect-mysql.js';
const router = express.Router();

// GET /members/getProfile/:member_id
router.get('/:member_id', (req, res) => {

    // 获取路由参数中的 member_id
    const memberId = +req.params.member_id || 0;;

    // 查询数据库以获取用户资料
    const query = 'SELECT member_id, member_name, nick_name, mobile, address, city_id, district_id FROM members WHERE member_id = ?';

    db.query(query, [memberId], (error, results) => {
        if (error) {
            console.error('Error fetching user profile:', error);
            return res.status(500).json({ message: '無法獲取用戶資料' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: '用戶不存在' });
        }

        // 返回用户资料
        const user = results[0];
        res.json(user);
    });
});

export default router;
