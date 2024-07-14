import express from 'express';
const router = express.Router();
import db from "../../utils/connect-mysql.js";
import userController from '../../controllers/userController.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
})
// jwt 登入
router.post("/login-jwt", async (req, res) => {
    const output = {
        success: false,
        code: 0,
        body: req.body,
        data: {
            sid: 0,
            email: "",
            name: "",
            token: "",
        },
    };

    try {
        // 修改 SQL 查詢以使用 member_email
        const sql = "SELECT * FROM members WHERE member_email=?";
        const [rows] = await db.query(sql, [req.body.member_email]);

        if (!rows.length) {
            // 帳號是錯的
            output.code = 400;
            return res.json(output);
        }

        // 使用 bcrypt 比較密碼
        const result = await bcrypt.compare(req.body.member_password, rows[0].member_password);
        if (!result) {
            // 密碼是錯的
            output.code = 420;
            return res.json(output);
        }

        // 登入成功
        output.success = true;
        const payload = {
            id: rows[0].member_id,
            email: rows[0].member_email,
        };

        const token = jwt.sign(payload, process.env.JWT_KEY);
        output.data = {
            id: rows[0].member_id,
            email: rows[0].member_email,
            name: rows[0].member_name,
            nick_name: rows[0].nick_name,
            avatar: rows[0].avatar,
            mobile: rows[0].mobile,
            address: rows[0].address,
            token,
        };
        console.log("Login successful, output.data:", output.data);
        res.json(output);
    } catch (error) {
        console.error("登入過程中發生錯誤:", error);
        output.code = 500;
        output.error = "伺服器內部錯誤";
        res.status(500).json(output);
    }
});
//忘記密碼的路由
router.post("/test_forget_password", userController.forgotPassword);
//驗證重設密碼的路由
router.get("/verify_reset_token", userController.verifyResetToken);
//重設密碼的路由
router.post("/changePassword", userController.changePassword);




export default router;