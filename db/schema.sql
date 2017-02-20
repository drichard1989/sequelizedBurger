CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

CREATE TABLE IF NOT EXISTS `burgers` (
    `id` INT (10) AUTO_INCREMENT NOT NULL 
    , `burger_name` VARCHAR(30) NOT NULL
    , `devoured` BOOLEAN  NOT NULL DEFAULT 0
    , `created_date` TIMESTAMP
    , PRIMARY KEY (`id`)
);

