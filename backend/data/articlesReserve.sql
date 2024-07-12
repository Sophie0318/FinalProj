-- reserved table to store images other than cover
create table ArticleImgs( 
articleimg_id int primary key auto_increment,
articleimg_name varchar(100),
article_id_fk int -- belongs to which article 1~120
);

INSERT INTO ArticleImgs (articleimg_name, article_id_fk)
SELECT 'imageName1.jpg', id
FROM (
    SELECT 1 AS id UNION ALL
    SELECT 2 UNION ALL
    SELECT 3 UNION ALL
    SELECT 4 UNION ALL
    SELECT 5 UNION ALL
    SELECT 6 UNION ALL
    SELECT 7 UNION ALL
    SELECT 8 UNION ALL
    SELECT 9 UNION ALL
    SELECT 10 UNION ALL
    SELECT 11 UNION ALL
    SELECT 12 UNION ALL
    SELECT 13 UNION ALL
    SELECT 14 UNION ALL
    SELECT 15 UNION ALL
    SELECT 16 UNION ALL
    SELECT 17 UNION ALL
    SELECT 18 UNION ALL
    SELECT 19 UNION ALL
    SELECT 20 UNION ALL
    SELECT 21 UNION ALL
    SELECT 22 UNION ALL
    SELECT 23 UNION ALL
    SELECT 24
) AS ids;



INSERT INTO CommonType (code_type, code_type_desc, code_id, code_desc, code_remark)
VALUES
    (10, '關鍵字', 1, '自我成長', NULL),
    (10, '關鍵字', 2, '人際關係', NULL),
    (10, '關鍵字', 3, '兩性家庭', NULL),
    (10, '關鍵字', 4, '醫療保健', NULL),
    (10, '關鍵字', 5, '飲食', NULL),
    (10, '關鍵字', 6, '運動', NULL),
    (10, '關鍵字', 7, '熟齡學習', NULL),
    (10, '關鍵字', 8, '美妝保養', NULL),
    (10, '關鍵字', 9, '日常穿搭', NULL),
    (10, '關鍵字', 10, '職場就業', NULL),
    (10, '關鍵字', 11, '熟年法律', NULL),
    (10, '關鍵字', 12, '退休理財', NULL),
    (10, '關鍵字', 13, '抗老', NULL),
    (10, '關鍵字', 14, '逆齡', NULL),
    (10, '關鍵字', 15, '第三人生', NULL),
    (10, '關鍵字', 16, '婚姻', NULL),
    (10, '關鍵字', 17, '家庭關係', NULL),
    (10, '關鍵字', 18, '退休生活', NULL),
    (10, '關鍵字', 19, '主題旅行', NULL),
    (10, '關鍵字', 20, '圓夢', NULL);

create table KeywordRelation(
keywordrelation_id int primary key auto_increment,
article_id_fk int, -- which article, range 1-120
code_id_fk int -- keywords link to commontype table: code_type_id 10 code_id 1~20
);
-- keyword range 1-20
-- INSERT INTO KeywordRelation (article_id_fk, code_id_fk)
-- VALUES



-- check all main type and sub type
SELECT 
*,
(SELECT code_desc FROM CommonType AS CT2 WHERE CT2.code_type = 9 AND CT1.code_remark = CT2.code_id) 'maintype'
FROM CommonType AS CT1
WHERE code_type = 10;

-- check all main type
SELECT 
*
FROM CommonType
WHERE code_type = 9;

-- check all article categories
SELECT 
*
FROM CommonType
WHERE code_type = 10;

-- check an article's category
SELECT 
article_title, 
article_subtype, 
code_desc 'subtype'
FROM articles
JOIN CommonType
ON code_type = 10 AND article_subtype = code_id;

-- check article full info
SELECT
article_id,
article_title,
CT1.code_desc 'subtype',
(SELECT CT2.code_desc FROM CommonType AS CT2 WHERE CT2.code_type = 9 AND CT1.code_remark = CT2.code_id) 'maintype',
author_name,
article_desc,
article_content,
articleimg_name,
update_at,
article_publish_date,
article_publish,
article_schedule_publish
FROM Articles
JOIN CommonType AS CT1
ON CT1.code_type = 10 AND article_subtype = CT1.code_id
JOIN Authors
ON author_id_fk = Authors.author_id
JOIN ArticleImgs
ON Articles.article_id = ArticleImgs.article_id_fk AND ArticleImgs.articleimg_cover = 1;

-- check all keywords
SELECT code_desc AS 'keyword'
FROM CommonType
WHERE code_type = 11;

-- check article and keywords
SELECT article_title, code_desc 'Keyword' FROM Articles A
JOIN KeywordRelation KR ON KR.article_id_fk = A.article_id
JOIN CommonType CT ON KR.commontype_id_fk = CT.commontype_id
ORDER BY article_title;

-- check all MAIN comments under an article
select C.article_id_fk, C.comment_content, M.member_name, C.create_at, C.update_at, C.main, C.sub from Comments C
join Members M
on C.member_id_fk = M.member_id
order by C.article_id_fk;

-- check all SUB comments under a MAIN of an article

-- check favorite articles (same as article list but join favA and member)
select member_id, articleimg_cover, A.article_title, A.update_at 'last update'
from Articles as A
join ArticleImgs on ArticleImgs.articleimg_cover = 1 and ArticleImgs.article_id_fk = A.article_id
join FavArticles as FavA on A.article_id = FavA.article_id_fk
join members on FavA.member_id_fk = members.member_id
group by Members.member_id, ArticleImgs.articleimg_cover, A.article_title, author_name, A.update_at
order by member_id; 