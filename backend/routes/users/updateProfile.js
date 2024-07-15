// import express from "express";
// import db from "../../utils/connect-mysql.js";

// const router = express.Router();

// // 更新用戶資料並寫入資料庫
// router.post('/users/updateProfile', (req, res) => {
//     const { id, name, nick_name, mobile, address, city, district, password } = req.body;

//     // 姓名不可為空
//     if (!name) {
//         return console.log(res.status(400).json({ message: '姓名視為必填，不可為空白' }));
//     }
//     // 更新用戶資料並寫入資料庫
//     const updateQuery = `
//       UPDATE users
//       SET name = ?, nick_name = ?, mobile = ?, address = ?, city = ?, district = ?, password = ?
//       WHERE id = ?;
//     `;

//     db.query(updateQuery, [name, nick_name, mobile, address, city, district, password, id], (error, results) => {
//         if (error) {
//             console.error('更新失敗:', error);
//             return res.status(500).json({ message: '伺服器錯誤' });
//         }

//         if (results.affectedRows === 0) {
//             return res.status(404).json({ message: '用戶未找到' });
//         }

//         res.json({ message: '資料更新成功' });
//     });
// });

// export default router;