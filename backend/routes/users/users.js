import express from 'express';
const router = express.Router();
import db from "../../utils/connect-mysql.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


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
//jwt編碼
router.get("/jwt1", (req, res) => {
    const data = {
        id: 20,
        account: "hahaha"
    }
    //把dev.env中的JWT_KEY加密
    const token = jwt.sign(data, process.env.JWT_KEY);
    console.log({ token });
    res.send(token);
    //加密的jwt的編碼 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImFjY291bnQiOiJoYWhhaGEiLCJpYXQiOjE3MjA0OTIyNTl9.4adY7ysms-CqkYNGqUpIwQhl7BaXDo2xGQrTWbPOy90
})
//jwt解碼
router.get("/jwt2", (req, res) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImFjY291bnQiOiJoYWhhaGEiLCJpYXQiOjE3MjA0OTIyNTl9.4adY7ysms-CqkYNGqUpIwQhl7BaXDo2xGQrTWbPOy90';
    let payload = {};
    try {
        payload = jwt.verify(token, process.env.JWT_KEY);
        console.log({ payload });
        res.send({ payload });
    } catch (ex) {
        //token解碼失敗
        payload = { ex };
    }
    res.send({ payload });
})




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