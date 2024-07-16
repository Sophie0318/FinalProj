import express from 'express';
import db from '../../utils/connect-mysql.js';

const router = express.Router();

// 定義 executeQuery 函數（保持不變）
const executeQuery = (query, params) => {
    console.log('Entering executeQuery function');
    return new Promise((resolve, reject) => {
        console.log('Executing query:', query);
        console.log('Query params:', params);
        const queryTimeout = setTimeout(() => {
            reject(new Error('Query execution timed out'));
        }, 10000); // 10 seconds timeout

        db.query(query, params, (error, results) => {
            clearTimeout(queryTimeout);
            if (error) {
                console.error('Database query error:', error);
                reject(error);
            } else {
                console.log('Database query completed successfully');
                console.log('Query results:', results);
                resolve(results);
            }
        });
    }).catch(error => {
        console.error('Caught error in executeQuery:', error);
        throw error;
    });
};

router.post('/:member_id', async (req, res) => {
    console.log('Received POST request to /users/updateProfile/:member_id');

    // 檢查數據庫連接
    if (!db || typeof db.query !== 'function') {
        console.error('Database connection is not properly initialized');
        return res.status(500).json({ message: 'Internal server error: Database connection issue' });
    }

    try {
        console.log('Entering try block');
        const memberId = req.params.member_id;
        console.log('Member ID:', memberId);
        let { name, nick_name, mobile, address, city, district, password } = req.body;
        console.log('Request body:', { name, nick_name, mobile, address, city, district, password: password ? '[REDACTED]' : undefined });

        // 處理空字符串和零值
        mobile = mobile || null;
        address = address || null;
        city = city || null;
        district = district || null;

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

        query += ` WHERE members.member_id = ?`;
        queryParams.push(memberId);

        console.log('Starting database query');
        console.log('Query:', query);
        console.log('Query Params:', queryParams.map(param => param === password ? '[REDACTED]' : param));

        console.log('Before executing update query');
        // 執行更新查詢
        const updateResult = await executeQuery(query, queryParams);
        console.log('After executing update query');
        console.log('Update result:', updateResult);

        if (updateResult.affectedRows === 0) {
            console.log('No rows affected. User not found or no changes made.');
            return res.status(404).json({ message: 'User not found or no changes made' });
        }

        console.log('Before executing select query');
        // Query updated member data
        const selectQuery = `SELECT * FROM members WHERE member_id = ?`;
        const selectResult = await executeQuery(selectQuery, [memberId]);
        console.log('After executing select query');

        if (selectResult.length === 0) {
            console.log('No member found after update');
            return res.status(404).json({ message: 'No member found after update' });
        }

        console.log('Profile updated successfully');
        console.log('Sending response');
        const updatedMember = selectResult[0];
        res.json({ message: 'Profile updated successfully', member: updatedMember });

    } catch (error) {
        console.error('Error in update process:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

export default router;