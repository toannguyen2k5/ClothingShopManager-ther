
package com.example.ClothingStoreManagementAPI.ai.service.rag.indexing;

import java.util.LinkedHashSet;
import java.util.Set;
import java.util.StringJoiner;

import org.springframework.stereotype.Component;

import com.example.ClothingStoreManagementAPI.product.model.DTO.DetailProductDTO;
import com.example.ClothingStoreManagementAPI.product.model.DTO.ColorSizeDTO;

@Component
public class ProductDocumentBuilder {

    public String build(DetailProductDTO product) {

        if (product == null) {
            throw new IllegalArgumentException("Product cannot be null");
        }

        StringBuilder document = new StringBuilder();

        appendField(document, "Tên sản phẩm", product.getNameProduct());
        appendField(document, "Danh mục", product.getNameCategory());
        appendField(document, "Thương hiệu", product.getNameBrand());
        appendField(document, "Chất liệu", product.getNameMaterial());
        appendField(document, "Kiểu dáng", product.getNameStyle());
        appendField(document, "Mô tả", product.getDescription());

        // Lấy các màu sắc và kích thước có trong sản phẩm
        Set<String> colors = new LinkedHashSet<>();
        Set<String> sizes = new LinkedHashSet<>();

        if (product.getColorSize() != null) {
            for (ColorSizeDTO item : product.getColorSize()) {

                if (item == null) {
                    continue;
                }

                if (hasText(item.getNameColor())) {
                    colors.add(item.getNameColor().trim());
                }

                if (hasText(item.getNameSize())) {
                    sizes.add(item.getNameSize().trim());
                }
            }
        }

        appendField(
            document,
            "Màu sắc",
            String.join(", ", colors)
        );

        appendField(
            document,
            "Kích thước",
            String.join(", ", sizes)
        );

        return document.toString().trim();
    }

    private void appendField(
            StringBuilder builder,
            String label,
            String value) {

        if (hasText(value)) {
            builder.append(label)
                   .append(": ")
                   .append(value.trim())
                   .append(".\n");
        }
    }

    private boolean hasText(String value) {
        return value != null && !value.trim().isEmpty();
    }
}
