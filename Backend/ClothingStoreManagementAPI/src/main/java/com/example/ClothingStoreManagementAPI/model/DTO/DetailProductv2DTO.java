package com.example.ClothingStoreManagementAPI.model.DTO;

import java.time.LocalDate;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.AllArgsConstructor;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DetailProductv2DTO {
	private String idDetail;
	private String numberSeri;
	private String nameSize;
    private LocalDate dayImport;
    private Boolean status;
    private Boolean sellStatus;
    private String nameColor;
    private Long quantity;
}
