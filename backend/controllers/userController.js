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

            if (!user || user.length === 0) {
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
                html: `<p>${user[0].member_name} 您好</p><p>請點以下連結重新設定密碼：</p><a href="http://localhost:3000/users/gpt_change_password/${token}">重設密碼連結</a><br/><br/><p>連結會在 3分鐘 後或重設密碼後失效</p>`
            });
            //resetExpiration是一個時間戳記，用來判斷token是否過期
            const now = new Date();//現在時間
            const valid = new Date(now.getTime() + 180000);//有效期為從現在的時間起3分鐘後
            // 把有效期存成 resetExpiration 格式為 YYYY-MM-DD HH:mm:ss，再存到資料庫
            const resetExpiration = valid.toISOString().slice(0, 19).replace('T', ' ');

            //處理utc時區問題
            // 將 UTC 時間轉換為 UTC+8 時區的時間   
            const resetExpirationToUTC8 = new Date(resetExpiration + 'Z');
            // 轉換為 UTC+8 時區的時間
            resetExpirationToUTC8.setHours(resetExpirationToUTC8.getHours());

            await db.query('UPDATE members SET resetToken = ?, resetExpiration = ? WHERE member_id = ?', [token, resetExpirationToUTC8, user[0].member_id])
            res.json({ message: '申請成功！請確認電子郵件' });
        } catch (ex) {
            console.log(ex);
            res.status(500).json({ message: '伺服器內部錯誤' });
        }
    },
    //處理驗證resetToken是否過期
    verifyResetToken: async (req, res) => {
        const { token } = req.params;

        try {
            const [user] = await db.query('SELECT * FROM members WHERE resetToken = ?', [token]);

            if (!user || user.length === 0) {
                return res.status(400).json({ message: '重置連結已過期，請重新申請' });
            }
            //現在的時間
            const resetExpiration = new Date(user[0].resetExpiration);
            const currentTime = new Date();
            //如果resetExpiration小於現在時間戳記，代表token已過期
            if (resetExpiration < currentTime) {
                await db.query('UPDATE members SET resetToken = NULL, resetExpiration = NULL WHERE member_id = ?', [user[0].member_id]);
                return res.status(400).json({ message: '重置連結已過期，請重新申請' });
            }

            res.json({ message: '重置連結有效，請繼續' });
        } catch (ex) {
            console.log(ex);
            res.status(500).json({ message: '伺服器內部錯誤' });
        }
    },
    //處理會員重設密碼的function
    changePassword: async (req, res) => {
        const { token, newPassword } = req.body;

        try {
            const [user] = await db.query('SELECT * FROM members WHERE resetToken = ?', [token]);

            if (!user || user.length === 0) {
                return res.status(400).json({ message: '無效的或已過期的重置連結' });
            }
            //現在的時間
            const currentTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
            //如果resetExpiration小於現在時間戳記，代表token已過期，並清除resetToken與resetExpiration
            if (user[0].resetExpiration < currentTime) {
                await db.query('UPDATE members SET resetToken = NULL, resetExpiration = NULL WHERE member_id = ?', [user[0].member_id]);
                return res.status(400).json({ message: '重置連結已過期，請重新申請重置密碼' });
            }
            //使用bcrypt重新產生密碼，並更新密碼存到資料庫
            const hashedPassword = await bcrypt.hash(newPassword, 10);

            await db.query('UPDATE members SET member_password = ?, resetToken = NULL, resetExpiration = NULL WHERE member_id = ?', [hashedPassword, user[0].member_id]);

            res.json({ message: '密碼已成功重置' });
        } catch (ex) {
            console.log(ex);
            res.status(500).json({ message: '伺服器內部錯誤' });
        }
    }
};

export default userController;