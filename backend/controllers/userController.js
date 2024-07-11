// import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';
import db from "../utils/connect-mysql.js";


const userController = {
    forgotPassword: async (req, res) => {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ message: '電子信箱不得為空' });
        }

        try {
            const [user] = await db.query('SELECT * FROM members WHERE member_email = ?', [email]);

            if (!user) {
                return res.status(404).json({ message: '此電子信箱尚未被註冊' });
            }

            // 用戶信息以檢查是否正確獲取
            console.log('User found:', user);

            // resetToken 生成重置token，發送重置密碼的電子郵件，並將token存在database
            const token = Math.random().toString(16).slice(3);
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.MY_EMAIL,
                    pass: process.env.MY_PASSWORD
                }
            });

            await transporter.sendMail({
                from: process.env.MY_EMAIL,
                to: user[0].member_email,//你要寄給誰
                subject: '重設密碼',//信件主旨
                html: `<p>${user[0].member_name} 您好</p><p>請點以下連結重新設定密碼：</p><a href="http://localhost:3000/users/change_password/${token}">重設密碼連結</a><br/><br/><p>連結會在 3分鐘 後或重設密碼後失效</p>`
            });
            //resetExpiration是一個時間戳記，用來判斷token是否過期
            await db.query('UPDATE members SET resetToken = ?, resetExpiration = ? WHERE member_id = ?', [token, Date.now() + 180000, user.member_id]);

            res.json({ message: '申請成功！請確認電子郵件' });
        } catch (err) {
            console.warn(err);
            res.status(500).json({ message: '伺服器內部錯誤' });
        }
    },
};

export default userController;