-- 暫時禁用外鍵約束
SET foreign_key_checks = 0;

-- 執行您的操作，例如刪除或更新表格

-- 刪除現有表格（如果存在）
DROP TABLE IF EXISTS Gym_Images;
DROP TABLE IF EXISTS Gym_Features;
DROP TABLE IF EXISTS Gyms;
-- 如果 CommonType 表格是您要管理的一部分，也可以加上：
-- DROP TABLE IF EXISTS CommonType;

-- 建立主要的 Gyms 表格
CREATE TABLE Gyms (
    gym_id INT PRIMARY KEY AUTO_INCREMENT,
    gym_name VARCHAR(250) NOT NULL,
    gym_subtitle VARCHAR(250),
    gym_address VARCHAR(500) NOT NULL,
    gym_phone VARCHAR(20),
    business_hours VARCHAR(100),
    gym_info TEXT,
    gym_price TEXT,
    gym_equipment TEXT,
    is_elderly BOOLEAN,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- 建立 CommonType 表格（如果需要）
-- 如果 CommonType 表格是您要管理的一部分，取消以下注釋：
/*
CREATE TABLE CommonType (
    commontype_id INT PRIMARY KEY AUTO_INCREMENT,
    type_name VARCHAR(50) NOT NULL,
    type_value VARCHAR(100) NOT NULL
);
*/

-- 建立 Gym_Features 關聯表（多對多關係）
CREATE TABLE Gym_Features (
    gym_feature_id INT PRIMARY KEY AUTO_INCREMENT,
    gym_id INT,
    commontype_id INT,
    FOREIGN KEY (gym_id) REFERENCES Gyms(gym_id),
    FOREIGN KEY (commontype_id) REFERENCES CommonType(commontype_id),
    UNIQUE KEY (gym_id, commontype_id)
);

-- 建立 Gym_Images 表格（一對多關係）
CREATE TABLE Gym_Images (
    image_id INT PRIMARY KEY AUTO_INCREMENT,
    gym_id INT,
    image_filename VARCHAR(255) NOT NULL,
    image_description VARCHAR(500),
    FOREIGN KEY (gym_id) REFERENCES Gyms(gym_id)
);

-- 重新啟用外鍵約束
SET foreign_key_checks = 1;