-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: shopmanagerdata
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brand` (
  `idBrand` varchar(45) NOT NULL,
  `nameBrand` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idBrand`),
  FULLTEXT KEY `ft_index` (`idBrand`,`nameBrand`,`description`),
  FULLTEXT KEY `nameBrand` (`nameBrand`,`description`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES ('Brand000000000000','Louis Vuitton','sản phẩm thời trang, túi xách, vali, phụ kiện da thuộc và trang sức cao cấp, xa xỉ hàng đầu thế giới'),('Brand000000000001','Gucci',' một thương hiệu thời trang nổi tiếng toàn cầu với phong cách Ý lịch lãm, sang trọng và sáng tạo. '),('Brand000000000002','Chanel','biểu tượng thời trang của sự sáng tạo mang vẻ đẹp đầy quyến rũ, thanh lịch và sang trọng của văn hóa Pháp'),('Brand000000000003','Coach','thương hiệu nổi tiếng được biết đến với những sản phẩm da cao cấp từ túi xách, ví và phụ kiện thời trang được chế tác từ những chất liệu tốt nhất'),('Brand000000000004','Prada','thương hiệu Ý được sáng lập bởi Mario Prada, luôn mang đến những sản phẩm đậm dấu ấn nghệ thuật riêng biệt, đã từng bước chinh phục thế giới từ những năm 1913 cho đến nay.'),('Brand000000000005','Dior','một thương hiệu thời trang cao cấp dù là những người không theo đuổi thời trang hàng hiệu cũng biết đến. Đây là thương hiệu Pháp xa xỉ bậc nhất thế giới'),('Brand000000000006','Versace','Thương hiệu Versace nổi tiếng thế giới từ những năm 1978 bởi những thiết kế cá tính, sáng tạo với chất liệu độc đáo trên những màu sắc táo bạo với những họa tiết cắt may quyến rũ. '),('Brand000000000007','Hermès','Thương hiệu đứng đầu bảng xếp hạng các thương hiệu thời trang nổi tiếng với logo chiếc xe ngựa cùng màu cam đặc trưng luôn là sự lựa chọn hàng đầu của giới thượng lưu. '),('Brand000000000008','Balenciaga','Một thương hiệu thời trang xuất hiện từ rất lâu đời năm 1919 bởi Cristóbal Balenciaga. Được biết đến với sự sáng tạo và phá cách trong mọi thiết kế mang đến một vẻ đẹp hiện đại đường phố những vẫn rất sang trọng, thời thượng.'),('Brand000000000009','Valentino','Valentino Garavani thành lập thương hiệu Valentino vào năm 1957 tại Ý. Trong suốt hành trình phát triển, Valentino luôn tạo nên sự đẳng cấp cho chính mình khi luôn tạo ra những thiết kế cao cấp với vẻ đẹp thanh lịch cổ điển nhưng vô cùng độc đáo'),('Brand000000000010','Fendi','Fendi được biết đến là một thương hiệu danh tiếng của Ý được thành lập từ năm 1925 ở Rome. Luôn khẳng định mình trong những những thiết kế sáng tạo với da và lông vũ đặc trưng.'),('Brand000000000011','Givenchy','Thương hiệu Givenchy được thành lập vào năm 1952 bởi Hubert de Givenchy và trực thuộc hiệp hội Fédération française de la couture của Pháp'),('Brand000000000012','Dolce & Gabbana','Tiếp theo sẽ là một thương hiệu cao cấp đến từ Ý được thành lập vào năm 1982 bởi Domenico Dolce và Stefano Gabbana. Không gì có thể phủ nhận D&G nổi bật với những thiết kế giúp phụ nữ hiện đại, quyến rũ cá tính, nam giới mạnh mẽ, sang trọng hơn.'),('Brand000000000013','Yves Saint Laurent (YSL)','Một thương hiệu nổi tiếng với những thiết kế sáng tạo và cá tính được viết nên bởi Yves Saint Laurent và Pierre Bergé vào năm 1961 tại kinh đô thời trang Paris. '),('Brand000000000014','Alexander McQueen','Alexander McQueen được thành lập vào năm 1992 bởi nhà thiết kế người Anh cùng tên với phong cách lập dị độc đáo trong sự sáng tạo của mình.'),('Brand000000000015','Ralph Lauren','thành lập vào năm 1967 bởi nhà thiết kế cùng tên. Từ hình ảnh logo nhận diện thương hiệu cũng phần nào thể hiện được tinh thần của những thiết kế Ralph Lauren đầy tự do, phóng khoáng đậm chất “Mỹ”.'),('Brand000000000016','Tommy Hilfiger','Tommy Hilfiger - thương hiệu thời trang toàn cầu mang đậm văn hóa đại chúng, lối sống và phong cách thời trang Mỹ được ra đời từ năm 1985 bởi nhà sáng lập Thomas Jacob Hilfiger.'),('Brand000000000017','Dsquared2','hành lập bởi cặp anh em sinh đôi người Canada Dean và Dan Caten vào năm 1995, Dsquared2 nhanh chóng tạo dựng tên tuổi trong làng thời trang thế giới nổi bật với sự kết hợp hoàn hảo giữa phong cách thời trang châu Âu tinh tế và tinh thần phóng khoáng'),('Brand000000000018','Armani','Phong cách thiết kế của Armani đề cao tính ứng dụng và sự tối giản một cách tinh tế trong việc tiết chế màu sắc, sử dụng chất liệu cao cấp…tạo nên một biểu tượng của sự thanh lịch và phong cách không thể lẫn trong thế giới thời trang đắt đỏ này.'),('Brand000000000019','Zara','một thương hiệu “quốc dân” được giới trẻ khắp thế giới yêu thích vì hướng đến đa dạng đối tượng khách hàng với nhiều mức giá khác nhau, phù hợp túi tiền cả với những người có thu nhập bình thường. ');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `color`
--

DROP TABLE IF EXISTS `color`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `color` (
  `idColor` varchar(45) NOT NULL,
  `nameColor` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idColor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `color`
--

LOCK TABLES `color` WRITE;
/*!40000 ALTER TABLE `color` DISABLE KEYS */;
INSERT INTO `color` VALUES ('Color000000000000','đỏ','màu đỏ'),('Color000000000001','cảm','màu cảm'),('Color000000000002','vàng','màu vàng');
/*!40000 ALTER TABLE `color` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detailedrefundslip`
--

DROP TABLE IF EXISTS `detailedrefundslip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detailedrefundslip` (
  `idDetailedRefundSlip` varchar(45) NOT NULL,
  `idSalesSlip` varchar(45) DEFAULT NULL,
  `idDetail` varchar(45) DEFAULT NULL,
  `createTime` datetime DEFAULT NULL,
  `updateTime` datetime DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`idDetailedRefundSlip`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detailedrefundslip`
--

LOCK TABLES `detailedrefundslip` WRITE;
/*!40000 ALTER TABLE `detailedrefundslip` DISABLE KEYS */;
/*!40000 ALTER TABLE `detailedrefundslip` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detailproduct`
--

DROP TABLE IF EXISTS `detailproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detailproduct` (
  `idDetail` varchar(45) NOT NULL,
  `numberSeri` varchar(45) DEFAULT NULL,
  `idSize` varchar(45) NOT NULL,
  `dayImport` date DEFAULT NULL,
  `Status` tinyint(1) NOT NULL,
  `idProduct` varchar(45) NOT NULL,
  `sellStatus` tinyint(1) NOT NULL,
  `idColor` varchar(45) NOT NULL,
  PRIMARY KEY (`idDetail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detailproduct`
--

LOCK TABLES `detailproduct` WRITE;
/*!40000 ALTER TABLE `detailproduct` DISABLE KEYS */;
INSERT INTO `detailproduct` VALUES ('DP000000000000','SN-2458-AX39 ','Size000000000000','2025-05-06',1,'Product000000000000',1,'Color000000000000'),('DP000000000001','SN-2458-AX39 ','Size000000000001','2025-05-06',1,'Product000000000000',1,'Color000000000001'),('DP000000000002','s000002','Size000000000004','2025-05-15',0,'Product000000000001',0,'Color000000000001'),('DP000000000003','dsfsdf','Size000000000000','2025-05-27',1,'Product000000000018',1,'Color000000000000'),('DP000000000004','s000001','Size000000000004','2025-05-27',0,'Product000000000018',0,'Color000000000001'),('DP000000000005','s000002667','Size000000000002','2025-05-28',0,'Product000000000018',0,'Color000000000002');
/*!40000 ALTER TABLE `detailproduct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detailpurchaseslip`
--

DROP TABLE IF EXISTS `detailpurchaseslip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detailpurchaseslip` (
  `idDetail` varchar(45) NOT NULL,
  `idList` varchar(45) NOT NULL,
  `idDetailProduct` varchar(45) NOT NULL,
  `quantity` int unsigned DEFAULT NULL,
  `price` int unsigned DEFAULT NULL,
  PRIMARY KEY (`idDetail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detailpurchaseslip`
--

LOCK TABLES `detailpurchaseslip` WRITE;
/*!40000 ALTER TABLE `detailpurchaseslip` DISABLE KEYS */;
INSERT INTO `detailpurchaseslip` VALUES ('DPS000000000000','Shop000000000001','DP000000000002',4,342000),('DPS000000000001','Shop000000000003','DP000000000002',4,342000),('DPS000000000002','Shop000000000000','DP000000000004',45,0),('DPS000000000003','Shop000000000003','DP000000000005',6,0),('DPS000000000004','Shop000000000002','DP000000000005',6,0);
/*!40000 ALTER TABLE `detailpurchaseslip` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detailsalesslip`
--

DROP TABLE IF EXISTS `detailsalesslip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detailsalesslip` (
  `idDetail` varchar(45) NOT NULL,
  `idList` varchar(45) NOT NULL,
  `idDetailProduct` varchar(45) NOT NULL,
  `quantity` int unsigned DEFAULT NULL,
  `price` int unsigned DEFAULT NULL,
  PRIMARY KEY (`idDetail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detailsalesslip`
--

LOCK TABLES `detailsalesslip` WRITE;
/*!40000 ALTER TABLE `detailsalesslip` DISABLE KEYS */;
/*!40000 ALTER TABLE `detailsalesslip` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discountevent`
--

DROP TABLE IF EXISTS `discountevent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `discountevent` (
  `idEvent` varchar(45) NOT NULL,
  `eventCode` varchar(45) DEFAULT NULL,
  `idProduct` varchar(45) NOT NULL,
  `decrease` decimal(3,2) unsigned DEFAULT NULL,
  `quantityLimit` int unsigned DEFAULT NULL,
  `eventDeadline` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idEvent`),
  FULLTEXT KEY `idProduct` (`idProduct`,`eventCode`,`description`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discountevent`
--

LOCK TABLES `discountevent` WRITE;
/*!40000 ALTER TABLE `discountevent` DISABLE KEYS */;
INSERT INTO `discountevent` VALUES ('DE000000000000','MHA','Product000000000000',0.30,2,'2025-06-06 14:32:10','giảm giá 50% cho sản phẩm khi mua tối đa 2 sản phẩm');
/*!40000 ALTER TABLE `discountevent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `district`
--

DROP TABLE IF EXISTS `district`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `district` (
  `idDistrict` varchar(45) NOT NULL,
  `idProvince` varchar(45) DEFAULT NULL,
  `nameDistrict` varchar(45) DEFAULT NULL,
  `longitude` decimal(10,7) DEFAULT NULL,
  `latitude` decimal(10,7) DEFAULT NULL,
  PRIMARY KEY (`idDistrict`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `district`
--

LOCK TABLES `district` WRITE;
/*!40000 ALTER TABLE `district` DISABLE KEYS */;
INSERT INTO `district` VALUES ('District0001','Province0001','An Phú',10.7964262,105.0935197),('District0002','Province0001','Châu Phú',10.5695341,104.8764502),('District0003','Province0001','Châu Thành',10.4270429,104.9317089),('District0004','Province0001','Châu Đốc',10.6880264,104.9254808),('District0005','Province0001','Chợ Mới',10.4556632,105.4512222),('District0006','Province0001','Long Xuyên',10.3714211,105.2617761),('District0007','Province0001','Phú Tân',10.6548293,105.0935362),('District0008','Province0001','Thoại Sơn',10.2787919,104.9394517),('District0009','Province0001','Tri Tôn',10.4105485,104.6224492),('District0010','Province0001','Tân Châu',10.8175664,105.0253398),('District0011','Province0001','Tịnh Biên',10.5565931,104.8426006),('District0012','Province0002','Bà Rịa',10.5088643,107.0151708),('District0013','Province0002','Châu Đức',10.6562819,106.9253363),('District0014','Province0002','Côn Đảo',8.7005776,106.5331138),('District0015','Province0002','Long Điền',10.4838121,107.1290875),('District0016','Province0002','Phú Mỹ',10.5834052,107.0311592),('District0017','Province0002','Vũng Tàu',10.4036344,106.9585845),('District0018','Province0002','Xuyên Mộc',10.6300491,107.1288065),('District0019','Province0002','Đất Đỏ',10.4781166,107.3096296),('District0020','Province0003','Bàu Bàng',11.2698798,106.4452249),('District0021','Province0003','Bắc Tân Uyên',11.1382623,106.4934195),('District0022','Province0003','Bến Cát',11.1322211,106.4361729),('District0023','Province0003','Dĩ An',10.9138813,106.7063471),('District0024','Province0003','Dầu Tiếng',11.3183015,106.1225659),('District0025','Province0003','Phú Giáo',11.3401800,106.4696215),('District0026','Province0003','Thuận An',10.9318810,106.6196286),('District0027','Province0003','Thủ Dầu Một',11.0256489,106.4924786),('District0028','Province0003','Tân Uyên',11.0569813,106.5899958),('District0029','Province0004','Bình Long',11.6727235,106.4070793),('District0030','Province0004','Bù Gia Mập',12.0679477,106.3370565),('District0031','Province0004','Bù Đăng',11.7710991,106.9095528),('District0032','Province0004','Bù Đốp',11.9866668,106.5049040),('District0033','Province0004','Chơn Thành',11.4793931,106.3297035),('District0034','Province0004','Hớn Quản',11.6270727,106.2733692),('District0035','Province0004','Lộc Ninh',11.8235674,106.2591101),('District0036','Province0004','Phú Riềng',11.7380722,106.5849952),('District0037','Province0004','Phước Long',11.8241075,106.8310960),('District0038','Province0004','Đồng Phú',11.4790593,106.6254313),('District0039','Province0004','Đồng Xoài',11.5186522,106.6789804),('District0040','Province0005','Bắc Bình',11.2646693,107.7033437),('District0041','Province0005','Hàm Thuận Bắc',NULL,NULL),('District0042','Province0005','Hàm Thuận Nam',NULL,NULL),('District0043','Province0005','Hàm Tân',NULL,NULL),('District0044','Province0005','La Gi',NULL,NULL),('District0045','Province0005','Phan Thiết',NULL,NULL),('District0046','Province0005','Phú Quí',NULL,NULL),('District0047','Province0005','Tuy Phong',NULL,NULL),('District0048','Province0005','Tánh Linh',NULL,NULL),('District0049','Province0005','Đức Linh',NULL,NULL),('District0050','Province0006','An Nhơn',NULL,NULL),('District0051','Province0006','Hoài Ân',NULL,NULL),('District0052','Province0006','Phù Cát',NULL,NULL),('District0053','Province0006','Phù Mỹ',NULL,NULL),('District0054','Province0006','Quy Nhơn',NULL,NULL),('District0055','Province0006','Tuy Phước',NULL,NULL),('District0056','Province0006','Tây Sơn',NULL,NULL),('District0057','Province0006','Vân Canh',NULL,NULL),('District0058','Province0006','Vĩnh Thạnh',NULL,NULL),('District0059','Province0007','Bạc Liêu',NULL,NULL),('District0060','Province0007','Giá Rai',NULL,NULL),('District0061','Province0007','Hòa Bình',NULL,NULL),('District0062','Province0007','Hồng Dân',NULL,NULL),('District0063','Province0007','Phước Long',NULL,NULL),('District0064','Province0007','Vĩnh Lợi',NULL,NULL),('District0065','Province0007','Đông Hải',NULL,NULL),('District0066','Province0008','Bắc Giang',NULL,NULL),('District0067','Province0008','Hiệp Hòa',NULL,NULL),('District0068','Province0008','Lạng Giang',NULL,NULL),('District0069','Province0008','Lục Nam',NULL,NULL),('District0070','Province0008','Lục Ngạn',NULL,NULL),('District0071','Province0008','Sơn Động',NULL,NULL),('District0072','Province0008','Tân Yên',NULL,NULL),('District0073','Province0008','Việt Yên',NULL,NULL),('District0074','Province0008','Yên Dũng',NULL,NULL),('District0075','Province0008','Yên Thế',NULL,NULL),('District0076','Province0009','Ba Bể',NULL,NULL),('District0077','Province0009','Bạch Thông',NULL,NULL),('District0078','Province0009','Bắc Kạn',NULL,NULL),('District0079','Province0009','Chợ Mới',NULL,NULL),('District0080','Province0009','Chợ Đồn',NULL,NULL),('District0081','Province0009','Na Rì',NULL,NULL),('District0082','Province0009','Ngân Sơn',NULL,NULL),('District0083','Province0009','Pác Nặm',NULL,NULL),('District0084','Province0010','Bắc Ninh',NULL,NULL),('District0085','Province0010','Gia Bình',NULL,NULL),('District0086','Province0010','Lương Tài',NULL,NULL),('District0087','Province0010','Quế Võ',NULL,NULL),('District0088','Province0010','Thuận Thành',NULL,NULL),('District0089','Province0010','Tiên Du',NULL,NULL),('District0090','Province0010','Từ Sơn',NULL,NULL),('District0091','Province0010','Yên Phong',NULL,NULL),('District0092','Province0011','Ba Tri',NULL,NULL),('District0093','Province0011','Bình Đại',NULL,NULL),('District0094','Province0011','Bến Tre',NULL,NULL),('District0095','Province0011','Châu Thành',NULL,NULL),('District0096','Province0011','Chợ Lách',NULL,NULL),('District0097','Province0011','Giồng Trôm',NULL,NULL),('District0098','Province0011','Mỏ Cày Bắc',NULL,NULL),('District0099','Province0011','Mỏ Cày Nam',NULL,NULL),('District0100','Province0011','Thạch Phú',NULL,NULL),('District0101','Province0012','Bảo Lâm',NULL,NULL),('District0102','Province0012','Bảo Lạc',NULL,NULL),('District0103','Province0012','Cao Bằng',NULL,NULL),('District0104','Province0012','Hòa An',NULL,NULL),('District0105','Province0012','Hà Quảng',NULL,NULL),('District0106','Province0012','Hạ Lang',NULL,NULL),('District0107','Province0012','Nguyên Bình',NULL,NULL),('District0108','Province0012','Quảng Hòa',NULL,NULL),('District0109','Province0012','Thạch An',NULL,NULL),('District0110','Province0012','Trùng Khánh',NULL,NULL),('District0111','Province0013','Cà Mau',NULL,NULL),('District0112','Province0013','Cái Nước',NULL,NULL),('District0113','Province0013','Ngọc Hiền',NULL,NULL),('District0114','Province0013','Năm Căn',NULL,NULL),('District0115','Province0013','Phú Tân',NULL,NULL),('District0116','Province0013','Thới Bình',NULL,NULL),('District0117','Province0013','Trần Văn Thời',NULL,NULL),('District0118','Province0013','U Minh',NULL,NULL),('District0119','Province0013','Đầm Dơi',NULL,NULL),('District0120','Province0014','Bình Thủy',NULL,NULL),('District0121','Province0014','Cái Răng',NULL,NULL),('District0122','Province0014','Cờ Đỏ',NULL,NULL),('District0123','Province0014','Ninh Kiều',NULL,NULL),('District0124','Province0014','Phong Điền',NULL,NULL),('District0125','Province0014','Thốt Nốt',NULL,NULL),('District0126','Province0014','Thới Lai',NULL,NULL),('District0127','Province0014','Vĩnh Thạnh',NULL,NULL),('District0128','Province0014','Ô Môn',NULL,NULL),('District0129','Province0015','Pleiku',NULL,NULL),('District0130','Province0015','An Khê',NULL,NULL),('District0131','Province0015','Ayun Pa',NULL,NULL),('District0132','Province0015','Chư Păh',NULL,NULL),('District0133','Province0015','Chư Prông',NULL,NULL),('District0134','Province0015','Chư Pưh',NULL,NULL),('District0135','Province0015','Chư Sê',NULL,NULL),('District0136','Province0015','Đak Đoa',NULL,NULL),('District0137','Province0015','Đak Pơ',NULL,NULL),('District0138','Province0015','Đức Cơ',NULL,NULL),('District0139','Province0015','Ia Grai',NULL,NULL),('District0140','Province0015','Ia Pa',NULL,NULL),('District0141','Province0015','Kbang',NULL,NULL),('District0142','Province0015','Kông Chro',NULL,NULL),('District0143','Province0015','Krông Pa',NULL,NULL),('District0144','Province0015','Mang Yang',NULL,NULL),('District0145','Province0015','Phú Thiện',NULL,NULL),('District0146','Province0016','Hòa Bình',NULL,NULL),('District0147','Province0016','Cao Phong',NULL,NULL),('District0148','Province0016','Đà Bắc',NULL,NULL),('District0149','Province0016','Kim Bôi',NULL,NULL),('District0150','Province0016','Lạc Sơn',NULL,NULL),('District0151','Province0016','Lạc Thủy',NULL,NULL),('District0152','Province0016','Lương Sơn',NULL,NULL),('District0153','Province0016','Mai Châu',NULL,NULL),('District0154','Province0016','Tân Lạc',NULL,NULL),('District0155','Province0016','Yên Thủy',NULL,NULL),('District0156','Province0017','Hà Giang',NULL,NULL),('District0157','Province0017','Bắc Mê',NULL,NULL),('District0158','Province0017','Bắc Quang',NULL,NULL),('District0159','Province0017','Đồng Văn',NULL,NULL),('District0160','Province0017','Hoàng Su Phì',NULL,NULL),('District0161','Province0017','Mèo Vạc',NULL,NULL),('District0162','Province0017','Quản Bạ',NULL,NULL),('District0163','Province0017','Quang Bình',NULL,NULL),('District0164','Province0017','Vị Xuyên',NULL,NULL),('District0165','Province0017','Xín Mần',NULL,NULL),('District0166','Province0017','Yên Minh',NULL,NULL),('District0167','Province0018','Phủ Lý',NULL,NULL),('District0168','Province0018','Duy Tiên',NULL,NULL),('District0169','Province0018','Kim Bảng',NULL,NULL),('District0170','Province0018','Lý Nhân',NULL,NULL),('District0171','Province0018','Bình Lục',NULL,NULL),('District0172','Province0018','Thanh Liêm',NULL,NULL),('District0173','Province0019','Ba Đình',NULL,NULL),('District0174','Province0019','Bắc Từ Liêm',NULL,NULL),('District0175','Province0019','Cầu Giấy',NULL,NULL),('District0176','Province0019','Đống Đa',NULL,NULL),('District0177','Province0019','Hà Đông',NULL,NULL),('District0178','Province0019','Hai Bà Trưng',NULL,NULL),('District0179','Province0019','Hoàn Kiếm',NULL,NULL),('District0180','Province0019','Hoàng Mai',NULL,NULL),('District0181','Province0019','Long Biên',NULL,NULL),('District0182','Province0019','Nam Từ Liêm',NULL,NULL),('District0183','Province0019','Tây Hồ',NULL,NULL),('District0184','Province0019','Thanh Xuân',NULL,NULL),('District0185','Province0019','Sơn Tây',NULL,NULL),('District0186','Province0019','Ba Vì',NULL,NULL),('District0187','Province0019','Chương Mỹ',NULL,NULL),('District0188','Province0019','Đan Phượng',NULL,NULL),('District0189','Province0019','Đông Anh',NULL,NULL),('District0190','Province0019','Gia Lâm',NULL,NULL),('District0191','Province0019','Hoài Đức',NULL,NULL),('District0192','Province0019','Mê Linh',NULL,NULL),('District0193','Province0019','Mỹ Đức',NULL,NULL),('District0194','Province0019','Phú Xuyên',NULL,NULL),('District0195','Province0019','Phúc Thọ',NULL,NULL),('District0196','Province0019','Quốc Oai',NULL,NULL),('District0197','Province0019','Sóc Sơn',NULL,NULL),('District0198','Province0019','Thạch Thất',NULL,NULL),('District0199','Province0019','Thanh Oai',NULL,NULL),('District0200','Province0019','Thanh Trì',NULL,NULL),('District0201','Province0019','Thường Tín',NULL,NULL),('District0202','Province0019','Ứng Hòa',NULL,NULL),('District0203','Province0020','Hà Tĩnh',NULL,NULL),('District0204','Province0020','Hồng Lĩnh',NULL,NULL),('District0205','Province0020','Kỳ Anh',NULL,NULL),('District0206','Province0020','Can Lộc',NULL,NULL),('District0207','Province0020','Cẩm Xuyên',NULL,NULL),('District0208','Province0020','Đức Thọ',NULL,NULL),('District0209','Province0020','Hương Khê',NULL,NULL),('District0210','Province0020','Hương Sơn',NULL,NULL),('District0211','Province0020','Kỳ Anh',NULL,NULL),('District0212','Province0020','Lộc Hà',NULL,NULL),('District0213','Province0020','Nghi Xuân',NULL,NULL),('District0214','Province0020','Thạch Hà',NULL,NULL),('District0215','Province0020','Vũ Quang',NULL,NULL),('District0216','Province0021','Hưng Yên',NULL,NULL),('District0217','Province0021','Mỹ Hào',NULL,NULL),('District0218','Province0021','Ân Thi',NULL,NULL),('District0219','Province0021','Khoái Châu',NULL,NULL),('District0220','Province0021','Kim Động',NULL,NULL),('District0221','Province0021','Phù Cừ',NULL,NULL),('District0222','Province0021','Tiên Lữ',NULL,NULL),('District0223','Province0021','Văn Giang',NULL,NULL),('District0224','Province0021','Văn Lâm',NULL,NULL),('District0225','Province0021','Yên Mỹ',NULL,NULL),('District0226','Province0022','Hải Dương',NULL,NULL),('District0227','Province0022','Chí Linh',NULL,NULL),('District0228','Province0022','Kinh Môn',NULL,NULL),('District0229','Province0022','Bình Giang',NULL,NULL),('District0230','Province0022','Cẩm Giàng',NULL,NULL),('District0231','Province0022','Gia Lộc',NULL,NULL),('District0232','Province0022','Kim Thành',NULL,NULL),('District0233','Province0022','Nam Sách',NULL,NULL),('District0234','Province0022','Ninh Giang',NULL,NULL),('District0235','Province0022','Thanh Hà',NULL,NULL),('District0236','Province0022','Thanh Miện',NULL,NULL),('District0237','Province0022','Tứ Kỳ',NULL,NULL),('District0238','Province0023','Hồng Bàng',NULL,NULL),('District0239','Province0023','Ngô Quyền',NULL,NULL),('District0240','Province0023','Lê Chân',NULL,NULL),('District0241','Province0023','Hải An',NULL,NULL),('District0242','Province0023','Kiến An',NULL,NULL),('District0243','Province0023','Đồ Sơn',NULL,NULL),('District0244','Province0023','Thủy Nguyên',NULL,NULL),('District0245','Province0023','An Dương',NULL,NULL),('District0246','Province0023','Cát Hải',NULL,NULL),('District0247','Province0023','Bạch Long Vĩ',NULL,NULL),('District0248','Province0023','Tiên Lãng',NULL,NULL),('District0249','Province0023','Vĩnh Bảo',NULL,NULL),('District0250','Province0023','An Lão',NULL,NULL),('District0251','Province0023','Dương Kinh',NULL,NULL),('District0252','Province0024','Châu Thành A',NULL,NULL),('District0253','Province0024','Châu Thành',NULL,NULL),('District0254','Province0024','Long Mỹ',NULL,NULL),('District0255','Province0024','Vị Thanh',NULL,NULL),('District0256','Province0024','Vị Thủy',NULL,NULL),('District0257','Province0024','Ngã Bảy',NULL,NULL),('District0258','Province0024','Phụng Hiệp',NULL,NULL),('District0259','Province0024','Long Phú',NULL,NULL),('District0260','Province0024','Mỹ Tú',NULL,NULL),('District0261','Province0024','Trần Đề',NULL,NULL),('District0262','Province0025','Quận 1',NULL,NULL),('District0263','Province0025','Quận 3',NULL,NULL),('District0264','Province0025','Quận 4',NULL,NULL),('District0265','Province0025','Quận 5',NULL,NULL),('District0266','Province0025','Quận 6',NULL,NULL),('District0267','Province0025','Quận 7',NULL,NULL),('District0268','Province0025','Quận 8',NULL,NULL),('District0269','Province0025','Quận 10',NULL,NULL),('District0270','Province0025','Quận 11',NULL,NULL),('District0271','Province0025','Quận 12',NULL,NULL),('District0272','Province0025','Bình Tân',NULL,NULL),('District0273','Province0025','Bình Thạnh',NULL,NULL),('District0274','Province0025','Gò Vấp',NULL,NULL),('District0275','Province0025','Phú Nhuận',NULL,NULL),('District0276','Province0025','Tân Bình',NULL,NULL),('District0277','Province0025','Tân Phú',NULL,NULL),('District0278','Province0025','Thủ Đức',NULL,NULL),('District0279','Province0025','Bình Chánh',NULL,NULL),('District0280','Province0025','Cần Giờ',NULL,NULL),('District0281','Province0025','Củ Chi',NULL,NULL),('District0282','Province0025','Hóc Môn',NULL,NULL),('District0283','Province0025','Nhà Bè',NULL,NULL),('District0284','Province0026','Nha Trang',NULL,NULL),('District0285','Province0026','Cam Ranh',NULL,NULL),('District0286','Province0026','Cam Lâm',NULL,NULL),('District0287','Province0026','Diên Khánh',NULL,NULL),('District0288','Province0026','Khánh Sơn',NULL,NULL),('District0289','Province0026','Khánh Vĩnh',NULL,NULL),('District0290','Province0026','Ninh Hòa',NULL,NULL),('District0291','Province0026','Trường Sa',NULL,NULL),('District0292','Province0026','Vạn Ninh',NULL,NULL),('District0293','Province0027','Rạch Giá',NULL,NULL),('District0294','Province0027','Hà Tiên',NULL,NULL),('District0295','Province0027','Phú Quốc',NULL,NULL),('District0296','Province0027','An Biên',NULL,NULL),('District0297','Province0027','An Minh',NULL,NULL),('District0298','Province0027','Châu Thành',NULL,NULL),('District0299','Province0027','Giang Thành',NULL,NULL),('District0300','Province0027','Giồng Riềng',NULL,NULL),('District0301','Province0027','Gò Quao',NULL,NULL),('District0302','Province0027','Hòn Đất',NULL,NULL),('District0303','Province0027','Kiên Hải',NULL,NULL),('District0304','Province0027','Kiên Lương',NULL,NULL),('District0305','Province0027','Tân Hiệp',NULL,NULL),('District0306','Province0027','U Minh Thượng',NULL,NULL),('District0307','Province0027','Vĩnh Thuận',NULL,NULL),('District0308','Province0028','Kon Tum',NULL,NULL),('District0309','Province0028','Đắk Glei',NULL,NULL),('District0310','Province0028','Đắk Hà',NULL,NULL),('District0311','Province0028','Đắk Tô',NULL,NULL),('District0312','Province0028','Ia H\'Drai',NULL,NULL),('District0313','Province0028','Kon Plông',NULL,NULL),('District0314','Province0028','Kon Rẫy',NULL,NULL),('District0315','Province0028','Ngọc Hồi',NULL,NULL),('District0316','Province0028','Sa Thầy',NULL,NULL),('District0317','Province0029','Lai Châu',NULL,NULL),('District0318','Province0029','Phong Thổ',NULL,NULL),('District0319','Province0029','Sìn Hồ',NULL,NULL),('District0320','Province0029','Mường Tè',NULL,NULL),('District0321','Province0029','Than Uyên',NULL,NULL),('District0322','Province0029','Tân Uyên',NULL,NULL),('District0323','Province0029','Tam Đường',NULL,NULL),('District0324','Province0029','Nậm Nhùn',NULL,NULL),('District0325','Province0030','Tân An',NULL,NULL),('District0326','Province0030','Bến Lức',NULL,NULL),('District0327','Province0030','Châu Thành',NULL,NULL),('District0328','Province0030','Cần Đước',NULL,NULL),('District0329','Province0030','Cần Giuộc',NULL,NULL),('District0330','Province0030','Đức Hòa',NULL,NULL),('District0331','Province0030','Đức Huệ',NULL,NULL),('District0332','Province0030','Mộc Hóa',NULL,NULL),('District0333','Province0030','Tân Trụ',NULL,NULL),('District0334','Province0030','Thạnh Hóa',NULL,NULL),('District0335','Province0030','Vĩnh Hưng',NULL,NULL),('District0336','Province0031','Lào Cai',NULL,NULL),('District0337','Province0031','Sa Pa',NULL,NULL),('District0338','Province0031','Bát Xát',NULL,NULL),('District0339','Province0031','Bảo Thắng',NULL,NULL),('District0340','Province0031','Bảo Yên',NULL,NULL),('District0341','Province0031','Bắc Hà',NULL,NULL),('District0342','Province0031','Mường Khương',NULL,NULL),('District0343','Province0031','Si Ma Cai',NULL,NULL),('District0344','Province0031','Văn Bàn',NULL,NULL),('District0345','Province0032','Đà Lạt',NULL,NULL),('District0346','Province0032','Bảo Lộc',NULL,NULL),('District0347','Province0032','Bảo Lâm',NULL,NULL),('District0348','Province0032','Cát Tiên',NULL,NULL),('District0349','Province0032','Di Linh',NULL,NULL),('District0350','Province0032','Đạ Huoai',NULL,NULL),('District0351','Province0032','Đạ Tẻh',NULL,NULL),('District0352','Province0032','Đam Rông',NULL,NULL),('District0353','Province0032','Đơn Dương',NULL,NULL),('District0354','Province0032','Đức Trọng',NULL,NULL),('District0355','Province0032','Lạc Dương',NULL,NULL),('District0356','Province0032','Lâm Hà',NULL,NULL),('District0357','Province0033','Lạng Sơn',NULL,NULL),('District0358','Province0033','Bắc Sơn',NULL,NULL),('District0359','Province0033','Bình Gia',NULL,NULL),('District0360','Province0033','Cao Lộc',NULL,NULL),('District0361','Province0033','Chi Lăng',NULL,NULL),('District0362','Province0033','Đình Lập',NULL,NULL),('District0363','Province0033','Hữu Lũng',NULL,NULL),('District0364','Province0033','Lộc Bình',NULL,NULL),('District0365','Province0033','Tràng Định',NULL,NULL),('District0366','Province0033','Văn Lãng',NULL,NULL),('District0367','Province0033','Văn Quan',NULL,NULL),('District0368','Province0034','Nam Định',NULL,NULL),('District0369','Province0034','Mỹ Lộc',NULL,NULL),('District0370','Province0034','Vụ Bản',NULL,NULL),('District0371','Province0034','Ý Yên',NULL,NULL),('District0372','Province0034','Nghĩa Hưng',NULL,NULL),('District0373','Province0034','Nam Trực',NULL,NULL),('District0374','Province0034','Trực Ninh',NULL,NULL),('District0375','Province0034','Xuân Trường',NULL,NULL),('District0376','Province0034','Giao Thủy',NULL,NULL),('District0377','Province0034','Hải Hậu',NULL,NULL),('District0378','Province0035','Vinh',NULL,NULL),('District0379','Province0035','Cửa Lò',NULL,NULL),('District0380','Province0035','Hoàng Mai',NULL,NULL),('District0381','Province0035','Thái Hòa',NULL,NULL),('District0382','Province0035','Anh Sơn',NULL,NULL),('District0383','Province0035','Con Cuông',NULL,NULL),('District0384','Province0035','Diễn Châu',NULL,NULL),('District0385','Province0035','Đô Lương',NULL,NULL),('District0386','Province0035','Hưng Nguyên',NULL,NULL),('District0387','Province0035','Kỳ Sơn',NULL,NULL),('District0388','Province0035','Nam Đàn',NULL,NULL),('District0389','Province0035','Nghi Lộc',NULL,NULL),('District0390','Province0035','Nghĩa Đàn',NULL,NULL),('District0391','Province0035','Quế Phong',NULL,NULL),('District0392','Province0035','Quỳ Châu',NULL,NULL),('District0393','Province0035','Quỳ Hợp',NULL,NULL),('District0394','Province0035','Quỳnh Lưu',NULL,NULL),('District0395','Province0035','Tân Kỳ',NULL,NULL),('District0396','Province0035','Thanh Chương',NULL,NULL),('District0397','Province0035','Tương Dương',NULL,NULL),('District0398','Province0035','Yên Thành',NULL,NULL),('District0399','Province0036','Hoa Lư',NULL,NULL),('District0400','Province0036','Tam Điệp',NULL,NULL),('District0401','Province0036','Kim Sơn',NULL,NULL),('District0402','Province0036','Nho Quan',NULL,NULL),('District0403','Province0036','Yên Khánh',NULL,NULL),('District0404','Province0036','Gia Viễn',NULL,NULL),('District0405','Province0036','Yên Mô',NULL,NULL),('District0406','Province0037','Phan Rang – Tháp Chàm',NULL,NULL),('District0407','Province0037','Ninh Phước',NULL,NULL),('District0408','Province0037','Ninh Hải',NULL,NULL),('District0409','Province0037','Ninh Sơn',NULL,NULL),('District0410','Province0037','Thuận Bắc',NULL,NULL),('District0411','Province0037','Thuận Nam',NULL,NULL),('District0412','Province0037','Bác Ái',NULL,NULL),('District0413','Province0038','Việt Trì',NULL,NULL),('District0414','Province0038','Phú Thọ',NULL,NULL),('District0415','Province0038','Lâm Thao',NULL,NULL),('District0416','Province0038','Cẩm Khê',NULL,NULL),('District0417','Province0038','Hạ Hòa',NULL,NULL),('District0418','Province0038','Thanh Sơn',NULL,NULL),('District0419','Province0038','Tân Sơn',NULL,NULL),('District0420','Province0038','Yên Lập',NULL,NULL),('District0421','Province0038','Thanh Ba',NULL,NULL),('District0422','Province0038','Đoan Hùng',NULL,NULL),('District0423','Province0038','Phù Ninh',NULL,NULL),('District0424','Province0038','Thanh Thủy',NULL,NULL),('District0425','Province0038','Tam Nông',NULL,NULL),('District0426','Province0038','Tuy Hòa',NULL,NULL),('District0427','Province0038','Đông Hòa',NULL,NULL),('District0428','Province0038','Sông Cầu',NULL,NULL),('District0429','Province0038','Đồng Xuân',NULL,NULL),('District0430','Province0038','Phú Hòa',NULL,NULL),('District0431','Province0038','Sơn Hòa',NULL,NULL),('District0432','Province0038','Sông Hinh',NULL,NULL),('District0433','Province0038','Tây Hòa',NULL,NULL),('District0434','Province0038','Tuy An',NULL,NULL),('District0435','Province0038','Đồng Hới',NULL,NULL),('District0436','Province0038','Ba Đồn',NULL,NULL),('District0437','Province0038','Lệ Thủy',NULL,NULL),('District0438','Province0038','Quảng Ninh',NULL,NULL),('District0439','Province0038','Bố Trạch',NULL,NULL),('District0440','Province0038','Quảng Trạch',NULL,NULL),('District0441','Province0038','Tuyên Hóa',NULL,NULL),('District0442','Province0038','Minh Hóa',NULL,NULL),('District0443','Province0038','Quảng Bình',NULL,NULL),('District0451','Province0039','Tam Kỳ',NULL,NULL),('District0452','Province0039','Hội An',NULL,NULL),('District0453','Province0039','Điện Bàn',NULL,NULL),('District0454','Province0039','Thăng Bình',NULL,NULL),('District0455','Province0039','Tiên Phước',NULL,NULL),('District0456','Province0039','Núi Thành',NULL,NULL),('District0457','Province0039','Phú Ninh',NULL,NULL),('District0458','Province0039','Quế Sơn',NULL,NULL),('District0459','Province0039','Duy Xuyên',NULL,NULL),('District0460','Province0039','Đại Lộc',NULL,NULL),('District0461','Province0039','Điện Bàn',NULL,NULL),('District0462','Province0039','Hội An',NULL,NULL),('District0463','Province0039','Tam Kỳ',NULL,NULL),('District0464','Province0039','Núi Thành',NULL,NULL),('District0465','Province0039','Phú Ninh',NULL,NULL),('District0466','Province0039','Quế Sơn',NULL,NULL),('District0467','Province0039','Duy Xuyên',NULL,NULL),('District0468','Province0039','Đại Lộc',NULL,NULL),('District0469','Province0040','Quảng Ngãi',NULL,NULL),('District0470','Province0040','Bình Sơn',NULL,NULL),('District0471','Province0040','Trà Bồng',NULL,NULL),('District0472','Province0040','Tây Trà',NULL,NULL),('District0473','Province0040','Sơn Tịnh',NULL,NULL),('District0474','Province0040','Tư Nghĩa',NULL,NULL),('District0475','Province0040','Sơn Hà',NULL,NULL),('District0476','Province0040','Minh Long',NULL,NULL),('District0477','Province0040','Nghĩa Hành',NULL,NULL),('District0478','Province0040','Mộ Đức',NULL,NULL),('District0479','Province0040','Đức Phổ',NULL,NULL),('District0480','Province0040','Ba Tơ',NULL,NULL),('District0481','Province0040','Lý Sơn',NULL,NULL),('District0482','Province0040','Sa Huỳnh',NULL,NULL),('District0483','Province0040','Thạch Kỳ',NULL,NULL),('District0484','Province0040','Phổ Phong',NULL,NULL),('District0485','Province0040','Phổ Thạnh',NULL,NULL),('District0486','Province0040','Phổ Vinh',NULL,NULL),('District0487','Province0041','Tam Kỳ',NULL,NULL),('District0488','Province0041','Hội An',NULL,NULL),('District0489','Province0041','Điện Bàn',NULL,NULL),('District0490','Province0041','Thăng Bình',NULL,NULL),('District0491','Province0041','Núi Thành',NULL,NULL),('District0492','Province0041','Đại Lộc',NULL,NULL),('District0493','Province0041','Duy Xuyên',NULL,NULL),('District0494','Province0041','Quế Sơn',NULL,NULL),('District0495','Province0041','Phú Ninh',NULL,NULL),('District0496','Province0041','Tiên Phước',NULL,NULL),('District0497','Province0041','Bắc Trà My',NULL,NULL),('District0498','Province0041','Hiệp Đức',NULL,NULL),('District0499','Province0041','Nam Trà My',NULL,NULL),('District0500','Province0041','Phước Sơn',NULL,NULL),('District0501','Province0041','Nam Giang',NULL,NULL),('District0502','Province0041','Đông Giang',NULL,NULL),('District0503','Province0041','Tây Giang',NULL,NULL),('District0504','Province0041','Nông Sơn',NULL,NULL),('District0505','Province0042','Quảng Ngãi',NULL,NULL),('District0506','Province0042','Bình Sơn',NULL,NULL),('District0507','Province0042','Trà Bồng',NULL,NULL),('District0508','Province0042','Tây Trà',NULL,NULL),('District0509','Province0042','Sơn Tịnh',NULL,NULL),('District0510','Province0042','Tư Nghĩa',NULL,NULL),('District0511','Province0042','Sơn Hà',NULL,NULL),('District0512','Province0042','Minh Long',NULL,NULL),('District0513','Province0043','Hạ Long',NULL,NULL),('District0514','Province0043','Móng Cái',NULL,NULL),('District0515','Province0043','Uông Bí',NULL,NULL),('District0516','Province0043','Cẩm Phả',NULL,NULL),('District0517','Province0043','Đông Triều',NULL,NULL),('District0518','Province0043','Quảng Yên',NULL,NULL),('District0519','Province0043','Vân Đồn',NULL,NULL),('District0520','Province0043','Đầm Hà',NULL,NULL),('District0521','Province0043','Tiên Yên',NULL,NULL),('District0522','Province0043','Ba Chẽ',NULL,NULL),('District0523','Province0043','Hải Hà',NULL,NULL),('District0524','Province0043','Bình Liêu',NULL,NULL),('District0525','Province0043','Cô Tô',NULL,NULL),('District0526','Province0044','Thành phố Đông Hà',NULL,NULL),('District0527','Province0044','Thị xã Quảng Trị',NULL,NULL),('District0528','Province0044','Huyện Vĩnh Linh',NULL,NULL),('District0529','Province0044','Huyện Gio Linh',NULL,NULL),('District0530','Province0044','Huyện Cam Lộ',NULL,NULL),('District0531','Province0044','Huyện Triệu Phong',NULL,NULL),('District0532','Province0044','Huyện Hải Lăng',NULL,NULL),('District0533','Province0044','Huyện Hướng Hóa',NULL,NULL),('District0534','Province0044','Huyện Đakrông',NULL,NULL),('District0535','Province0044','Huyện đảo Cồn Cỏ',NULL,NULL),('District0536','Province0045','Thành phố Sóc Trăng',NULL,NULL),('District0537','Province0045','Thị xã Vĩnh Châu',NULL,NULL),('District0538','Province0045','Thị xã Ngã Năm',NULL,NULL),('District0539','Province0045','Huyện Kế Sách',NULL,NULL),('District0540','Province0045','Huyện Mỹ Xuyên',NULL,NULL),('District0541','Province0045','Huyện Mỹ Tú',NULL,NULL),('District0542','Province0045','Huyện Long Phú',NULL,NULL),('District0543','Province0045','Huyện Thạnh Trị',NULL,NULL),('District0544','Province0045','Huyện Trần Đề',NULL,NULL),('District0545','Province0045','Huyện Cù Lao Dung',NULL,NULL),('District0546','Province0045','Huyện Châu Thành',NULL,NULL),('District0547','Province0046','Thành phố Sơn La',NULL,NULL),('District0548','Province0046','Huyện Mộc Châu',NULL,NULL),('District0549','Province0046','Huyện Mai Sơn',NULL,NULL),('District0550','Province0046','Huyện Sông Mã',NULL,NULL),('District0551','Province0046','Huyện Yên Châu',NULL,NULL),('District0552','Province0046','Huyện Mường La',NULL,NULL),('District0553','Province0046','Huyện Phù Yên',NULL,NULL),('District0554','Province0046','Huyện Bắc Yên',NULL,NULL),('District0555','Province0046','Huyện Vân Hồ',NULL,NULL),('District0556','Province0046','Huyện Mường La',NULL,NULL),('District0557','Province0046','Huyện Sốp Cộp',NULL,NULL),('District0558','Province0046','Huyện Quỳnh Nhai',NULL,NULL),('District0559','Province0046','Huyện Thuận Châu',NULL,NULL),('District0560','Province0046','Huyện Phù Yên',NULL,NULL),('District0561','Province0047','Thanh Hóa',NULL,NULL),('District0562','Province0047','Sầm Sơn',NULL,NULL),('District0563','Province0047','Bỉm Sơn',NULL,NULL),('District0564','Province0047','Nghi Sơn',NULL,NULL),('District0565','Province0047','Bá Thước',NULL,NULL),('District0566','Province0047','Cẩm Thủy',NULL,NULL),('District0567','Province0047','Đông Sơn',NULL,NULL),('District0568','Province0047','Hà Trung',NULL,NULL),('District0569','Province0047','Hậu Lộc',NULL,NULL),('District0570','Province0047','Hoằng Hóa',NULL,NULL),('District0571','Province0047','Lang Chánh',NULL,NULL),('District0572','Province0047','Mường Lát',NULL,NULL),('District0573','Province0047','Nga Sơn',NULL,NULL),('District0574','Province0047','Ngọc Lặc',NULL,NULL),('District0575','Province0047','Như Thanh',NULL,NULL),('District0576','Province0047','Như Xuân',NULL,NULL),('District0577','Province0047','Nông Cống',NULL,NULL),('District0578','Province0047','Quan Hóa',NULL,NULL),('District0579','Province0047','Quảng Xương',NULL,NULL),('District0580','Province0047','Thạch Thành',NULL,NULL),('District0581','Province0047','Thiệu Hóa',NULL,NULL),('District0582','Province0047','Thọ Xuân',NULL,NULL),('District0583','Province0047','Thường Xuân',NULL,NULL),('District0584','Province0047','Triệu Sơn',NULL,NULL),('District0585','Province0047','Vĩnh Lộc',NULL,NULL),('District0586','Province0047','Yên Định',NULL,NULL),('District0587','Province0048','Thái Bình',NULL,NULL),('District0588','Province0048','Đông Hưng',NULL,NULL),('District0589','Province0048','Hưng Hà',NULL,NULL),('District0590','Province0048','Kiến Xương',NULL,NULL),('District0591','Province0048','Quỳnh Phụ',NULL,NULL),('District0592','Province0048','Thái Thụy',NULL,NULL),('District0593','Province0048','Tiền Hải',NULL,NULL),('District0594','Province0048','Vũ Thư',NULL,NULL),('District0595','Province0049','Thái Nguyên',NULL,NULL),('District0596','Province0049','Sông Công',NULL,NULL),('District0597','Province0049','Phổ Yên',NULL,NULL),('District0598','Province0049','Đại Từ',NULL,NULL),('District0599','Province0049','Định Hóa',NULL,NULL),('District0600','Province0049','Đồng Hỷ',NULL,NULL),('District0601','Province0049','Phú Bình',NULL,NULL),('District0602','Province0049','Phú Lương',NULL,NULL),('District0603','Province0049','Võ Nhai',NULL,NULL),('District0604','Province0050','Huế',NULL,NULL),('District0605','Province0050','Hương Thủy',NULL,NULL),('District0606','Province0050','Hương Trà',NULL,NULL),('District0607','Province0050','Phong Điền',NULL,NULL),('District0608','Province0050','Quảng Điền',NULL,NULL),('District0609','Province0050','Phú Vang',NULL,NULL),('District0610','Province0050','Phú Lộc',NULL,NULL),('District0611','Province0050','A Lưới',NULL,NULL),('District0612','Province0050','Nam Đông',NULL,NULL),('District0613','Province0051','Mỹ Tho',NULL,NULL),('District0614','Province0051','Gò Công',NULL,NULL),('District0615','Province0051','Cai Lậy',NULL,NULL),('District0616','Province0051','Cái Bè',NULL,NULL),('District0617','Province0051','Cai Lậy (huyện)',NULL,NULL),('District0618','Province0051','Tân Phước',NULL,NULL),('District0619','Province0051','Châu Thành',NULL,NULL),('District0620','Province0051','Chợ Gạo',NULL,NULL),('District0621','Province0051','Gò Công Tây',NULL,NULL),('District0622','Province0051','Gò Công Đông',NULL,NULL),('District0623','Province0051','Tân Phú Đông',NULL,NULL),('District0624','Province0052','Trà Vinh',NULL,NULL),('District0625','Province0052','Duyên Hải',NULL,NULL),('District0626','Province0052','Càng Long',NULL,NULL),('District0627','Province0052','Cầu Kè',NULL,NULL),('District0628','Province0052','Cầu Ngang',NULL,NULL),('District0629','Province0052','Châu Thành',NULL,NULL),('District0630','Province0052','Duyên Hải (huyện)',NULL,NULL),('District0631','Province0052','Tiểu Cần',NULL,NULL),('District0632','Province0052','Trà Cú',NULL,NULL),('District0633','Province0053','Tây Ninh',NULL,NULL),('District0634','Province0053','Hòa Thành',NULL,NULL),('District0635','Province0053','Trảng Bàng',NULL,NULL),('District0636','Province0053','Tân Biên',NULL,NULL),('District0637','Province0053','Tân Châu',NULL,NULL),('District0638','Province0053','Châu Thành',NULL,NULL),('District0639','Province0053','Dương Minh Châu',NULL,NULL),('District0640','Province0053','Bến Cầu',NULL,NULL),('District0641','Province0053','Gò Dầu',NULL,NULL),('District0642','Province0054','Tây Ninh',NULL,NULL),('District0643','Province0054','Hòa Thành',NULL,NULL),('District0644','Province0054','Trảng Bàng',NULL,NULL),('District0645','Province0054','Bến Cầu',NULL,NULL),('District0646','Province0054','Châu Thành',NULL,NULL),('District0647','Province0054','Dương Minh Châu',NULL,NULL),('District0648','Province0054','Gò Dầu',NULL,NULL),('District0649','Province0054','Tân Biên',NULL,NULL),('District0650','Province0054','Tân Châu',NULL,NULL),('District0651','Province0055','Vĩnh Long',NULL,NULL),('District0652','Province0055','Bình Minh',NULL,NULL),('District0653','Province0055','Bình Tân',NULL,NULL),('District0654','Province0055','Long Hồ',NULL,NULL),('District0655','Province0055','Mang Thít',NULL,NULL),('District0656','Province0055','Tam Bình',NULL,NULL),('District0657','Province0055','Trà Ôn',NULL,NULL),('District0658','Province0055','Vũng Liêm',NULL,NULL),('District0659','Province0056','Vĩnh Yên',NULL,NULL),('District0660','Province0056','Phúc Yên',NULL,NULL),('District0661','Province0056','Bình Xuyên',NULL,NULL),('District0662','Province0056','Lập Thạch',NULL,NULL),('District0663','Province0056','Sông Lô',NULL,NULL),('District0664','Province0056','Tam Dương',NULL,NULL),('District0665','Province0056','Tam Đảo',NULL,NULL),('District0666','Province0056','Vĩnh Tường',NULL,NULL),('District0667','Province0056','Yên Lạc',NULL,NULL),('District0668','Province0057','Yên Bái',NULL,NULL),('District0669','Province0057','Nghĩa Lộ',NULL,NULL),('District0670','Province0057','Văn Yên',NULL,NULL),('District0671','Province0057','Yên Bình',NULL,NULL),('District0672','Province0057','Mù Cang Chải',NULL,NULL),('District0673','Province0057','Văn Chấn',NULL,NULL),('District0674','Province0057','Trấn Yên',NULL,NULL),('District0675','Province0057','Trạm Tấu',NULL,NULL),('District0676','Province0057','Lục Yên',NULL,NULL),('District0677','Province0058','Điện Biên Phủ',NULL,NULL),('District0678','Province0058','Mường Lay',NULL,NULL),('District0679','Province0058','Mường Nhé',NULL,NULL),('District0680','Province0058','Mường Chà',NULL,NULL),('District0681','Province0058','Tủa Chùa',NULL,NULL),('District0682','Province0058','Tuần Giáo',NULL,NULL),('District0683','Province0058','Mường Ảng',NULL,NULL),('District0684','Province0058','Điện Biên',NULL,NULL),('District0685','Province0058','Điện Biên Đông',NULL,NULL),('District0686','Province0058','Nậm Pồ',NULL,NULL),('District0687','Province0059','Đà Nẵng',NULL,NULL),('District0688','Province0059','Hải Châu',NULL,NULL),('District0689','Province0059','Thanh Khê',NULL,NULL),('District0690','Province0059','Sơn Trà',NULL,NULL),('District0691','Province0059','Cẩm Lệ',NULL,NULL),('District0692','Province0059','Liên Chiểu',NULL,NULL),('District0693','Province0059','Ngũ Hành Sơn',NULL,NULL),('District0694','Province0059','Hòa Vang',NULL,NULL),('District0695','Province0059','Buôn Ma Thuột',NULL,NULL),('District0696','Province0060','Buôn Hồ',NULL,NULL),('District0697','Province0060','Cư M\'gar',NULL,NULL),('District0698','Province0060','Ea H\'leo',NULL,NULL),('District0699','Province0060','Ea Kar',NULL,NULL),('District0700','Province0060','Krông Ana',NULL,NULL),('District0701','Province0060','Krông Búk',NULL,NULL),('District0702','Province0060','Krông Năng',NULL,NULL),('District0703','Province0060','Krông Pắc',NULL,NULL),('District0704','Province0060','Lắk',NULL,NULL),('District0705','Province0061','Gia Nghĩa',NULL,NULL),('District0706','Province0061','Cư Jút',NULL,NULL),('District0707','Province0061','Đắk Glong',NULL,NULL),('District0708','Province0061','Đắk Mil',NULL,NULL),('District0709','Province0061','Đắk R\'lấp',NULL,NULL),('District0710','Province0061','Đắk Song',NULL,NULL),('District0711','Province0061','Krông Nô',NULL,NULL),('District0712','Province0061','Tuy Đức',NULL,NULL),('District0713','Province0062','Biên Hòa',NULL,NULL),('District0714','Province0062','Long Khánh',NULL,NULL),('District0715','Province0062','Xuân Lộc',NULL,NULL),('District0716','Province0062','Trảng Bom',NULL,NULL),('District0717','Province0062','Thống Nhất',NULL,NULL),('District0718','Province0062','Vĩnh Cửu',NULL,NULL),('District0719','Province0062','Tân Phú',NULL,NULL),('District0720','Province0062','Nhơn Trạch',NULL,NULL),('District0721','Province0062','Định Quán',NULL,NULL),('District0722','Province0062','Long Thành',NULL,NULL),('District0723','Province0062','Cẩm Mỹ',NULL,NULL),('District0724','Province0063','Cao Lãnh',NULL,NULL),('District0725','Province0063','Sa Đéc',NULL,NULL),('District0726','Province0063','Hồng Ngự',NULL,NULL),('District0727','Province0063','Tân Hồng',NULL,NULL),('District0728','Province0063','Lai Vung',NULL,NULL),('District0729','Province0063','Lấp Vò',NULL,NULL),('District0730','Province0063','Châu Thành',NULL,NULL),('District0731','Province0063','Thanh Bình',NULL,NULL),('District0732','Province0063','Tháp Mười',NULL,NULL),('District0733','Province0063','Tam Nông',NULL,NULL);
/*!40000 ALTER TABLE `district` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventoryshop`
--

DROP TABLE IF EXISTS `inventoryshop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventoryshop` (
  `idList` varchar(45) NOT NULL,
  `idShop` varchar(45) DEFAULT NULL,
  `idDetail` varchar(45) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`idList`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventoryshop`
--

LOCK TABLES `inventoryshop` WRITE;
/*!40000 ALTER TABLE `inventoryshop` DISABLE KEYS */;
INSERT INTO `inventoryshop` VALUES ('IS000000000000','Shop000000000000','DP000000000000',10),('IS000000000001','Shop000000000000','DP000000000001',5);
/*!40000 ALTER TABLE `inventoryshop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `listofdeliverystores`
--

DROP TABLE IF EXISTS `listofdeliverystores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `listofdeliverystores` (
  `idList` varchar(45) NOT NULL,
  `idSalesSlip` varchar(45) DEFAULT NULL,
  `idShop` varchar(45) DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`idList`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listofdeliverystores`
--

LOCK TABLES `listofdeliverystores` WRITE;
/*!40000 ALTER TABLE `listofdeliverystores` DISABLE KEYS */;
/*!40000 ALTER TABLE `listofdeliverystores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `listofreceivingstores`
--

DROP TABLE IF EXISTS `listofreceivingstores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `listofreceivingstores` (
  `idList` varchar(45) NOT NULL,
  `idPurchaseSlip` varchar(45) DEFAULT NULL,
  `idShop` varchar(45) DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`idList`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listofreceivingstores`
--

LOCK TABLES `listofreceivingstores` WRITE;
/*!40000 ALTER TABLE `listofreceivingstores` DISABLE KEYS */;
INSERT INTO `listofreceivingstores` VALUES ('LORS000000000000','PS000000000000','Shop000000000000',0),('LORS000000000001','PS000000000000','Shop000000000000',0),('LORS000000000002','PS000000000000','Shop000000000000',0),('LORS000000000003','PS000000000000','Shop000000000000',0),('LORS000000000004','PS000000000000','Shop000000000001',0),('LORS000000000005','PS000000000000','Shop000000000001',0),('LORS000000000006','PS000000000000','Shop000000000001',0),('LORS000000000007','PS000000000000','Shop000000000001',0),('LORS000000000008','PS000000000000','Shop000000000001',0),('LORS000000000009','PS000000000000','Shop000000000001',0),('LORS000000000010','PS000000000000','Shop000000000001',0),('LORS000000000011','PS000000000000','Shop000000000001',0),('LORS000000000012','PS000000000000','Shop000000000001',0),('LORS000000000013','PS000000000000','Shop000000000003',0),('LORS000000000014','PS000000000001','Shop000000000000',0),('LORS000000000015','PS000000000002','Shop000000000003',0),('LORS000000000016','PS000000000002','Shop000000000002',0);
/*!40000 ALTER TABLE `listofreceivingstores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `listwarehouseincharge`
--

DROP TABLE IF EXISTS `listwarehouseincharge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `listwarehouseincharge` (
  `idList` varchar(45) NOT NULL,
  `idStaff` varchar(45) NOT NULL,
  `idShop` varchar(45) NOT NULL,
  `cccdNumber` varchar(45) DEFAULT NULL,
  `motorbikeNumber` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idList`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listwarehouseincharge`
--

LOCK TABLES `listwarehouseincharge` WRITE;
/*!40000 ALTER TABLE `listwarehouseincharge` DISABLE KEYS */;
/*!40000 ALTER TABLE `listwarehouseincharge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notification` (
  `idNotification` varchar(45) NOT NULL,
  `idUser` varchar(45) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `viewingStatus` tinyint(1) NOT NULL,
  PRIMARY KEY (`idNotification`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `price`
--

DROP TABLE IF EXISTS `price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `price` (
  `idPrice` varchar(45) NOT NULL,
  `idProduct` varchar(45) NOT NULL,
  `dateUpdate` datetime DEFAULT NULL,
  `price` int unsigned DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`idPrice`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `price`
--

LOCK TABLES `price` WRITE;
/*!40000 ALTER TABLE `price` DISABLE KEYS */;
INSERT INTO `price` VALUES ('Price000000000000','Product000000000003','2025-05-27 00:00:00',3,0),('Price000000000001','Product000000000001','2025-05-01 10:22:45',342000,1),('Price000000000002','Product000000000002','2025-05-01 10:22:45',312000,1),('Price000000000003','Product000000000003','2025-05-01 10:22:45',240000,1),('Price000000000004','Product000000000018','2025-05-27 00:00:00',3,0),('Price000000000005','Product000000000018','2025-05-27 00:00:00',32,0);
/*!40000 ALTER TABLE `price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `idProduct` varchar(45) NOT NULL,
  `nameProduct` varchar(255) DEFAULT NULL,
  `idStyle` varchar(45) NOT NULL,
  `idMaterial` varchar(45) NOT NULL,
  `idBrand` varchar(45) NOT NULL,
  `idCategory` varchar(45) NOT NULL,
  `idSupplier` varchar(45) DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idProduct`),
  FULLTEXT KEY `idProduct` (`idProduct`,`nameProduct`,`description`),
  FULLTEXT KEY `idProduct_2` (`idProduct`,`nameProduct`,`description`),
  FULLTEXT KEY `idProduct_3` (`idProduct`,`nameProduct`,`description`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('demo','demo','demo','demo','demo','deo',NULL,1,'demo'),('Product000000000000','Áo Sweatshirt Nam ICONDENIM Orgnls Painted','Style000000000000','PM000000000000','Brand000000000000','PC000000000000',NULL,1,'Chi tiết in dẻo kết hợp với in cao thành ngực trái thân trước, tạo nên vẻ đẹp cuốn hút, mà còn mang lại sự cá tính, hiện đại cho sản phẩm.'),('Product000000000001','Áo Thun Nam ICONDENIM ORGNLS Nexus','Style000000000000','PM000000000000','Brand000000000004','PC000000000000',NULL,1,'chi tiết in nổi hiệu ứng sỏi đá trên thân trước với dòng chữ \"ORGNLS\" được thiết kế cách điệu.'),('Product000000000002','Áo Thun Nam ICONDENIM TỰ HÀO VIỆT NAM','Style000000000000','PM000000000000','Brand000000000002','PC000000000000',NULL,1,'Dòng chữ \"Việt Nam\" được in xốp nổi bật như một dấu ấn kiêu hãnh trước ngực áo.'),('Product000000000003','Áo Thun Nam ICONDENIM Predator','Style000000000000','PM000000000002','Brand000000000001','PC000000000000',NULL,1,'Mặt trước in \"Predator\" cá tính, phối màu tương phản ở vai và hai bên thân áo, tạo hiệu ứng thị giác nổi bật.'),('Product000000000004','Combo 2 Áo Thun ICONDENIM EveryDay Fit','Style000000000000','PM000000000000','Brand000000000001','PC000000000000',NULL,1,'Gam màu tối giản, dễ dàng mix&match kết hợp cùng logo ICONDENIM in xốp nổi nhỏ đặt tinh tế bên ngực trái, vừa đủ tạo điểm nhấn mà vẫn giữ trọn tinh thần minimal.'),('Product000000000005','Áo Polo Nam ICONDENIM Horizontal Stripped','Style000000000000','PM000000000000','Brand000000000000','PC000000000005',NULL,1,'Thiết kế sọc ngang đơn giản nhưng cũng là thiết kế kinh điển qua nhiều thời kỳ, không hề bị lỗi thời hay \"out of style\". Các chi tiết bo cổ và bo tay được làm từ chun đan kết rất chặt chẽ, không bị nhão theo thời gian.'),('Product000000000006','Áo Polo Nam Yellowsoc Color Block Stripe','Style000000000000','PM000000000000','Brand000000000000','PC000000000000',NULL,1,NULL),('Product000000000007','Áo Polo Nam ICONDENIM Raglan Fusion Layers','Style000000000000','PM000000000000','Brand000000000000','PC000000000000',NULL,1,NULL),('Product000000000008','Áo Polo Nam ICONDENIM Contrasting Ribbed Details','Style000000000000','PM000000000000','Brand000000000000','PC000000000000',NULL,1,NULL),('Product000000000009','Áo Polo Nam ICONDENIM PanelPlay','Style000000000000','PM000000000000','Brand000000000000','PC000000000000',NULL,1,NULL),('Product000000000010','Áo Polo Nam ICONDENIM Mixed Fabric Tales','Style000000000000','PM000000000000','Brand000000000000','PC000000000000',NULL,1,NULL),('Product000000000011','Áo Sơ Mi Nam Tay Ngắn ICONDENIM Signature Form Slim','Style000000000000','PM000000000000','Brand000000000000','PC000000000000',NULL,1,NULL),('Product000000000012','Áo Sơmi Cuban Nam ICONDENIM Dệt Lưới Họa Tiết Sọc','Style000000000000','PM000000000000','Brand000000000000','PC000000000000',NULL,1,NULL),('Product000000000013','Áo Sơ Mi Nam ICONDENIM Orgnls Est19','Style000000000000','PM000000000000','Brand000000000000','PC000000000000',NULL,1,NULL),('Product000000000014','Áo Sơmi Cuban Nam ICONDENIM Natural Voyager','Style000000000000','PM000000000000','Brand000000000000','PC000000000000',NULL,1,NULL),('Product000000000015','Áo Sơ Mi Cuban Nam ICONDENIM Retro Style','Style000000000000','PM000000000000','Brand000000000000','PC000000000000',NULL,1,NULL),('Product000000000016','Áo Khoác Nam ICONDENIM Moss Black Wash','Style000000000000','PM000000000000','Brand000000000000','PC000000000000',NULL,1,NULL),('Product000000000017','Áo Khoác Nam Hoodie Zip ICONDENIM Orgnls Hand-Drawn','Style000000000000','PM000000000000','Brand000000000000','PC000000000000',NULL,1,NULL),('Product000000000018','vxcvxcvcvxcv','Style000000000002','PM000000000002','Brand000000000015','PC000000000002','Supplier000000000002',1,'fdsrfsdrfsdf');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productcategory`
--

DROP TABLE IF EXISTS `productcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productcategory` (
  `idCategory` varchar(45) NOT NULL,
  `nameCategory` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `idParentCategory` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idCategory`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productcategory`
--

LOCK TABLES `productcategory` WRITE;
/*!40000 ALTER TABLE `productcategory` DISABLE KEYS */;
INSERT INTO `productcategory` VALUES ('PC000000000000','Áo thun',NULL,NULL),('PC0000000000007','Váy ngắn',NULL,NULL),('PC000000000002','Áo sơ mi',NULL,NULL),('PC000000000003','Áo hoodie',NULL,NULL),('PC000000000004','Quần jeans',NULL,NULL),('PC000000000005','Quần short',NULL,NULL),('PC000000000006','Quần legging',NULL,NULL),('PC000000000008','Đầm công sở',NULL,NULL),('PC000000000009','Giày sneaker',NULL,NULL),('PC000000000010','Giày cao gót',NULL,NULL),('PC000000000011','demo',NULL,'PC000000000000');
/*!40000 ALTER TABLE `productcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productimage`
--

DROP TABLE IF EXISTS `productimage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productimage` (
  `idImage` varchar(45) NOT NULL,
  `idProduct` varchar(45) NOT NULL,
  `path` varchar(255) NOT NULL,
  `isMain` tinyint(1) NOT NULL,
  PRIMARY KEY (`idImage`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productimage`
--

LOCK TABLES `productimage` WRITE;
/*!40000 ALTER TABLE `productimage` DISABLE KEYS */;
INSERT INTO `productimage` VALUES ('PI000000000000','Product000000000000','Product000000000000_image1.jpg',1),('PI000000000001','Product000000000001','Product000000000000_image2.jpg',1),('PI000000000002','Product000000000002','Product000000000000_image3.webp',1),('PI000000000003','Product000000000003','Product000000000000_image4.webp',1),('PI000000000004','Product000000000004','Product000000000000_image5.webp',1),('PI000000000005','Product000000000005','Product000000000000_image6.webp',1),('PI000000000006','Product000000000006','Product000000000000_image7.jpg',1),('PI000000000007','Product000000000007','Product000000000000_image8.jpg',1),('PI000000000008','Product000000000008','Product000000000000_image9.webp',1),('PI000000000009','Product000000000009','Product000000000000_image10.webp',1),('PI000000000010','Product000000000010','Product000000000000_image11.webp',1),('PI000000000011','Product000000000011','Product000000000000_image12.jpg',1),('PI000000000012','Product000000000012','Product000000000000_image13.webp',1),('PI000000000013','Product000000000013','Product000000000000_image14.jpg',1),('PI000000000014','Product000000000014','Product000000000000_image15.jpg',1),('PI000000000015','Product000000000015','Product000000000000_image16.webp',1),('PI000000000016','Product000000000016','Product000000000000_image17.webp',1),('PI000000000017','Product000000000017','Product000000000000_image18.jpg',1),('PI000000000018','Product000000000018','upload/product/Product000000000018_160__o_thun_593-8_8fd9e64262e74692874a0b5ade754a93_1024x1024.webp',1),('PI000000000019','Product000000000018','upload/product/Product000000000018_160_ao_thun_593-2_2b15313c238743579ec9a3d0d04cc745_compact.webp',0),('PI000000000020','Product000000000018','upload/product/Product000000000018_160_ao_thun_593-12_2eac2567600645bfbd18353a4a3cd0db_compact.webp',0),('PI000000000021','Product000000000018','upload/product/Product000000000018_160_ao_thun_593-13_c846996cde504648b8016bdea9212f1d_compact.webp',0),('PI000000000022','Product000000000018','upload/product/Product000000000018_160_ao_thun_593-14_74b6890e479343cdb2c53376e70cc426_compact.webp',0);
/*!40000 ALTER TABLE `productimage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productmaterial`
--

DROP TABLE IF EXISTS `productmaterial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productmaterial` (
  `idMaterial` varchar(45) NOT NULL,
  `nameMaterial` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idMaterial`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productmaterial`
--

LOCK TABLES `productmaterial` WRITE;
/*!40000 ALTER TABLE `productmaterial` DISABLE KEYS */;
INSERT INTO `productmaterial` VALUES ('PM000000000000','Cotton','Mềm mại, thoáng mát, thấm hút tốt, dùng phổ biến cho áo thun'),('PM000000000001','Polyester','	Bền, chống nhăn, ít thấm nước, hay dùng trong đồ thể thao'),('PM000000000002','Len','Giữ ấm tốt, dùng trong áo khoác và sweater'),('PM000000000003','Denim','	Vải bò, bền chắc, thường dùng làm quần jeans'),('PM000000000004','Vải thun co giãn','Co giãn cao, kết hợp với các loại vải khác (cotton, polyester)'),('PM000000000005','Lụa','Mượt mà, bóng đẹp, cao cấp, thường dùng cho đồ sang trọng'),('PM000000000006','Vải lanh','Mát, nhẹ, phù hợp với mùa hè nhưng dễ nhăn'),('PM000000000007','Da','Cao cấp, dùng cho áo khoác, quần, váy, phụ kiện'),('PM000000000008','Vải nhung','	Mềm, dày, có độ bóng mịn, thường dùng cho thời trang mùa đông'),('PM000000000009','Vải nỉ','	Mềm, ấm, thường dùng cho áo hoodie hoặc áo khoác nỉ');
/*!40000 ALTER TABLE `productmaterial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `province`
--

DROP TABLE IF EXISTS `province`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `province` (
  `idProvince` varchar(45) NOT NULL,
  `nameProvince` varchar(45) NOT NULL,
  PRIMARY KEY (`idProvince`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `province`
--

LOCK TABLES `province` WRITE;
/*!40000 ALTER TABLE `province` DISABLE KEYS */;
INSERT INTO `province` VALUES ('Province0001','An Giang'),('Province0002','Bà Rịa - Vũng Tàu'),('Province0003','Bình Dương'),('Province0004','Bình Phước'),('Province0005','Bình Thuận'),('Province0006','Bình Định'),('Province0007','Bạc Liêu'),('Province0008','Bắc Giang'),('Province0009','Bắc Cạn'),('Province0010','Bắc Ninh'),('Province0011','Bến Tre'),('Province0012','Cao Bằng'),('Province0013','Cà Mau'),('Province0014','Cần Thơ'),('Province0015','Gia Lai'),('Province0016','Hòa Bình'),('Province0017','Hà Giang'),('Province0018','Hà Nam'),('Province0019','Hà Nội'),('Province0020','Hà Tĩnh'),('Province0021','Hưng Yên'),('Province0022','Hải Dương'),('Province0023','Hải Phòng'),('Province0024','Hậu Giang'),('Province0025','Hồ CHí Minh'),('Province0026','Khánh Hòa'),('Province0027','Kiên Giang'),('Province0028','Kon Tum'),('Province0029','Lai Châu'),('Province0030','Long An'),('Province0031','Lào Cai'),('Province0032','Lâm Đồng'),('Province0033','Lạng Sơn'),('Province0034','Nam Định'),('Province0035','Nghệ An'),('Province0036','Ninh Bình'),('Province0037','Ninh Thuận'),('Province0038','Phú Thọ'),('Province0039','Phú Yên'),('Province0040','Quảng Bình'),('Province0041','Quảng Nam'),('Province0042','Quảng Ngãi'),('Province0043','Quang Ninh'),('Province0044','Quảng Trị'),('Province0045','Sóc Trăng'),('Province0046','Sơn La'),('Province0047','Thanh Hóa'),('Province0048','Thái Bình'),('Province0049','Thái Nguyên'),('Province0050','Thừa Thiên Huế'),('Province0051','Tiền Giang'),('Province0052','Trà Vinh'),('Province0053','Tuyên Giang'),('Province0054','Tây Ninh'),('Province0055','Vĩnh Long'),('Province0056','Vĩnh Phúc'),('Province0057','Yên Bái'),('Province0058','Điện Biên'),('Province0059','Đà Nẵng'),('Province0060','Đắk Lắk'),('Province0061','Đắk Nông'),('Province0062','Đồng Nai'),('Province0063','Đồng Tháp');
/*!40000 ALTER TABLE `province` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchaseslip`
--

DROP TABLE IF EXISTS `purchaseslip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchaseslip` (
  `idPurchaseSlip` varchar(45) NOT NULL,
  `idCreater` varchar(45) NOT NULL,
  `idSupplier` varchar(45) NOT NULL,
  `dayCreate` datetime DEFAULT NULL,
  `totalBill` int unsigned DEFAULT NULL,
  `approveStatus` tinyint(1) NOT NULL,
  `statusUpdateDate` date DEFAULT NULL,
  `idStatusEditor` varchar(45) DEFAULT NULL,
  `statusReceive` tinyint(1) NOT NULL,
  PRIMARY KEY (`idPurchaseSlip`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchaseslip`
--

LOCK TABLES `purchaseslip` WRITE;
/*!40000 ALTER TABLE `purchaseslip` DISABLE KEYS */;
INSERT INTO `purchaseslip` VALUES ('PS000000000000','user004','Supplier000000000004','2025-05-15 00:00:00',2720000,1,NULL,NULL,0),('PS000000000001','user008','Supplier000000000000','2025-05-27 00:00:00',3015,1,NULL,NULL,0),('PS000000000002','user008','Supplier000000000000','2025-05-28 00:00:00',4080000,1,NULL,NULL,0);
/*!40000 ALTER TABLE `purchaseslip` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salesslip`
--

DROP TABLE IF EXISTS `salesslip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `salesslip` (
  `idSalesSlip` varchar(45) NOT NULL,
  `idCreater` varchar(45) NOT NULL,
  `idDeliverer` varchar(45) NOT NULL,
  `idClient` varchar(45) NOT NULL,
  `createDate` datetime DEFAULT NULL,
  `deliveryAddress` varchar(255) DEFAULT NULL,
  `totalBill` int unsigned DEFAULT NULL,
  `shippingFee` int unsigned DEFAULT NULL,
  `deliveryStatus` tinyint(1) NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  `evaluate` int unsigned DEFAULT NULL,
  `refundStatus` tinyint(1) DEFAULT NULL,
  `proof` varchar(255) DEFAULT NULL,
  `discountCode` varchar(45) NOT NULL,
  `deliveryDate` date DEFAULT NULL,
  PRIMARY KEY (`idSalesSlip`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salesslip`
--

LOCK TABLES `salesslip` WRITE;
/*!40000 ALTER TABLE `salesslip` DISABLE KEYS */;
/*!40000 ALTER TABLE `salesslip` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop`
--

DROP TABLE IF EXISTS `shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shop` (
  `idShop` varchar(45) NOT NULL,
  `nameShop` varchar(100) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `openingTime` time DEFAULT NULL,
  `closingTime` time DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`idShop`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop`
--

LOCK TABLES `shop` WRITE;
/*!40000 ALTER TABLE `shop` DISABLE KEYS */;
INSERT INTO `shop` VALUES ('Shop000000000001','Lạc Lối & Lấp Lánh 445','Số 56, Đường Trần Văn Dư, Phường 13, Quận Tân Bình, TP. Hồ Chí Minh','08:30:00','22:30:00',1),('Shop000000000002','Lạc Lối & Lấp Lánh','Số 80, Đường Nguyễn Văn Thoại, Phường Mỹ An, Quận Ngũ Hành Sơn, Đà Nẵng','08:30:00','22:30:00',1),('Shop000000000003','Lạc Lối & Lấp Lánh','Số 22, Ngõ 64, Phố Kim Giang, Phường Đại Kim, Quận Hoàng Mai, Hà Nội','08:30:00','22:30:00',1),('Shop000000000004','demo','demo','05:53:00','17:53:00',1);
/*!40000 ALTER TABLE `shop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shoppingcart`
--

DROP TABLE IF EXISTS `shoppingcart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shoppingcart` (
  `idShoppingCart` varchar(45) NOT NULL,
  `idUser` varchar(45) DEFAULT NULL,
  `idDetail` varchar(45) DEFAULT NULL,
  `quantity` int unsigned DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`idShoppingCart`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoppingcart`
--

LOCK TABLES `shoppingcart` WRITE;
/*!40000 ALTER TABLE `shoppingcart` DISABLE KEYS */;
INSERT INTO `shoppingcart` VALUES ('SC000000000000','user0001','DP000000000000',10,1),('SC000000000001','user004','DP000000000000',10,1),('SC000000000002','user004','DP000000000001',4,1);
/*!40000 ALTER TABLE `shoppingcart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `size`
--

DROP TABLE IF EXISTS `size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `size` (
  `idSize` varchar(45) NOT NULL,
  `nameSize` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idSize`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `size`
--

LOCK TABLES `size` WRITE;
/*!40000 ALTER TABLE `size` DISABLE KEYS */;
INSERT INTO `size` VALUES ('Size000000000000','XS','Extra Small (rất nhỏ )'),('Size000000000001','S','nhỏ'),('Size000000000002','M','trung bình'),('Size000000000003','L','lớn'),('Size000000000004','Xl','lớn'),('Size000000000005','XXL','rất rất lớn');
/*!40000 ALTER TABLE `size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `style`
--

DROP TABLE IF EXISTS `style`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `style` (
  `idStyle` varchar(45) NOT NULL,
  `nameStyle` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idStyle`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `style`
--

LOCK TABLES `style` WRITE;
/*!40000 ALTER TABLE `style` DISABLE KEYS */;
INSERT INTO `style` VALUES ('Style000000000000','Áo thun','Áo cổ tròn hoặc cổ tim, chất liệu cotton'),('Style000000000001','Áo sơ mi','Áo có cổ, thường dùng cho công sở hoặc trang trọng'),('Style000000000002','Áo polo','Áo thun có cổ, có cúc, phù hợp cả nam và nữ'),('Style000000000003','Áo khoác','Dùng mặc ngoài, có thể có khóa hoặc cúc'),('Style000000000004','Áo hoodie','Áo nỉ có mũ trùm đầu, thường dùng mùa lạnh'),('Style000000000005','Áo sweater','Áo len dài tay, giữ ấm'),('Style000000000006','Áo tank top','Áo ba lỗ, không tay, thường dùng mùa hè'),('Style000000000007','Áo crop top','Áo ngắn hở eo, phổ biến với nữ'),('Style000000000008','Áo blazer','Áo khoác nhẹ, thường mặc trong môi trường công sở'),('Style000000000009','Áo cardigan','Áo khoác len mỏng, có hàng cúc phía trước'),('Style000000000010','Áo nỉ','Áo dữ ấm , mỏng ');
/*!40000 ALTER TABLE `style` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `supplier`
--

DROP TABLE IF EXISTS `supplier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `supplier` (
  `idSupplier` varchar(45) NOT NULL,
  `nameSupplier` varchar(100) DEFAULT NULL,
  `contactName` varchar(100) DEFAULT NULL,
  `phoneNumber` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`idSupplier`),
  FULLTEXT KEY `idSupplier` (`idSupplier`,`nameSupplier`,`contactName`,`phoneNumber`,`email`,`address`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `supplier`
--

LOCK TABLES `supplier` WRITE;
/*!40000 ALTER TABLE `supplier` DISABLE KEYS */;
INSERT INTO `supplier` VALUES ('Supplier000000000000','Công ty TNHH May Mặc Việt Phát','Nguyễn Văn Thành','0988123456','vietphat@maymac.com','123 Lê Văn Việt, TP. Thủ Đức, TP.HCM',1),('Supplier000000000001','Công ty TNHH May Mặc Việt Phát','Nguyễn Thị Hoài Phương','0988123423','vietphat@maymac.com','143 Lê Văn Việt, TP. Thủ Đức, TP.HCM',1),('Supplier000000000002','Công ty TNHH Dệt Kim Ánh Dương','Phạm Thị Hoài','0978123456','anhduong@textile.com.vn','88 Nguyễn Văn Cừ, Quận Ninh Kiều, Cần Thơ',1),('Supplier000000000003','Nhà cung cấp Thời Trang Xanh','Trần Văn Chinh','0909090909','xanhfashion@green.vn','92 Hoàng Diệu, Quận Hải Châu, Đà Nẵng',1),('Supplier000000000004','Công ty Cổ phần Vải Sài Gòn','Lê Thị Huyền','0912345678','contact@vaisaigon.vn','45 Trần Hưng Đạo, Quận 1, TP.HCM',1),('Supplier000000000005','demo','demo','demo','demo','demo',1);
/*!40000 ALTER TABLE `supplier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userdiscountcode`
--

DROP TABLE IF EXISTS `userdiscountcode`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userdiscountcode` (
  `discountCode` varchar(45) NOT NULL,
  `idUser` varchar(45) DEFAULT NULL,
  `discountOrPrice` decimal(10,2) unsigned DEFAULT NULL,
  `minimumOrderValue` int unsigned DEFAULT NULL,
  `expiry` datetime DEFAULT NULL,
  PRIMARY KEY (`discountCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userdiscountcode`
--

LOCK TABLES `userdiscountcode` WRITE;
/*!40000 ALTER TABLE `userdiscountcode` DISABLE KEYS */;
INSERT INTO `userdiscountcode` VALUES ('UDC000000000000','User000000000000',0.30,0,'2025-05-05 15:30:00'),('UDC000000000001','User000000000000',30000.00,1000000,'2025-05-05 15:30:00');
/*!40000 ALTER TABLE `userdiscountcode` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idUser` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `role` varchar(45) NOT NULL,
  `fullName` varchar(100) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `birthDay` date DEFAULT NULL,
  `gender` tinyint(1) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phoneNumber` varchar(45) DEFAULT NULL,
  `pathAvatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('user0001','toanguyen','098869018',1,'admin',NULL,NULL,NULL,0,NULL,'0988691018',NULL),('user002','huy','123',1,'admin','huynguen','',NULL,1,NULL,'',NULL),('user003','huy1','123',1,'admin','huynguen','',NULL,1,'','',NULL),('user004','phinguyen','d194776b5913789c53ccb0fa6d211581',1,'admin','phinguyen','phinguyen',NULL,1,'daungocduy6@gmail.com','phinguyen','upload/user/user006_z6152949094569_1493f97c86279777f8fb2ec905ab695a.jpg'),('user005','daungocduy6@gmail.com','',1,'admin','demo','đà nẵng',NULL,1,NULL,'0775659486',NULL),('user006','nguyenvana','',1,'staff','toan nguyen','đà nẵng','2018-01-02',1,NULL,'0775659486','upload/user/user006_z6152949094569_1493f97c86279777f8fb2ec905ab695a.jpg'),('user007','demo2','d194776b5913789c53ccb0fa6d211581',1,'manager','huy nguyen','đà nẵng','2025-05-08',1,'tanthuyhoangmk2@gmail.com','0775659486','upload/user/user007_z6152949094569_1493f97c86279777f8fb2ec905ab695a.jpg'),('user008','admin2','d194776b5913789c53ccb0fa6d211581',1,'admin','huy nguyen','đà nẵng','2025-05-09',1,'tanthuyhoangmk1@gmail.com','0775659486',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-30  0:30:27
