package com.example.ClothingStoreManagementAPI.product.model.DTO;
import lombok.*;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ColorSizeDTO {
	private String nameColor;
	private String nameSize;
	private int quantity;
	
    public boolean compare(ColorSizeDTO other) {
        if (other == null) return false;
        return this.nameColor.equals(other.nameColor)
            && this.nameSize.equals(other.nameSize);
    }
}
