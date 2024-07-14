let categories = "1"
let page = 1
let perPage = 12
let sql = `SELECT article_id, article_title, update_at, code_desc, article_cover
FROM Articles 
JOIN CommonType AS CT ON CT.code_type = 9 AND CT.code_id = Articles.code_id_fk
WHERE CT.code_id = ${categories} 
ORDER BY update_at DESC
LIMIT ${(page-1) * perPage}, ${perPage};`