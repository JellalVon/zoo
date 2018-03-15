
DROP DATABASE IF EXISTS `zoo`;
CREATE DATABASE `zoo`;
USE `zoo`;

-- ----------------------------
-- Table structure for `ap_info`
-- ----------------------------
DROP TABLE IF EXISTS `ap_info`;
CREATE TABLE `ap_info` (
  `ap_id` int(11) NOT NULL AUTO_INCREMENT,
  `ap_name` varchar(50) DEFAULT NULL,
  `mac` varchar(20) DEFAULT NULL,
  `lat` decimal(10,6) DEFAULT NULL,
  `lng` decimal(10,6) DEFAULT NULL,
  `radius` float DEFAULT NULL,
  `addr` varchar(50) DEFAULT NULL,
  `distance` int(11) DEFAULT NULL,
  `max_num` int(11) DEFAULT NULL,
  PRIMARY KEY (`ap_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ap_info
-- ----------------------------

-- ----------------------------
-- Table structure for `ap_load`
-- ----------------------------
DROP TABLE IF EXISTS `ap_load`;
CREATE TABLE `ap_load` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ap_id` int(11) NOT NULL,
  `numbers` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ap_load
-- ----------------------------

-- ----------------------------
-- Table structure for `criteria`
-- ----------------------------
DROP TABLE IF EXISTS `criteria`;
CREATE TABLE `criteria` (
  `criteria_id` int(11) NOT NULL AUTO_INCREMENT,
  `num_pre` int(11) DEFAULT NULL,
  `times_pre` int(11) DEFAULT NULL,
  `avg_time` float DEFAULT NULL,
  `total_time` float DEFAULT NULL,
  `distance` int(11) DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  PRIMARY KEY (`criteria_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of criteria
-- ----------------------------

-- ----------------------------
-- Table structure for `month_sum`
-- ----------------------------
DROP TABLE IF EXISTS `month_sum`;
CREATE TABLE `month_sum` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ap_id` int(11) DEFAULT NULL,
  `num_pre` int(11) DEFAULT NULL,
  `times_pre` int(11) DEFAULT NULL,
  `total_time` float DEFAULT NULL,
  `avg_time` float DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of month_sum
-- ----------------------------

-- ----------------------------
-- Table structure for `ranks`
-- ----------------------------
DROP TABLE IF EXISTS `ranks`;
CREATE TABLE `ranks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ap_id` int(11) DEFAULT NULL,
  `criteria_id` int(11) DEFAULT NULL,
  `ranking` int(11) DEFAULT NULL,
  `num_pre` int(11) DEFAULT NULL,
  `times_pre` int(11) DEFAULT NULL,
  `total_time` float DEFAULT NULL,
  `avg_time` float DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `category` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of rank
-- ----------------------------

-- ----------------------------
-- Table structure for `staff`
-- ----------------------------
DROP TABLE IF EXISTS `staff`;
CREATE TABLE `staff` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `staff_mac` varchar(20) DEFAULT NULL,
  `ap_id` int(11) DEFAULT NULL,
  `name` varchar(10) DEFAULT NULL,
  `sex` varchar(2) DEFAULT NULL,
  `tel` varchar(11) DEFAULT NULL,
  `birth` date DEFAULT NULL,
  `title` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of staff
-- ----------------------------

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(10) NOT NULL,
  `passwd` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', 'admin');

-- ----------------------------
-- Table structure for `ap_load`
-- ----------------------------
DROP TABLE IF EXISTS `ap_num_sum`;
CREATE TABLE `ap_num_sum` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ap_id` int(11) NOT NULL,
  `numbers` int(11) DEFAULT NULL,
  `sum_date` DATE DEFAULT NULL ,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;