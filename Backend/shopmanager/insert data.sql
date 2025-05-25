-- ========================================
-- PHẦN 1: Thêm dữ liệu mẫu cho các bảng
-- ========================================

-- 1. Bảng `brands` (Thương hiệu)
INSERT INTO brands (id_brand, name, description) VALUES
('BR001', 'Áo Xinh',      'Thời trang nữ cao cấp'),
('BR002', 'Nam Phong',    'Thời trang nam lịch lãm'),
('BR003', 'Bé Yêu',       'Đồ trẻ em chất lượng'),
('BR004', 'Sporty Việt',  'Đồ thể thao năng động'),
('BR005', 'Luxury Girl',  'Phong cách sang trọng nữ'),
('BR006', 'Chất Nam',     'Đậm chất cá tính nam'),
('BR007', 'Mẹ & Bé',      'Thời trang mẹ và bé'),
('BR008', 'Everyday',     'Phù hợp mặc hàng ngày'),
('BR009', 'Công Sở Xinh','Đồ công sở hiện đại'),
('BR010', 'Đường Phố',   'Phong cách đường phố');

-- 2. Bảng `categories` (Danh mục)
INSERT INTO categories (id_category, name, description, parent_category) VALUES
('CA001', 'Áo',           'Các loại áo phong phú',          NULL),
('CA002', 'Quần',         'Các loại quần đa dạng',          NULL),
('CA003', 'Váy',          'Váy công sở, dạo phố',           NULL),
('CA004', 'Áo Sơ Mi',     'Áo sơ mi cho nam & nữ',          'CA001'),
('CA005', 'Áo Thun',      'Áo thun hàng ngày',              'CA001'),
('CA006', 'Quần Jean',    'Quần jean unisex',               'CA002'),
('CA007', 'Quần Tây',     'Quần tây công sở',               'CA002'),
('CA008', 'Váy Xòe',      'Váy xòe nữ tính',                'CA003'),
('CA009', 'Váy Body',     'Váy ôm body quyến rũ',           'CA003'),
('CA010', 'Đồ Thể Thao',  'Bộ đồ thể thao nam & nữ',        NULL);

-- 3. Bảng `colors` (Màu sắc)
INSERT INTO colors (id_color, name_color, hex_code) VALUES
('CO001', 'Đỏ',           '#FF0000'),
('CO002', 'Xanh Dương',   '#0000FF'),
('CO003', 'Xanh Lá',      '#00FF00'),
('CO004', 'Vàng',         '#FFFF00'),
('CO005', 'Tím',          '#800080'),
('CO006', 'Hồng',         '#FFC0CB'),
('CO007', 'Cam',          '#FFA500'),
('CO008', 'Trắng',        '#FFFFFF'),
('CO009', 'Đen',          '#000000'),
('CO010', 'Xám',          '#808080');

-- 4. Bảng `styles` (Phong cách)
INSERT INTO styles (id_style, name_style, description) VALUES
('ST001', 'Công Sở',   'Phong cách thanh lịch, chuyên nghiệp'),
('ST002', 'Thể Thao',  'Năng động, thoải mái khi vận động'),
('ST003', 'Dạo Phố',   'Thoải mái, trẻ trung cho đi chơi'),
('ST004', 'Tiệc Tùng', 'Quyến rũ, nổi bật trong bữa tiệc'),
('ST005', 'Đường Phố','Cá tính, phá cách, streetwear'),
('ST006', 'Vintage',   'Cổ điển, hoài niệm phong cách retro'),
('ST007', 'Trẻ Em',    'Dễ thương, an toàn cho bé'),
('ST008', 'Mẹ Bé',     'Kết hợp phong cách mẹ và bé'),
('ST009', 'Luxury',    'Sang trọng, đẳng cấp cao'),
('ST010', 'Học Sinh',  'Phù hợp lứa tuổi học đường');
-- 5. Bảng `products` (Sản phẩm)
INSERT INTO products (id_product, name_product, description, id_brand, id_category, status) VALUES
('PR001', 'Áo len nữ',          'Mô tả chi tiết cho Áo len nữ',          'BR007', 'CA001', TRUE),
('PR002', 'Quần jean nam',      'Mô tả chi tiết cho Quần jean nam',      'BR004', 'CA006', FALSE),
('PR003', 'Váy maxi',           'Mô tả chi tiết cho Váy maxi',           'BR002', 'CA003', TRUE),
('PR004', 'Áo khoác bomber',    'Mô tả chi tiết cho Áo khoác bomber',    'BR001', 'CA010', FALSE),
('PR005', 'Quần short',         'Mô tả chi tiết cho Quần short',         'BR010', 'CA002', TRUE),
('PR006', 'Đầm công sở',        'Mô tả chi tiết cho Đầm công sở',        'BR009', 'CA003', TRUE),
('PR007', 'Áo thun in hình',    'Mô tả chi tiết cho Áo thun in hình',    'BR008', 'CA005', FALSE),
('PR008', 'Quần âu nữ',         'Mô tả chi tiết cho Quần âu nữ',         'BR005', 'CA007', TRUE),
('PR009', 'Váy hai dây',        'Mô tả chi tiết cho Váy hai dây',        'BR003', 'CA008', TRUE),
('PR010', 'Áo hoodie',          'Mô tả chi tiết cho Áo hoodie',          'BR006', 'CA001', FALSE);

-- 6. Bảng `product_variants` (Biến thể sản phẩm)
INSERT INTO product_variants (id_variant, id_product, size, id_color, id_style, serial_number, purchase_price, sale_price) VALUES
('PV001', 'PR001', 'L',  'CO003', 'ST003', 'SN00001', 155000, 223500),
('PV002', 'PR001', 'M',  'CO009', 'ST002', 'SN00002', 369000, 510300),
('PV003', 'PR002', 'XL', 'CO005', 'ST001', 'SN00003', 408000, 540720),
('PV004', 'PR002', 'S',  'CO001', 'ST010', 'SN00004', 283000, 395120),
('PV005', 'PR003', 'M',  'CO006', 'ST005', 'SN00005', 418000, 627000),
('PV006', 'PR003', 'L',  'CO010', 'ST006', 'SN00006', 369000, 556500),
('PV007', 'PR004', 'XL', 'CO002', 'ST002', 'SN00007', 252000, 378000),
('PV008', 'PR004', 'M',  'CO007', 'ST004', 'SN00008', 212000, 318000),
('PV009', 'PR005', 'S',  'CO008', 'ST003', 'SN00009', 160000, 256000),
('PV010', 'PR005', 'L',  'CO004', 'ST004', 'SN00010', 263000, 394500),
('PV011', 'PR006', 'M',  'CO001', 'ST008', 'SN00011', 395000, 593000),
('PV012', 'PR006', 'XL', 'CO005', 'ST009', 'SN00012', 471000, 706500),
('PV013', 'PR007', 'S',  'CO002', 'ST006', 'SN00013', 132000, 198000),
('PV014', 'PR007', 'L',  'CO009', 'ST001', 'SN00014', 196000, 274400),
('PV015', 'PR008', 'M',  'CO003', 'ST010', 'SN00015', 337000, 487000),
('PV016', 'PR008', 'S',  'CO010', 'ST004', 'SN00016', 218000, 327000),
('PV017', 'PR009', 'L',  'CO006', 'ST002', 'SN00017', 289000, 433500),
('PV018', 'PR009', 'XL', 'CO007', 'ST008', 'SN00018', 291000, 436500),
('PV019', 'PR010', 'S',  'CO001', 'ST009', 'SN00019', 175000, 262500),
('PV020', 'PR010', 'M',  'CO007', 'ST010', 'SN00020', 233000, 349500);
-- 7. Bảng `suppliers` (Nhà cung cấp)
INSERT INTO suppliers (id_supplier, name_supplier, contact_name, phone_number, email, address, status) VALUES
('SU001','Công ty TNHH May Mặc Việt','Nguyễn Văn A','0901234567','vinaapparel@example.com','123 Đường Lê Lợi, Quận 1, TP.HCM', TRUE),
('SU002','Shop Thời Trang Minh Anh','Trần Thị B','0912345678','minhanh.fashion@example.com','45 Phố Huế, Hà Nội', TRUE),
('SU003','Xưởng Sản Xuất Quần Áo Hạ Long','Lê Văn C','0987654321','hltextile@example.com','10 Trần Phú, Hạ Long, Quảng Ninh', TRUE),
('SU004','Công ty CP Thời Trang Sài Gòn','Phạm Thị D','0909876543','saigon.style@example.com','200 Nguyễn Thị Minh Khai, Quận 3, TP.HCM', TRUE),
('SU005','Nhà Máy May Mặc Đông Á','Vũ Văn E','0934567890','donga.fabric@example.com','Số 5, KCN Biên Hòa, Đồng Nai', TRUE),
('SU006','Công ty Giày Dép Việt','Đặng Thị F','0976543210','vietnamfootwear@example.com','78 Đường Cách Mạng Tháng 8, Đà Nẵng', TRUE),
('SU007','Shop Phụ Kiện Thời Trang Hà Nội','Hoàng Văn G','0918765432','hn.accessories@example.com','12 Hàng Đào, Hoàn Kiếm, Hà Nội', TRUE),
('SU008','Xưởng Nón & Túi Xách','Trần Thị H','0943216789','fabrictop@example.com','36 Đường Phạm Văn Đồng, Hà Nội', TRUE),
('SU009','Công ty May Mặc Việt Nhật','Nguyễn Văn I','0907654321','vn-jp.cloth@example.com','89 Lý Thường Kiệt, Quận 10, TP.HCM', FALSE),
('SU010','Shop Thời Trang Bé Yêu','Lê Thị K','0923456789','beyeu.kids@example.com','50 Phố Huế, Hai Bà Trưng, Hà Nội', TRUE);

-- 8. Bảng `users` (Người dùng)
INSERT INTO users (id_user, username, password, status, role, full_name, address, birthday, gender, email, phone_number, path_avatar) VALUES
('US001','admin01','$2a$10$abcdefg',TRUE,'admin','Nguyễn Văn Hùng','123 Lê Lợi, Quận 1, TP.HCM','1985-03-21',TRUE,'hung.nv@example.com','0901122334','/avatars/us001.png'),
('US002','staff01','$2a$10$hijklmn',TRUE,'staff','Trần Thị Mai','45 Phố Huế, Hà Nội','1990-07-15',FALSE,'mai.tt@example.com','0912233445','/avatars/us002.png'),
('US003','manager01','$2a$10$opqrstu',TRUE,'manager','Lê Văn Tùng','78 Nguyễn Trãi, Thanh Xuân, Hà Nội','1982-11-02',TRUE,'tung.lv@example.com','0983344556','/avatars/us003.png'),
('US004','staff02','$2a$10$vwxyzab',TRUE,'staff','Phạm Thị Lan','200 Nguyễn Thị Minh Khai, Q3, TP.HCM','1995-05-30',FALSE,'lan.pt@example.com','0974455667','/avatars/us004.png'),
('US005','staff03','$2a$10$cdefghi',FALSE,'staff','Hoàng Văn Nam','36 Phạm Văn Đồng, Cầu Giấy, Hà Nội','1992-02-18',TRUE,'nam.hv@example.com','0965566778','/avatars/us005.png'),
('US006','admin02','$2a$10$jklmnop',TRUE,'admin','Đặng Thị Thu','10 Trần Phú, Hạ Long','1988-09-05',FALSE,'thu.dt@example.com','0956677889','/avatars/us006.png'),
('US007','staff04','$2a$10$qrstuvw',TRUE,'staff','Vũ Văn Dũng','89 Lý Thường Kiệt, Q10, TP.HCM','1993-12-12',TRUE,'dung.vv@example.com','0947788990','/avatars/us007.png'),
('US008','manager02','$2a$10$xyzabcd',TRUE,'manager','Nguyễn Thị Hạnh','12 Hàng Đào, Hoàn Kiếm, Hà Nội','1980-06-21',FALSE,'hanh.nt@example.com','0938899001','/avatars/us008.png'),
('US009','staff05','$2a$10$efghijk',TRUE,'staff','Lý Văn Phong','78 Cách Mạng Tháng 8, Đà Nẵng','1994-08-09',TRUE,'phong.lv@example.com','0929900112','/avatars/us009.png'),
('US010','staff06','$2a$10$lmnopqrst',TRUE,'staff','Trịnh Thị Ngọc','50 Phố Huế, Hà Nội','1991-10-28',FALSE,'ngoc.tt@example.com','0910011223','/avatars/us010.png');

-- 9. Bảng `shops` (Cửa hàng)
INSERT INTO shops (id_shop, name_shop, address, phone_number, email, status) VALUES
('SH001','Shop Áo Xinh','123 Lê Lợi, Quận 1, TP.HCM','0901234000','aoxinh.shop@example.com',TRUE),
('SH002','Shop Nam Phong','45 Phố Huế, Hà Nội','0912345000','namphong.shop@example.com',TRUE),
('SH003','Shop Bé Yêu','10 Trần Phú, Hạ Long','0987654000','beyeu.shop@example.com',TRUE),
('SH004','Sporty Việt','200 Nguyễn Thị Minh Khai, Q3, TP.HCM','0909876000','sportyviet.shop@example.com',TRUE),
('SH005','Luxury Girl','78 Nguyễn Trãi, Thanh Xuân, Hà Nội','0934567000','luxurygirl.shop@example.com',TRUE),
('SH006','Chất Nam','36 Phạm Văn Đồng, Cầu Giấy, Hà Nội','0976543000','chatnam.shop@example.com',FALSE),
('SH007','Mẹ & Bé Shop','89 Lý Thường Kiệt, Q10, TP.HCM','0943216000','mebe.shop@example.com',TRUE),
('SH008','Everyday Shop','12 Hàng Đào, Hoàn Kiếm, Hà Nội','0918765000','everyday.shop@example.com',TRUE),
('SH009','Công Sở Xinh','50 Phố Huế, Hai Bà Trưng, Hà Nội','0923456000','congso.shop@example.com',TRUE),
('SH010','Đường Phố Store','78 Cách Mạng Tháng 8, Đà Nẵng','0907653000','duongpho.store@example.com',TRUE);
-- 10. Bảng `shopping_cart` (Giỏ hàng)
INSERT INTO shopping_cart (id_cart, id_user, id_shop, id_variant, quantity, added_date) VALUES
('SC001','US007','SH002','PV005',3,'2025-04-20 14:32:10'),
('SC002','US002','SH004','PV012',1,'2025-05-02 09:15:45'),
('SC003','US010','SH001','PV001',2,'2025-04-28 18:05:22'),
('SC004','US005','SH007','PV018',5,'2025-04-10 11:22:33'),
('SC005','US001','SH010','PV003',1,'2025-05-01 08:50:00'),
('SC006','US003','SH006','PV014',4,'2025-04-15 16:40:57'),
('SC007','US008','SH009','PV009',2,'2025-04-25 13:05:12'),
('SC008','US006','SH003','PV020',1,'2025-04-30 10:10:10'),
('SC009','US009','SH005','PV007',3,'2025-05-05 19:45:30'),
('SC010','US004','SH008','PV016',2,'2025-04-18 12:00:00');

-- 11. Bảng `shop_inventory` (Tồn kho cửa hàng)
INSERT INTO shop_inventory (id_shop, id_variant, quantity) VALUES
('SH001','PV001',50),
('SH001','PV002',30),
('SH002','PV005',80),
('SH002','PV006',60),
('SH003','PV011',40),
('SH004','PV012',70),
('SH005','PV009',55),
('SH006','PV014',20),
('SH007','PV018',90),
('SH008','PV020',35);

-- 12. Bảng `promotions` (Khuyến mãi)
INSERT INTO promotions (id_promotion, id_shop, id_variant, discount_type, discount_value, start_date, end_date) VALUES
('PM001','SH001','PV001','percent',10.00,'2025-05-01','2025-05-15'),
('PM002','SH002',NULL,'fixed',20000.00,'2025-05-05','2025-05-20'),
('PM003','SH003','PV011','percent',15.00,'2025-04-20','2025-05-05'),
('PM004','SH004','PV012','fixed',30000.00,'2025-04-25','2025-05-10'),
('PM005','SH005',NULL,'percent',20.00,'2025-05-03','2025-05-18'),
('PM006','SH006','PV014','fixed',25000.00,'2025-04-28','2025-05-12'),
('PM007','SH007',NULL,'percent',5.00,'2025-05-07','2025-05-22'),
('PM008','SH008','PV020','percent',12.00,'2025-04-30','2025-05-14'),
('PM009','SH009',NULL,'fixed',15000.00,'2025-05-02','2025-05-17'),
('PM010','SH010','PV009','percent',8.00,'2025-04-22','2025-05-06');

-- 13. Bảng `purchase_slip` (Hóa đơn nhập)
INSERT INTO purchase_slip (id_purchase_slip, id_creater, id_supplier, day_create, total_bill, approve_status, status_receive, status_update_date, id_status_editor) VALUES
('PU001','US005','SU002','2025-04-15 10:00:00',1200000.00,TRUE,TRUE,'2025-04-17','US003'),
('PU002','US001','SU005','2025-05-01 14:30:00',800000.00,TRUE,FALSE,'2025-05-03','US006'),
('PU003','US008','SU001','2025-04-20 09:15:00',1500000.00,FALSE,FALSE,'2025-04-22','US008'),
('PU004','US004','SU004','2025-04-25 16:45:00',500000.00,TRUE,TRUE,'2025-04-27','US002'),
('PU005','US003','SU003','2025-05-05 11:20:00',950000.00,TRUE,TRUE,'2025-05-07','US005'),
('PU006','US009','SU006','2025-04-18 13:10:00',1100000.00,FALSE,FALSE,'2025-04-20','US009'),
('PU007','US002','SU007','2025-04-30 15:55:00',700000.00,TRUE,TRUE,'2025-05-02','US001'),
('PU008','US006','SU008','2025-04-22 08:05:00',1300000.00,TRUE,FALSE,'2025-04-24','US004'),
('PU009','US007','SU009','2025-05-03 17:30:00',600000.00,TRUE,TRUE,'2025-05-05','US010'),
('PU010','US010','SU010','2025-04-28 12:40:00',1050000.00,FALSE,FALSE,'2025-04-30','US007');

-- 14. Bảng `purchase_detail` (Chi tiết nhập)
INSERT INTO purchase_detail (id_purchase_detail, id_purchase, id_product, quantity, price) VALUES
('PD001','PU001','PR001',10,120000.00),
('PD002','PU001','PR002',5,100000.00),
('PD003','PU002','PR003',8,95000.00),
('PD004','PU002','PR004',4,90000.00),
('PD005','PU003','PR005',12,125000.00),
('PD006','PU003','PR006',6,110000.00),
('PD007','PU004','PR007',7,70000.00),
('PD008','PU004','PR008',3,80000.00),
('PD009','PU005','PR009',9,105000.00),
('PD010','PU005','PR010',2,95000.00);

-- 15. Bảng `sales_slip` (Hóa đơn bán)
INSERT INTO sales_slip (id_sales_slip, id_creater, id_deliverer, id_client, create_date, delivery_address, total_bill, shipping_fee, delivery_status, note, evaluate, refund_status, proof, discount_code, delivery_date) VALUES
('SL001','US004','US002','US009','2025-05-02 10:20:00','Giao đến Hà Nội',800000.00,20000.00,TRUE,'Nhanh gọn',5,FALSE,'proof001.jpg','DISC001','2025-05-05'),
('SL002','US002','US003','US001','2025-04-28 14:10:00','Giao đến TP.HCM',600000.00,15000.00,TRUE,'Đóng gói cẩn thận',4,FALSE,'proof002.jpg','DISC002','2025-05-01'),
('SL003','US005','US006','US008','2025-04-25 11:45:00','Giao đến Đà Nẵng',900000.00,25000.00,TRUE,'Lỗi nhỏ',3,TRUE,'proof003.jpg','DISC003','2025-04-28'),
('SL004','US001','US004','US007','2025-04-30 16:30:00','Giao đến Hà Nội',750000.00,18000.00,TRUE,'OK',5,FALSE,'proof004.jpg','DISC004','2025-05-03'),
('SL005','US003','US005','US010','2025-05-01 09:05:00','Giao đến TP.HCM',650000.00,12000.00,TRUE,'Giao nhanh',4,FALSE,'proof005.jpg','DISC005','2025-05-04'),
('SL006','US006','US007','US002','2025-04-20 13:55:00','Giao đến Đà Nẵng',820000.00,22000.00,TRUE,'Tốt',5,FALSE,'proof006.jpg','DISC006','2025-04-23'),
('SL007','US008','US009','US005','2025-04-22 18:15:00','Giao đến Hà Nội',710000.00,17000.00,TRUE,'Khá tốt',4,FALSE,'proof007.jpg','DISC007','2025-04-25'),
('SL008','US009','US010','US003','2025-04-18 12:00:00','Giao đến TP.HCM',630000.00,14000.00,TRUE,'Đóng gói đẹp',5,FALSE,'proof008.jpg','DISC008','2025-04-21'),
('SL009','US010','US001','US006','2025-04-26 15:40:00','Giao đến Đà Nẵng',880000.00,24000.00,TRUE,'Chu đáo',5,FALSE,'proof009.jpg','DISC009','2025-04-29'),
('SL010','US007','US008','US004','2025-04-24 10:10:00','Giao đến Hà Nội',790000.00,19000.00,TRUE,'Tốt',4,FALSE,'proof010.jpg','DISC010','2025-04-27');

-- 16. Bảng `sales_detail` (Chi tiết bán)
INSERT INTO sales_detail (id_sales_detail, id_sales_slip, id_product, quantity, price) VALUES
('SD001','SL001','PR001',2,100000.00),
('SD002','SL001','PR002',1,120000.00),
('SD003','SL002','PR003',3,90000.00),
('SD004','SL002','PR004',2,95000.00),
('SD005','SL003','PR005',1,125000.00),
('SD006','SL003','PR006',2,110000.00),
('SD007','SL004','PR007',3,70000.00),
('SD008','SL004','PR008',1,80000.00),
('SD009','SL005','PR009',2,105000.00),
('SD010','SL005','PR010',1,95000.00);

-- 17. Bảng `images` (Hình ảnh)
INSERT INTO images (id_image, id_refer, src_image, type_image, order_image, status) VALUES
('IM001','PR001','/images/pr001-1.jpg','product','1',TRUE),
('IM002','PR002','/images/pr002-1.jpg','product','1',TRUE),
('IM003','PU001','/images/pu001.jpg','purchase','1',TRUE),
('IM004','SL001','/images/sl001.jpg','sales','1',TRUE),
('IM005','SH001','/images/sh001.jpg','shop','1',TRUE),
('IM006','US001','/avatars/us001.jpg','user','1',TRUE),
('IM007','PR005','/images/pr005-1.jpg','product','1',TRUE),
('IM008','PU005','/images/pu005.jpg','purchase','1',TRUE),
('IM009','SL005','/images/sl005.jpg','sales','1',TRUE),
('IM010','SH005','/images/sh005.jpg','shop','1',TRUE);

