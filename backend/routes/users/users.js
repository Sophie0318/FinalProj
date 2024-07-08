import express from 'express';
const router = express.Router();
import db from "../../utils/connect-mysql.js";
import bcrypt from "bcrypt";

// router.get('/', (req, res) => {
//     // 假設這裡有一個用戶資料庫
//     const users = [
//         { id: 1, name: '小明' },
//         { id: 2, name: '小王' },
//     ];
// });



// 會員註冊 把會員在簽端填的資料寫入database
router.post('/add', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // 生成鹽值並雜湊密碼
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const [result] = await db.query(
            'INSERT INTO members (member_name, member_email, member_password) VALUES (?, ?, ?)',
            [name, email, hashedPassword]
        );

        res.json({ success: true, memberId: result.insertId });
    } catch (error) {
        console.error('加入會員時發生了點失誤:', error);
        res.status(500).json({ success: false, message: 'Database error' });
    }
});

export default router;


// //手機號碼
// app.get(/^\/m\/09\d{2}-?\d{3}-?\d{3}$/i, (req, res) => {
//     let u = req.url.slice(3);
//     u = u.split('?')[0];
//     u = u.split('-').join('');
//     res.json({ u });
// });
/*
說明
^、$為起始符號及結束符號
d{2} 2位數
-? -為選擇性輸入
i case insensitive 不區分大小寫
為避免資料有-及無-被視為為不同資料，所以幫他去掉-
*/