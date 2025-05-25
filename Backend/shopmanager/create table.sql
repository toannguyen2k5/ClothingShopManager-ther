

CREATE TABLE `brands` (
  `id_brand` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `name` TEXT COLLATE utf8mb3_unicode_ci NOT NULL,
  `description` TEXT COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_brand`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

CREATE TABLE `categories` (
  `id_category` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `name` TEXT COLLATE utf8mb3_unicode_ci NOT NULL,
  `description` TEXT COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `parent_category` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_category`),
  KEY `fk_category_parent` (`parent_category`),
  CONSTRAINT `fk_category_parent` FOREIGN KEY (`parent_category`) REFERENCES `categories` (`id_category`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

CREATE TABLE `colors` (
  `id_color` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `name_color` TEXT COLLATE utf8mb3_unicode_ci NOT NULL,
  `hex_code` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`id_color`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

CREATE TABLE `images` (
  `id_image` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `id_refer` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `src_image` varchar(1000) COLLATE utf8mb3_unicode_ci NOT NULL,
  `type_image` varchar(45) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `order_image` varchar(45) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_image`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

CREATE TABLE `materials` (
  `id_material` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `name` TEXT COLLATE utf8mb3_unicode_ci NOT NULL,
  `description` TEXT COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_material`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

CREATE TABLE `prices` (
  `id_price` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `purchase_price` decimal(38,2) NOT NULL,
  `sale_price` decimal(38,2) NOT NULL,
  `updated_at` datetime NOT NULL,
  `note` text COLLATE utf8mb3_unicode_ci,
  `updated_by` varchar(100) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `status` int DEFAULT NULL,
  `id_variant` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`id_price`),
  KEY `fk_price_variant` (`id_variant`),
  CONSTRAINT `fk_price_variant` FOREIGN KEY (`id_variant`) REFERENCES `product_variants` (`id_variant`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

CREATE TABLE `product_variants` (
  `id_variant` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `id_product` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `size` varchar(10) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `id_color` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `id_style` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `serial_Number` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_variant`),
  UNIQUE KEY `serial_Number` (`serial_Number`),
  KEY `fk_variant_product` (`id_product`),
  KEY `fk_variant_color` (`id_color`),
  KEY `fk_variant_style` (`id_style`),
  CONSTRAINT `fk_variant_color` FOREIGN KEY (`id_color`) REFERENCES `colors` (`id_color`),
  CONSTRAINT `fk_variant_product` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`),
  CONSTRAINT `fk_variant_style` FOREIGN KEY (`id_style`) REFERENCES `styles` (`id_style`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

CREATE TABLE `products` (
  `id_product` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `name_product` TEXT COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `description` TEXT COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `id_brand` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `id_category` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `id_material` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_product`),
  KEY `fk_product_brand` (`id_brand`),
  KEY `fk_product_category` (`id_category`),
  KEY `fk_product_material` (`id_material`),
  CONSTRAINT `fk_product_brand` FOREIGN KEY (`id_brand`) REFERENCES `brands` (`id_brand`),
  CONSTRAINT `fk_product_category` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id_category`),
  CONSTRAINT `fk_product_material` FOREIGN KEY (`id_material`) REFERENCES `materials` (`id_material`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

CREATE TABLE `promotions` (
  `id_promotion` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `id_shop` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `id_variant` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `discount_type` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `discount_value` decimal(38,2) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  PRIMARY KEY (`id_promotion`),
  KEY `fk_promotion_shop` (`id_shop`),
  KEY `fk_promotion_variant` (`id_variant`),
  CONSTRAINT `fk_promotion_shop` FOREIGN KEY (`id_shop`) REFERENCES `shops` (`id_shop`),
  CONSTRAINT `fk_promotion_variant` FOREIGN KEY (`id_variant`) REFERENCES `product_variants` (`id_variant`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

CREATE TABLE `purchase_detail` (
  `id_purchase_detail` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `id_purchase` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `id_product` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `quantity` int DEFAULT NULL,
  `price` decimal(38,2) DEFAULT NULL,
  PRIMARY KEY (`id_purchase_detail`),
  KEY `fk_purchase_detail_slip` (`id_purchase`),
  KEY `fk_purchase_detail_product` (`id_product`),
  CONSTRAINT `fk_purchase_detail_product` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`),
  CONSTRAINT `fk_purchase_detail_slip` FOREIGN KEY (`id_purchase`) REFERENCES `purchase_slip` (`id_purchase_slip`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

CREATE TABLE `purchase_slip` (
  `id_purchase_slip` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `id_creater` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `id_supplier` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `day_create` timestamp NULL DEFAULT NULL,
  `total_bill` decimal(38,2) DEFAULT NULL,
  `approve_status` tinyint(1) DEFAULT NULL,
  `status_receive` tinyint(1) DEFAULT NULL,
  `status_update_date` date DEFAULT NULL,
  `id_status_editor` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_purchase_slip`),
  KEY `fk_purchase_creator` (`id_creater`),
  KEY `fk_purchase_supplier` (`id_supplier`),
  KEY `fk_purchase_status_editor` (`id_status_editor`),
  CONSTRAINT `fk_purchase_creator` FOREIGN KEY (`id_creater`) REFERENCES `users` (`id_user`),
  CONSTRAINT `fk_purchase_status_editor` FOREIGN KEY (`id_status_editor`) REFERENCES `users` (`id_user`),
  CONSTRAINT `fk_purchase_supplier` FOREIGN KEY (`id_supplier`) REFERENCES `suppliers` (`id_supplier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

CREATE TABLE `sales_detail` (
  `id_sales_detail` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `id_sales_slip` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `id_product` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `quantity` int DEFAULT NULL,
  `price` decimal(38,2) DEFAULT NULL,
  PRIMARY KEY (`id_sales_detail`),
  KEY `fk_sales_detail_slip` (`id_sales_slip`),
  KEY `fk_sales_detail_product` (`id_product`),
  CONSTRAINT `fk_sales_detail_product` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`),
  CONSTRAINT `fk_sales_detail_slip` FOREIGN KEY (`id_sales_slip`) REFERENCES `sales_slip` (`id_sales_slip`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

CREATE TABLE `sales_slip` (
  `id_sales_slip` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `id_creater` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `id_deliverer` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `id_client` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `delivery_address` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `total_bill` decimal(38,2) DEFAULT NULL,
  `shipping_fee` decimal(38,2) DEFAULT NULL,
  `delivery_status` tinyint(1) DEFAULT NULL,
  `note` TEXT COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `evaluate` int DEFAULT NULL,
  `refund_status` tinyint(1) DEFAULT NULL,
  `proof` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `discount_code` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `delivery_date` date DEFAULT NULL,
  PRIMARY KEY (`id_sales_slip`),
  KEY `fk_sales_creator` (`id_creater`),
  KEY `fk_sales_deliverer` (`id_deliverer`),
  KEY `fk_sales_client` (`id_client`),
  CONSTRAINT `fk_sales_client` FOREIGN KEY (`id_client`) REFERENCES `users` (`id_user`),
  CONSTRAINT `fk_sales_creator` FOREIGN KEY (`id_creater`) REFERENCES `users` (`id_user`),
  CONSTRAINT `fk_sales_deliverer` FOREIGN KEY (`id_deliverer`) REFERENCES `users` (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

CREATE TABLE `shop_inventory` (
  `id_shop` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `id_variant` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`id_shop`,`id_variant`),
  KEY `fk_inventory_variant` (`id_variant`),
  CONSTRAINT `fk_inventory_shop` FOREIGN KEY (`id_shop`) REFERENCES `shops` (`id_shop`),
  CONSTRAINT `fk_inventory_variant` FOREIGN KEY (`id_variant`) REFERENCES `product_variants` (`id_variant`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

CREATE TABLE `shopping_cart` (
  `id_cart` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `id_user` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `id_shop` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `id_variant` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `quantity` int DEFAULT NULL,
  `added_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id_cart`),
  KEY `fk_cart_user` (`id_user`),
  KEY `fk_cart_shop` (`id_shop`),
  KEY `fk_cart_variant` (`id_variant`),
  CONSTRAINT `fk_cart_shop` FOREIGN KEY (`id_shop`) REFERENCES `shops` (`id_shop`),
  CONSTRAINT `fk_cart_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
  CONSTRAINT `fk_cart_variant` FOREIGN KEY (`id_variant`) REFERENCES `product_variants` (`id_variant`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

CREATE TABLE `shops` (
  `id_shop` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `name_shop` TEXT COLLATE utf8mb3_unicode_ci NOT NULL,
  `address` TEXT COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `phone_number` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_shop`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

CREATE TABLE `styles` (
  `id_style` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `name_style` TEXT COLLATE utf8mb3_unicode_ci NOT NULL,
  `description` TEXT COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_style`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

CREATE TABLE `suppliers` (
  `id_supplier` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `name_supplier` TEXT COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `contact_name` TEXT COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `phone_number` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `address` TEXT COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id_supplier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

CREATE TABLE `users` (
  `id_user` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `role` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `full_name` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `address` TEXT COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `gender` tinyint(1) DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `phone_number` varchar(255) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `path_avatar` TEXT COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
