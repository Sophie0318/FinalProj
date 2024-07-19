import express from 'express';
const router = express.Router();

import db from '../../utils/connect-mysql.js';
import jsonwebtoken from 'jsonwebtoken';
// import 'dotenv/config.js';


router.post('/', async function (req, res, next) {
    console.log(JSON.stringify(req.body));

    if (!req.body.providerId || !req.body.uid) {
        return res.json({ status: 'error', message: '缺少google登入資料' });
    }

    const { memberName, email, uid } = req.body;
    let userData;
    const google_uid = uid;

    try {
        // 查詢資料庫是否有同 google_uid 的資料
        const [rows] = await db.execute('SELECT * FROM Members WHERE google_uid = ?', [google_uid]);

        let returnUser;

        if (rows.length > 0) {
            // 用户已存在
            const user = rows[0];
            userData = {
                member_id: user.member_id,
                member_name: user.member_name,
                member_email: user.member_email,
                google_uid: user.google_uid,
            };
        } else {
            // 用户不存在，創建新用户
            const [result] = await db.execute(
                'INSERT INTO Members (member_name, member_email, google_uid) VALUES (?, ?, ?)',
                [memberName, email, google_uid]
            );

            userData = {
                member_id: result.insertId,
                member_name: memberName,
                member_email: email,
                google_uid
            };
        }

        // 生成訪問令牌 (access token)
        const payload = {
            id: userData.member_id,
            email: userData.member_email,
        };

        const accessToken = jsonwebtoken.sign(payload, process.env.JWT_KEY, {
            expiresIn: '3d',// 令牌效期 3 天
        });

        // 使用 httpOnly cookie 讓瀏覽器存 access token
        res.cookie('accessToken', accessToken, { httpOnly: true });

        res.json({
            success: true,
            data: {
                ...userData,  // 展開 userData
                token: accessToken  // 包含生成的 token
            }
        });

        // 传送 access token 回应 (React 可以存储在 state 中使用)
        // return res.json({
        //     status: 'success',
        //     data: { accessToken },
        // });
    } catch (error) {
        console.error('Error handling Google login:', error);
        return res.status(500).json({ status: 'error', message: '伺服器內部錯誤' });
    }
});

export default router;
