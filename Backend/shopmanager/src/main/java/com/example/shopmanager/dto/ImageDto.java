package com.example.shopmanager.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ImageDto {
    private String idImage;
    private String idRefer;
    private String srcImage;
    private String typeImage;
    private String orderImage;
    private Boolean status;
}
