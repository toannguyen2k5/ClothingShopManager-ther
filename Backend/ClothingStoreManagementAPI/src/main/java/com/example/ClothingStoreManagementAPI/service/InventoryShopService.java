package com.example.ClothingStoreManagementAPI.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.ClothingStoreManagementAPI.repository.InventoryShopReponsitory;
@Service
public class InventoryShopService {
	@Autowired
	private InventoryShopReponsitory inventoryShopReponsitory;
	// tìm kiếm tổng số lượng hàng tồn kho theo mã sản phẩm
	public Long SelectQuantityInventory (String idDetail) {
		try {
			return inventoryShopReponsitory.SelectInventoryShop(idDetail);
		}
		catch(Exception e) {
			System.out.print("SelectQuantityInventory, Error : " + e.getMessage());
			return null;
		}
	}
}