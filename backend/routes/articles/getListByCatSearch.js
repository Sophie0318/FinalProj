let q_sql = " WHERE 1 "
let categories = "fitness"
let searchBy = ''
let keyword = ''
let page = 1
let perPage = 12

q_sql += ` AND CT.code_id = ${categories} `
q_sql += ` AND ${searchBy} LIKE '%${keyword}%' ` 

let sql = `SELECT article_id, article_title, update_at, code_desc, article_cover
FROM Articles 
JOIN CommonType AS CT ON CT.code_type = 9 AND CT.code_id = Articles.code_id_fk
${q_sql}
ORDER BY update_at DESC
LIMIT ${(page-1) * perPage}, ${perPage};`