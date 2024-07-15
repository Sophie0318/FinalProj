drop database if exists midTermDB;

create database if not exists midTermDB;

use midTermDB;
-- select database();

-- ########################## 類別總表 ##########################
create table CommonType (
    commontype_id INT PRIMARY KEY AUTO_INCREMENT,
    code_type INT,
    code_type_desc VARCHAR(50),
    code_id INT,
    code_desc VARCHAR(200),
    code_remark INT
);

-- 插入共同類別表格的資料為:
INSERT INTO
    CommonType (
        code_type,
        code_type_desc,
        code_id,
        code_desc,
        code_remark
    )
VALUES (1, '縣市別', 1, '宜蘭縣', NULL),
    (1, '縣市別', 2, '台北市', NULL),
    (1, '縣市別', 3, '新北市', NULL),
    (1, '縣市別', 4, '基隆市', NULL),
    (1, '縣市別', 5, '桃園縣', NULL),
    (1, '縣市別', 6, '新竹市', NULL),
    (1, '縣市別', 7, '新竹縣', NULL),
    (1, '縣市別', 8, '苗栗縣', NULL),
    (1, '縣市別', 9, '台中市', NULL),
    (1, '縣市別', 10, '彰化縣', NULL),
    (1, '縣市別', 11, '南投縣', NULL),
    (1, '縣市別', 12, '雲林縣', NULL),
    (1, '縣市別', 13, '嘉義市', NULL),
    (1, '縣市別', 14, '嘉義縣', NULL),
    (1, '縣市別', 15, '台南市', NULL),
    (1, '縣市別', 16, '高雄市', NULL),
    (1, '縣市別', 17, '屏東縣', NULL),
    (1, '縣市別', 18, '台東縣', NULL),
    (1, '縣市別', 19, '花蓮縣', NULL),
    (1, '縣市別', 20, '澎湖縣', NULL),
    (1, '縣市別', 21, '金門縣', NULL),
    (1, '縣市別', 22, '連江縣', NULL),
    (2, '地區別', 1, '中正區', 2),
    (2, '地區別', 2, '文山區', 2),
    (2, '地區別', 3, '萬華區', 2),
    (2, '地區別', 4, '大同區', 2),
    (2, '地區別', 5, '中山區', 2),
    (2, '地區別', 6, '內湖區', 2),
    (2, '地區別', 7, '松山區', 2),
    (2, '地區別', 8, '南港區', 2),
    (2, '地區別', 9, '信義區', 2),
    (2, '地區別', 10, '士林區', 2),
    (2, '地區別', 11, '北投區', 2),
    (2, '地區別', 12, '大安區', 2),
    (3, '場管類別', 1, '健身房', NULL),
    (3, '場管類別', 2, '心肺耐力', NULL),
    (3, '場管類別', 3, '瑜珈會館', NULL),
    (3, '場管類別', 4, '游泳池', NULL),
    (3, '場管類別', 5, '放鬆舒緩', NULL),
    (3, '場管類別', 6, '平衡運動', NULL),
    (4, '課程類型', 1, '伸展', NULL),
    (4, '課程類型', 2, '心肺', NULL),
    (4, '課程類型', 3, '游泳', NULL),
    (4, '課程類型', 4, '增肌', NULL),
    (5, '廠商', 1, '星星', NULL),
    (5, '廠商', 2, '晨星', NULL),
    (5, '廠商', 3, '喵喵', NULL),
    (5, '廠商', 4, '成吉', NULL),
    (5, '廠商', 5, '萵苣', NULL),
    (6, '商品類別', 1, '居家訓練', NULL),
    (6, '商品類別', 2, '運動服飾', NULL),
    (6, '商品類別', 3, '健身護具', NULL),
    (6, '商品類別', 4, '健康食品', NULL),
    (7, '商品子類別', 1, '護膝', 3),
    (7, '商品子類別', 2, '護腿', 3),
    (7, '商品子類別', 3, '護踝', 3),
    (7, '商品子類別', 4, '護腰', 3),
    (8, '常見問題分類', 1, '商城', NULL),
    (8, '常見問題分類', 2, '課程', NULL),
    (8, '常見問題分類', 3, '地圖', NULL),
    (9, '文章主類別', 1, '體能鍛鍊', NULL),
    (9, '文章主類別', 2, '健康飲食', NULL),
    (9, '文章主類別', 3, '醫療保健', NULL),
    (9, '文章主類別', 4, '心靈健康', NULL),
    (9, '文章主類別', 5, '熟齡學習', NULL),
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
    (10, '關鍵字', 20, '圓夢', NULL),
    (
        11,
        '留言回報類別',
        1,
        'profanity filter',
        NULL
    ),
    (
        11,
        '留言回報類別',
        2,
        '使用不當語言',
        NULL
    ),
    (11, '留言回報類別', 3, '包含廣告', NULL),
    (11, '留言回報類別', 4, '帶有歧視', NULL),
    (12, '敏感詞分類', 1, '廣告', NULL),
    (12, '敏感詞分類', 2, '色情', NULL),
    (12, '敏感詞分類', 3, '暴力', NULL),
    (12, '敏感詞分類', 4, '其他', NULL),
    (4, '課程類型', 5, '肌耐力', NULL),
    (4, '課程類型', 6, '柔軟度', NULL),
    (4, '課程類型', 7, '健美', NULL),
    (4, '課程類型', 8, '徒手訓練', NULL),
    (14, '上架狀態', 0, '未上架', NULL),
    (14, '上架狀態', 1, '已上架', NULL);

-- 0515 新增 鄉鎮市入CommonType
INSERT INTO
    CommonType (
        code_type,
        code_type_desc,
        code_id,
        code_desc,
        code_remark
    )
VALUES (2, '地區別', 1, '宜蘭市', 1),
    (2, '地區別', 2, '壯圍鄉', 1),
    (2, '地區別', 3, '員山鄉', 1),
    (2, '地區別', 4, '礁溪鄉', 1),
    (2, '地區別', 5, '頭城鎮', 1),
    (2, '地區別', 6, '羅東鎮', 1),
    (2, '地區別', 7, '五結鄉', 1),
    (2, '地區別', 8, '三星鄉', 1),
    (2, '地區別', 9, '冬山鄉', 1),
    (2, '地區別', 10, '蘇澳鎮', 1),
    (2, '地區別', 11, '大同鄉', 1),
    (2, '地區別', 12, '南澳鄉', 1);

INSERT INTO
    CommonType (
        code_type,
        code_type_desc,
        code_id,
        code_desc,
        code_remark
    )
VALUES (2, '地區別', 1, '三重區', 3),
    (2, '地區別', 2, '板橋區', 3),
    (2, '地區別', 3, '中和區', 3),
    (2, '地區別', 4, '永和區', 3),
    (2, '地區別', 5, '新莊區', 3),
    (2, '地區別', 6, '土城區', 3),
    (2, '地區別', 7, '蘆洲區', 3),
    (2, '地區別', 8, '汐止區', 3),
    (2, '地區別', 9, '樹林區', 3),
    (2, '地區別', 10, '鶯歌區', 3),
    (2, '地區別', 11, '三峽區', 3),
    (2, '地區別', 12, '淡水區', 3),
    (2, '地區別', 13, '新店區', 3),
    (2, '地區別', 14, '深坑區', 3),
    (2, '地區別', 15, '石碇區', 3),
    (2, '地區別', 16, '坪林區', 3),
    (2, '地區別', 17, '烏來區', 3),
    (2, '地區別', 18, '瑞芳區', 3),
    (2, '地區別', 19, '貢寮區', 3),
    (2, '地區別', 20, '雙溪區', 3),
    (2, '地區別', 21, '平溪區', 3),
    (2, '地區別', 22, '五股區', 3),
    (2, '地區別', 23, '八里區', 3),
    (2, '地區別', 24, '林口區', 3),
    (2, '地區別', 25, '金山區', 3),
    (2, '地區別', 26, '萬里區', 3),
    (2, '地區別', 27, '三芝區', 3),
    (2, '地區別', 28, '石門區', 3),
    (2, '地區別', 29, '泰山區', 3);

INSERT INTO
    CommonType (
        code_type,
        code_type_desc,
        code_id,
        code_desc,
        code_remark
    )
VALUES (2, '地區別', 1, '仁愛區', 4),
    (2, '地區別', 2, '中正區', 4),
    (2, '地區別', 3, '信義區', 4),
    (2, '地區別', 4, '中山區', 4),
    (2, '地區別', 5, '安樂區', 4),
    (2, '地區別', 6, '七堵區', 4),
    (2, '地區別', 7, '暖暖區', 4);

INSERT INTO
    CommonType (
        code_type,
        code_type_desc,
        code_id,
        code_desc,
        code_remark
    )
VALUES (2, '地區別', 1, '桃園區', 5),
    (2, '地區別', 2, '中壢區', 5),
    (2, '地區別', 3, '平鎮區', 5),
    (2, '地區別', 4, '八德區', 5),
    (2, '地區別', 5, '楊梅區', 5),
    (2, '地區別', 6, '蘆竹區', 5),
    (2, '地區別', 7, '大溪區', 5),
    (2, '地區別', 8, '龜山區', 5),
    (2, '地區別', 9, '大園區', 5),
    (2, '地區別', 10, '觀音區', 5),
    (2, '地區別', 11, '新屋區', 5),
    (2, '地區別', 12, '龍潭區', 5),
    (2, '地區別', 13, '復興區', 5);

INSERT INTO
    CommonType (
        code_type,
        code_type_desc,
        code_id,
        code_desc,
        code_remark
    )
VALUES (2, '地區別', 1, '東區', 6),
    (2, '地區別', 2, '北區', 6),
    (2, '地區別', 3, '香山區', 6),
    (2, '地區別', 4, '新竹市', 6);

INSERT INTO
    CommonType (
        code_type,
        code_type_desc,
        code_id,
        code_desc,
        code_remark
    )
VALUES (2, '地區別', 1, '竹北市', 7),
    (2, '地區別', 2, '竹東鎮', 7),
    (2, '地區別', 3, '新埔鎮', 7),
    (2, '地區別', 4, '關西鎮', 7),
    (2, '地區別', 5, '新豐鄉', 7),
    (2, '地區別', 6, '峨眉鄉', 7),
    (2, '地區別', 7, '寶山鄉', 7),
    (2, '地區別', 8, '五峰鄉', 7),
    (2, '地區別', 9, '橫山鄉', 7),
    (2, '地區別', 10, '北埔鄉', 7),
    (2, '地區別', 11, '尖石鄉', 7),
    (2, '地區別', 12, '芎林鄉', 7),
    (2, '地區別', 13, '湖口鄉', 7);

INSERT INTO
    CommonType (
        code_type,
        code_type_desc,
        code_id,
        code_desc,
        code_remark
    )
VALUES (2, '地區別', 1, '苗栗市', 8),
    (2, '地區別', 2, '竹南鎮', 8),
    (2, '地區別', 3, '頭份市', 8),
    (2, '地區別', 4, '後龍鎮', 8),
    (2, '地區別', 5, '通霄鎮', 8),
    (2, '地區別', 6, '苑裡鎮', 8),
    (2, '地區別', 7, '卓蘭鎮', 8),
    (2, '地區別', 8, '三灣鄉', 8),
    (2, '地區別', 9, '南庄鄉', 8),
    (2, '地區別', 10, '造橋鄉', 8),
    (2, '地區別', 11, '獅潭鄉', 8),
    (2, '地區別', 12, '頭屋鄉', 8),
    (2, '地區別', 13, '西湖鄉', 8),
    (2, '地區別', 14, '公館鄉', 8),
    (2, '地區別', 15, '銅鑼鄉', 8),
    (2, '地區別', 16, '泰安鄉', 8),
    (2, '地區別', 17, '大湖鄉', 8),
    (2, '地區別', 18, '三義鄉', 8);

INSERT INTO
    CommonType (
        code_type,
        code_type_desc,
        code_id,
        code_desc,
        code_remark
    )
VALUES (2, '地區別', 1, '中區', 9),
    (2, '地區別', 2, '東區', 9),
    (2, '地區別', 3, '西區', 9),
    (2, '地區別', 4, '南區', 9),
    (2, '地區別', 5, '北區', 9),
    (2, '地區別', 6, '西屯區', 9),
    (2, '地區別', 7, '南屯區', 9),
    (2, '地區別', 8, '北屯區', 9),
    (2, '地區別', 9, '豐原區', 9),
    (2, '地區別', 10, '大里區', 9),
    (2, '地區別', 11, '太平區', 9),
    (2, '地區別', 12, '東勢區', 9),
    (2, '地區別', 13, '沙鹿區', 9),
    (2, '地區別', 14, '梧棲區', 9),
    (2, '地區別', 15, '清水區', 9),
    (2, '地區別', 16, '大甲區', 9),
    (2, '地區別', 17, '霧峰區', 9),
    (2, '地區別', 18, '烏日區', 9),
    (2, '地區別', 19, '后里區', 9),
    (2, '地區別', 20, '石岡區', 9),
    (2, '地區別', 21, '新社區', 9),
    (2, '地區別', 22, '潭子區', 9),
    (2, '地區別', 23, '大雅區', 9),
    (2, '地區別', 24, '神岡區', 9),
    (2, '地區別', 25, '大肚區', 9),
    (2, '地區別', 26, '龍井區', 9),
    (2, '地區別', 27, '大安區', 9),
    (2, '地區別', 28, '和平區', 9),
    (2, '地區別', 29, '外埔區', 9);

INSERT INTO
    CommonType (
        code_type,
        code_type_desc,
        code_id,
        code_desc,
        code_remark
    )
VALUES (2, '地區別', 1, '彰化市', 10),
    (2, '地區別', 2, '員林巿', 10),
    (2, '地區別', 3, '鹿港鎮', 10),
    (2, '地區別', 4, '和美鎮', 10),
    (2, '地區別', 5, '北斗鎮', 10),
    (2, '地區別', 6, '溪湖鎮', 10),
    (2, '地區別', 7, '田中鎮', 10),
    (2, '地區別', 8, '二林鎮', 10),
    (2, '地區別', 9, '線西鄉', 10),
    (2, '地區別', 10, '伸港鄉', 10),
    (2, '地區別', 11, '福興鄉', 10),
    (2, '地區別', 12, '秀水鄉', 10),
    (2, '地區別', 13, '花壇鄉', 10),
    (2, '地區別', 14, '芬園鄉', 10),
    (2, '地區別', 15, '大村鄉', 10),
    (2, '地區別', 16, '埔鹽鄉', 10),
    (2, '地區別', 17, '埔心鄉', 10),
    (2, '地區別', 18, '永靖鄉', 10),
    (2, '地區別', 19, '社頭鄉', 10),
    (2, '地區別', 20, '二水鄉', 10),
    (2, '地區別', 21, '田尾鄉', 10),
    (2, '地區別', 22, '埤頭鄉', 10),
    (2, '地區別', 23, '芳苑鄉', 10),
    (2, '地區別', 24, '大城鄉', 10),
    (2, '地區別', 25, '竹塘鄉', 10),
    (2, '地區別', 26, '溪州鄉', 10);

INSERT INTO
    CommonType (
        code_type,
        code_type_desc,
        code_id,
        code_desc,
        code_remark
    )
VALUES (2, '地區別', 1, '南投市', 11),
    (2, '地區別', 2, '埔里鎮', 11),
    (2, '地區別', 3, '草屯鎮', 11),
    (2, '地區別', 4, '竹山鎮', 11),
    (2, '地區別', 5, '集集鎮', 11),
    (2, '地區別', 6, '名間鄉', 11),
    (2, '地區別', 7, '中寮鄉', 11),
    (2, '地區別', 8, '鹿谷鄉', 11),
    (2, '地區別', 9, '水里鄉', 11),
    (2, '地區別', 10, '魚池鄉', 11),
    (2, '地區別', 11, '國姓鄉', 11),
    (2, '地區別', 12, '信義鄉', 11),
    (2, '地區別', 13, '仁愛鄉', 11);

INSERT INTO
    CommonType (
        code_type,
        code_type_desc,
        code_id,
        code_desc,
        code_remark
    )
VALUES (2, '地區別', 1, '麥寮鄉', 12),
    (2, '地區別', 2, '崙背鄉', 12),
    (2, '地區別', 3, '二崙鄉', 12),
    (2, '地區別', 4, '西螺鎮', 12),
    (2, '地區別', 5, '莿桐鄉', 12),
    (2, '地區別', 6, '林內鄉', 12),
    (2, '地區別', 7, '臺西鄉', 12),
    (2, '地區別', 8, '東勢鄉', 12),
    (2, '地區別', 9, '褒忠鄉', 12),
    (2, '地區別', 10, '元長鄉', 12),
    (2, '地區別', 11, '土庫鎮', 12),
    (2, '地區別', 12, '大埤鄉', 12),
    (2, '地區別', 13, '虎尾鎮', 12),
    (2, '地區別', 14, '斗六市', 12),
    (2, '地區別', 15, '斗南鎮', 12),
    (2, '地區別', 16, '古坑鄉', 12),
    (2, '地區別', 17, '四湖鄉', 12),
    (2, '地區別', 18, '口湖鄉', 12),
    (2, '地區別', 19, '水林鄉', 12),
    (2, '地區別', 20, '北港鎮', 12);

INSERT INTO
    CommonType (
        code_type,
        code_type_desc,
        code_id,
        code_desc,
        code_remark
    )
VALUES (2, '地區別', 1, '東區', 13),
    (2, '地區別', 2, '西區', 13);

INSERT INTO
    CommonType (
        code_type,
        code_type_desc,
        code_id,
        code_desc,
        code_remark
    )
VALUES (2, '地區別', 1, '太保市', 14),
    (2, '地區別', 2, '朴子市', 14),
    (2, '地區別', 3, '布袋鎮', 14),
    (2, '地區別', 4, '大林鎮', 14),
    (2, '地區別', 5, '民雄鄉', 14),
    (2, '地區別', 6, '溪口鄉', 14),
    (2, '地區別', 7, '六腳鄉', 14),
    (2, '地區別', 8, '東石鄉', 14),
    (2, '地區別', 9, '義竹鄉', 14),
    (2, '地區別', 10, '鹿草鄉', 14),
    (2, '地區別', 11, '水上鄉', 14),
    (2, '地區別', 12, '中埔鄉', 14),
    (2, '地區別', 13, '竹崎鄉', 14),
    (2, '地區別', 14, '梅山鄉', 14),
    (2, '地區別', 15, '番路鄉', 14),
    (2, '地區別', 16, '大埔鄉', 14),
    (2, '地區別', 17, '新港鄉', 14),
    (2, '地區別', 18, '阿里山鄉', 14);

INSERT INTO
    CommonType (
        code_type,
        code_type_desc,
        code_id,
        code_desc,
        code_remark
    )
VALUES (2, '地區別', 1, '新營區', 15),
    (2, '地區別', 2, '鹽水區', 15),
    (2, '地區別', 3, '白河區', 15),
    (2, '地區別', 4, '柳營區', 15),
    (2, '地區別', 5, '後壁區', 15),
    (2, '地區別', 6, '東山區', 15),
    (2, '地區別', 7, '麻豆區', 15),
    (2, '地區別', 8, '下營區', 15),
    (2, '地區別', 9, '六甲區', 15),
    (2, '地區別', 10, '官田區', 15),
    (2, '地區別', 11, '大內區', 15),
    (2, '地區別', 12, '佳里區', 15),
    (2, '地區別', 13, '學甲區', 15),
    (2, '地區別', 14, '西港區', 15),
    (2, '地區別', 15, '七股區', 15),
    (2, '地區別', 16, '將軍區', 15),
    (2, '地區別', 17, '北門區', 15),
    (2, '地區別', 18, '新化區', 15),
    (2, '地區別', 19, '新市區', 15),
    (2, '地區別', 20, '善化區', 15),
    (2, '地區別', 21, '安定區', 15),
    (2, '地區別', 22, '山上區', 15),
    (2, '地區別', 23, '玉井區', 15),
    (2, '地區別', 24, '楠西區', 15),
    (2, '地區別', 25, '南化區', 15),
    (2, '地區別', 26, '左鎮區', 15),
    (2, '地區別', 27, '仁德區', 15),
    (2, '地區別', 28, '歸仁區', 15),
    (2, '地區別', 29, '關廟區', 15),
    (2, '地區別', 30, '龍崎區', 15),
    (2, '地區別', 31, '永康區', 15),
    (2, '地區別', 32, '東區', 15),
    (2, '地區別', 33, '南區', 15),
    (2, '地區別', 34, '中西區', 15),
    (2, '地區別', 35, '北區', 15),
    (2, '地區別', 36, '安南區', 15),
    (2, '地區別', 37, '安平區', 15);

INSERT INTO
    CommonType (
        code_type,
        code_type_desc,
        code_id,
        code_desc,
        code_remark
    )
VALUES (2, '地區別', 1, '楠梓區', 16),
    (2, '地區別', 2, '左營區', 16),
    (2, '地區別', 3, '鼓山區', 16),
    (2, '地區別', 4, '三民區', 16),
    (2, '地區別', 5, '苓雅區', 16),
    (2, '地區別', 6, '新興區', 16),
    (2, '地區別', 7, '前金區', 16),
    (2, '地區別', 8, '鹽埕區', 16),
    (2, '地區別', 9, '小港區', 16),
    (2, '地區別', 10, '旗津區', 16),
    (2, '地區別', 11, '前鎮區', 16),
    (2, '地區別', 12, '鳳山區', 16),
    (2, '地區別', 13, '岡山區', 16),
    (2, '地區別', 14, '旗山區', 16),
    (2, '地區別', 15, '美濃區', 16),
    (2, '地區別', 16, '大寮區', 16),
    (2, '地區別', 17, '茄萣區', 16),
    (2, '地區別', 18, '永安區', 16),
    (2, '地區別', 19, '大社區', 16),
    (2, '地區別', 20, '杉林區', 16),
    (2, '地區別', 21, '仁武區', 16),
    (2, '地區別', 22, '田寮區', 16),
    (2, '地區別', 23, '燕巢區', 16),
    (2, '地區別', 24, '路竹區', 16),
    (2, '地區別', 25, '阿蓮區', 16),
    (2, '地區別', 26, '甲仙區', 16),
    (2, '地區別', 27, '大樹區', 16),
    (2, '地區別', 28, '湖內區', 16),
    (2, '地區別', 29, '桃源區', 16),
    (2, '地區別', 30, '鳥松區', 16),
    (2, '地區別', 31, '彌陀區', 16),
    (2, '地區別', 32, '那瑪夏區', 16),
    (2, '地區別', 33, '梓官區', 16),
    (2, '地區別', 34, '內門區', 16),
    (2, '地區別', 35, '茂林區', 16),
    (2, '地區別', 36, '橋頭區', 16),
    (2, '地區別', 37, '六龜區', 16),
    (2, '地區別', 38, '林園區', 16);

INSERT INTO
    CommonType (
        code_type,
        code_type_desc,
        code_id,
        code_desc,
        code_remark
    )
VALUES (2, '地區別', 1, '屏東市', 17),
    (2, '地區別', 2, '潮州鎮', 17),
    (2, '地區別', 3, '東港鎮', 17),
    (2, '地區別', 4, '恆春鎮', 17),
    (2, '地區別', 5, '九如鄉', 17),
    (2, '地區別', 6, '里港鄉', 17),
    (2, '地區別', 7, '鹽埔鄉', 17),
    (2, '地區別', 8, '高樹鄉', 17),
    (2, '地區別', 9, '長治鄉', 17),
    (2, '地區別', 10, '麟洛鄉', 17),
    (2, '地區別', 11, '內埔鄉', 17),
    (2, '地區別', 12, '萬巒鄉', 17),
    (2, '地區別', 13, '竹田鄉', 17),
    (2, '地區別', 14, '萬丹鄉', 17),
    (2, '地區別', 15, '新園鄉', 17),
    (2, '地區別', 16, '崁頂鄉', 17),
    (2, '地區別', 17, '林邊鄉', 17),
    (2, '地區別', 18, '佳冬鄉', 17),
    (2, '地區別', 19, '南州鄉', 17),
    (2, '地區別', 20, '新埤鄉', 17),
    (2, '地區別', 21, '枋寮鄉', 17),
    (2, '地區別', 22, '枋山鄉', 17),
    (2, '地區別', 23, '車城鄉', 17),
    (2, '地區別', 24, '滿州鄉', 17),
    (2, '地區別', 25, '琉球鄉', 17),
    (2, '地區別', 26, '三地門鄉', 17),
    (2, '地區別', 27, '霧台鄉', 17),
    (2, '地區別', 28, '瑪家鄉', 17),
    (2, '地區別', 29, '來義鄉', 17),
    (2, '地區別', 30, '泰武鄉', 17),
    (2, '地區別', 31, '春日鄉', 17),
    (2, '地區別', 32, '獅子鄉', 17),
    (2, '地區別', 33, '牡丹鄉', 17);

INSERT INTO
    CommonType (
        code_type,
        code_type_desc,
        code_id,
        code_desc,
        code_remark
    )
VALUES (2, '地區別', 1, '東河鄉', 18),
    (2, '地區別', 2, '成功鎮', 18),
    (2, '地區別', 3, '長濱鄉', 18),
    (2, '地區別', 4, '鹿野鄉', 18),
    (2, '地區別', 5, '關山鄉', 18),
    (2, '地區別', 6, '池上鄉', 18),
    (2, '地區別', 7, '延平鄉', 18),
    (2, '地區別', 8, '海端鄉', 18),
    (2, '地區別', 9, '台東市', 18),
    (2, '地區別', 10, '卑南鄉', 18),
    (2, '地區別', 11, '太麻里鄉', 18),
    (2, '地區別', 12, '金峰鄉', 18),
    (2, '地區別', 13, '大武鄉', 18),
    (2, '地區別', 14, '達仁鄉', 18),
    (2, '地區別', 15, '綠島鄉', 18),
    (2, '地區別', 16, '蘭嶼鄉', 18);

INSERT INTO
    CommonType (
        code_type,
        code_type_desc,
        code_id,
        code_desc,
        code_remark
    )
VALUES (2, '地區別', 1, '花蓮市', 19),
    (2, '地區別', 2, '鳳林鎮', 19),
    (2, '地區別', 3, '玉里鎮', 19),
    (2, '地區別', 4, '新城鄉', 19),
    (2, '地區別', 5, '吉安鄉', 19),
    (2, '地區別', 6, '壽豐鄉', 19),
    (2, '地區別', 7, '光復鄉', 19),
    (2, '地區別', 8, '豐濱鄉', 19),
    (2, '地區別', 9, '瑞穗鄉', 19),
    (2, '地區別', 10, '富里鄉', 19),
    (2, '地區別', 11, '秀林鄉', 19),
    (2, '地區別', 12, '萬榮鄉', 19),
    (2, '地區別', 13, '卓溪鄉', 19),
    (2, '地區別', 14, '山地鄉', 19);

INSERT INTO
    CommonType (
        code_type,
        code_type_desc,
        code_id,
        code_desc,
        code_remark
    )
VALUES (2, '地區別', 1, '馬公市', 20),
    (2, '地區別', 2, '湖西鄉', 20),
    (2, '地區別', 3, '白沙鄉', 20),
    (2, '地區別', 4, '西嶼鄉', 20),
    (2, '地區別', 5, '望安鄉', 20),
    (2, '地區別', 6, '七美鄉', 20);

INSERT INTO
    CommonType (
        code_type,
        code_type_desc,
        code_id,
        code_desc,
        code_remark
    )
VALUES (2, '地區別', 1, '烏坵鄉', 21),
    (2, '地區別', 2, '金城鎮', 21),
    (2, '地區別', 3, '金湖鎮', 21),
    (2, '地區別', 4, '金沙鎮', 21),
    (2, '地區別', 5, '金寧鄉', 21),
    (2, '地區別', 6, '烈嶼鄉', 21);

INSERT INTO
    CommonType (
        code_type,
        code_type_desc,
        code_id,
        code_desc,
        code_remark
    )
VALUES (2, '地區別', 1, '南竿鄉', 22),
    (2, '地區別', 2, '北竿鄉', 22),
    (2, '地區別', 3, '莒光鄉', 22),
    (2, '地區別', 4, '東引鄉', 22);

-- 員工
create table Employees (
    employee_id int not null primary key auto_increment,
    employee_name varchar(10),
    employee_email varchar(100) not null unique, -- 註冊用的email不可重複
    employee_password varchar(70)
);

create table EmployeeDetail (
    employeedetail_id_fk int not null primary key auto_increment,
    employeedetail_imgurl varchar(50) not null default '../images/default_avatar.jpg', -- 可以不放大頭貼，若不放會顯示一個預設圖示
    employeedetail_created_date timestamp default current_timestamp,
    employeedetail_update_at timestamp default current_timestamp on update current_timestamp,
    foreign key (employeedetail_id_fk) references Employees (employee_id) on delete cascade -- 基本表被刪,細節表內同筆id也被刪
);

-- 會員部分
-- 會員基本表
CREATE TABLE Members (
    member_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    member_name VARCHAR(10),
    member_email VARCHAR(100) NOT NULL UNIQUE, -- 註冊用的email不可重複
    member_password VARCHAR(70) NOT NULL,
    gender VARCHAR(10),
    nick_name VARCHAR(10),
    avatar VARCHAR(200) NOT NULL DEFAULT 'default_avatar.jpg', -- 可以不放大頭貼，若不放會顯示一個預設圖示
    mobile VARCHAR(50) NULL, -- 要驗證時需指定用戶輸入的格式避免0900-000-000
    city_id INT,
    district_id INT,
    address VARCHAR(300),
    resetToken VARCHAR(300) NULL, -- 重置密碼時使用的隨機生成的token，用以核對用戶身分
    resetExpiration DATETIME NULL, -- 這是一個時間戳記，用來判斷token是否過期
    lastRequestTime DATETIME NULL, -- 這是一個時間戳記，用來紀錄用戶上次發送驗證信申請的時間，發送時間與當前時間相差需在1分鐘以上
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

insert into
    Employees (
        employee_name,
        employee_email,
        employee_password
    )
values (
        '快速登入',
        'quicklogin@quick.com',
        'user1'
    ),
    (
        '陳彥寧',
        'yan@mail.com',
        '$2y$10$5NoKPGQWJqJGnDlJHWrDQ.wkq7bSLHhBuNU3A36wrGdi0MnpstW/6'
    ),
    (
        '陳延汝',
        'lulu@mail.com',
        '$2y$10$5NoKPGQWJqJGnDlJHWrDQ.wkq7bSLHhBuNU3A36wrGdi0MnpstW/6'
    ),
    (
        '潘牙牙',
        'yap@mail.com',
        '$2y$10$xsYD/hEF9HkVhx32CfSaJuV2Q3Na9CMwfLbB.f1UHeqYNuGXm7oC6'
    ),
    (
        'sofi',
        'sophie@mail.com',
        '$2y$10$CUogBGQLwD1flFwkby5o8eEPGO3aeqtEQYYUppmrMY4QB8M2zEbZW'
    ),
    (
        'suan',
        'suan@mail.com',
        '$2y$10$v2qRZiUgT8XuGGijVBLrLeLrMGXu0CIXpHvt.g8W1msjWR3aNLlEq'
    ),
    (
        '李俊翰',
        'randomuser1@gmail.com',
        '$2y$10$5NoKPGQWJqJGnDlJHWrDQ.wkq7bSLHhBuNU3A36wrGdi0MnpstW/6'
    ),
    (
        '蔡欣怡',
        'testmail4321@gmail.com',
        '$2y$10$5NoKPGQWJqJGnDlJHWrDQ.wkq7bSLHhBuNU3A36wrGdi0MnpstW/6'
    ),
    (
        '林志宇',
        'emailgenie89@gmail.com',
        '$2y$10$5NoKPGQWJqJGnDlJHWrDQ.wkq7bSLHhBuNU3A36wrGdi0MnpstW/6'
    ),
    (
        '鄭婷婷',
        'examplemail567@gmail.com',
        '$2y$10$5NoKPGQWJqJGnDlJHWrDQ.wkq7bSLHhBuNU3A36wrGdi0MnpstW/6'
    ),
    (
        '楊子翔',
        'quickmail1234@gmail.com',
        '$2y$10$5NoKPGQWJqJGnDlJHWrDQ.wkq7bSLHhBuNU3A36wrGdi0MnpstW/6'
    );

-- 建立 場館基本資料列表 Gyms
create table Gyms (
    gym_id int primary key auto_increment,
    gym_name varchar(250) not null,
    commontype_id_fk int not null, -- 地區代碼
    gym_address varchar(500) not null,
    gym_phone varchar(13),
    gym_price varchar(200),
    is_elderly int,
    gym_info text,
    gym_cover_url varchar(200),
    create_at timestamp default current_timestamp,
    update_at timestamp default current_timestamp on update current_timestamp,
    foreign key (commontype_id_fk) references CommonType (commontype_id) -- 連結CommonType
);

select * from Gyms;

-- 教練照片表
CREATE TABLE CoachImgs (
    coachImgs_id INT PRIMARY KEY AUTO_INCREMENT,
    coach_img VARCHAR(200)
);

-- 插入教練照片表的資料
INSERT INTO
    CoachImgs (coach_img)
VALUES ('coach1.jpg'),
    ('coach2.jpg'),
    ('coach3.jpg'),
    ('coach4.jpg'),
    ('coach5.jpg'),
    ('coach6.jpg'),
    ('coach7.jpg'),
    ('coach8.jpg'),
    ('coach9.jpg'),
    ('coach10.jpg'),
    ('coach11.jpg'),
    ('coach12.jpg'),
    ('coach13.jpg'),
    ('coach14.jpg');

-- 教練表
CREATE TABLE Coaches (
    coach_id INT PRIMARY KEY AUTO_INCREMENT,
    coach_name VARCHAR(10),
    coach_phone VARCHAR(10),
    coach_gender INT,
    coach_info VARCHAR(500),
    coach_price INT,
    create_date DATE,
    update_at TIMESTAMP DEFAULT NOW(),
    coachImgs_id INT,
    gym_id INT,
    FOREIGN KEY (coachImgs_id) REFERENCES CoachImgs (coachImgs_id),
    FOREIGN KEY (gym_id) REFERENCES Gyms (gym_id)
);

-- 教練和課程類型的中間表
CREATE TABLE CoachSkills (
    coach_id INT,
    commontype_id INT,
    FOREIGN KEY (coach_id) REFERENCES Coaches (coach_id),
    FOREIGN KEY (commontype_id) REFERENCES CommonType (commontype_id),
    PRIMARY KEY (coach_id, commontype_id)
);

-- 课程照片表
CREATE TABLE LessonImgs (
    LessonImgs_id INT PRIMARY KEY AUTO_INCREMENT,
    lesson_img VARCHAR(200)
);

-- 课程表
CREATE TABLE Lessons (
    lesson_id INT PRIMARY KEY AUTO_INCREMENT,
    lesson_name VARCHAR(50),
    lesson_state INT,
    lesson_price INT,
    lesson_desc VARCHAR(400),
    lesson_date DATETIME, -- 课程时间
    LessonImgs_id INT, -- 课程照片
    coach_id INT,
    gym_id INT, -- 新增的场馆外键
    FOREIGN KEY (LessonImgs_id) REFERENCES LessonImgs (LessonImgs_id),
    FOREIGN KEY (coach_id) REFERENCES Coaches (coach_id),
    FOREIGN KEY (gym_id) REFERENCES Gyms (gym_id) -- 连接 Gyms 表格
);

-- 课程和课程类别的中间表
CREATE TABLE LessonCategories (
    lesson_id INT,
    commontype_id INT,
    FOREIGN KEY (lesson_id) REFERENCES Lessons (lesson_id),
    FOREIGN KEY (commontype_id) REFERENCES CommonType (commontype_id),
    PRIMARY KEY (lesson_id, commontype_id)
);

-- ---------------------------ProductTypes----------------------
create table ProductTypes(
ProductTypes_Id    int auto_increment primary key,
ProductTypes_name  varchar(50),
ProductTypes_parenti_id  int


);

-- -----------------------------Products----------------------------------
create table Products (
    Product_id int auto_increment primary key,
    Product_name varchar(50),
    Product_photo varchar(50),
    Product_desc varchar(500),
    Product_price int,
    Product_inventory int,
    Product_type_id_fk int,
    Suppliers_id_fk int,
    Product_list_update timestamp not null default now(),
    Product_change_update timestamp,
    Product_employee_id_fk int,
    Product_state int,
    foreign key (Suppliers_id_fk) references commontype (commontype_id),
    foreign key (Product_type_id_fk) references commontype (commontype_id),
    foreign key (Product_employee_id_fk) references Employees (employee_id),
    foreign key (Product_state) references commontype (commontype_id)
);

-- ----------------------------------------------ProductOrders----------------
create table ProductOrders (
    Productorders_orders_id int auto_increment primary key,
    ProductOrders_orders_date timestamp not null default now(),
    ProductOrders_m_id_fk int,
    ProductOrders_payment_method varchar(50),
    ProductOrders_delivery_method varchar(50),
    ProductOrders_recipient_address varchar(50),
    ProductOrders_recipient_name varchar(50),
    ProductOrders_recipient_phone varchar(50),
    foreign key (ProductOrders_m_id_fk) references members (member_id)
);

-- ----------------------------OrdersDetail---------------------------------
create table OrdersDetail(
OrdersDetail_id  int auto_increment primary key,
OrdersDetail_product_id_fk   int,
OrdersDetail_product_quantity int,
OrdersDetail_order_id_fk int,
OrdersDetail_unit_price_at_time int
-- foreign key (OrdersDetail_order_id_fk) references ProductOrders(ProductOrders_orders_id),
-- foreign key (OrdersDetail_product_id_fk) references Products(Product_id )


);

-- ----------------------------
-- ########################## 文章管理系統 ##########################