import express from 'express';
import db from '../../utils/connect-mysql.js';

const router = express.Router();

// POST /users/updateProfile/:member_id
router.post('/:member_id', (req, res) => {
    console.log('Received request for member ID:', req.params.member_id);
    console.log('Request body:', req.body);

    const memberId = req.params.member_id;
    const { name, nick_name, mobile, address, city, district, password } = req.body;

    // 構建 SQL 查詢
    let query = `
        UPDATE members 
        SET member_name = ?, nick_name = ?, mobile = ?, address = ?, city_id = ?, district_id = ?
    `;

    let queryParams = [name, nick_name, mobile, address, city, district];

    // 只有在提供密碼時才更新密碼
    if (password) {
        query += `, member_password = ?`;
        queryParams.push(password);
    }

    query += ` WHERE member_id = ?`;
    queryParams.push(memberId);

    console.log('Starting database query');
    db.query(query, queryParams, (error, results) => {
        console.log('Database query completed');

        if (error) {
            console.error('Error updating user profile:', error);
            return res.status(500).json({ message: 'Unable to update user profile', error: error.message });
        }

        if (results.affectedRows === 0) {
            console.log('No rows affected. User not found or no changes made.');
            return res.status(404).json({ message: 'User not found or no changes made' });
        }

        console.log('Profile updated successfully');
        console.log('Sending response');
        res.json({ message: 'Profile updated successfully', affectedRows: results.affectedRows });
        console.log('Response sent');
    });
});

export default router; 