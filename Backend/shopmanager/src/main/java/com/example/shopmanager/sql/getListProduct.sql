SELECT 
  p.id_product,
  p.name_product,
  p.description AS product_description,
  p.status AS product_status,
  b.id_brand,
  b.name AS brand_name,
  c.id_category,
  c.name AS category_name,
  m.id_material,
  m.name AS material_name,
  pv.id_variant,
  pv.size,
  pv.serial_Number,
  cl.id_color,
  cl.name_color,
  cl.hex_code,
  s.id_style,
  s.name_style,
  pr.id_price,
  pr.purchase_price,
  pr.sale_price,
  pr.updated_at,
  pr.status AS price_status
FROM products p
LEFT JOIN brands b ON p.id_brand = b.id_brand
LEFT JOIN categories c ON p.id_category = c.id_category
LEFT JOIN materials m ON p.id_material = m.id_material
LEFT JOIN product_variants pv ON p.id_product = pv.id_product
LEFT JOIN colors cl ON pv.id_color = cl.id_color
LEFT JOIN styles s ON pv.id_style = s.id_style
LEFT JOIN (
  SELECT DISTINCT ON (id_variant) *
  FROM prices
  ORDER BY id_variant, updated_at DESC
) pr ON pr.id_variant = pv.id_variant
ORDER BY p.name_product;