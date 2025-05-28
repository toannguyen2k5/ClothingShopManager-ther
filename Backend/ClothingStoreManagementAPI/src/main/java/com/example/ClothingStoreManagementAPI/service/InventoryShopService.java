package com.example.ClothingStoreManagementAPI.service;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ClothingStoreManagementAPI.model.Entity.InventoryShop;
import com.example.ClothingStoreManagementAPI.repository.InventoryShopReponsitory;
@Service
public class InventoryShopService {
	@Autowired
	private InventoryShopReponsitory inventoryShopReponsitory;
	@Autowired
	private Common common;
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
	public boolean InsertInventory (InventoryShop InventoryShop) {
		try {
			String idcurrent = inventoryShopReponsitory.SelectMaxId();
			String newId = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(InventoryShop.class);
			InventoryShop.setIdList(newId);
			inventoryShopReponsitory.save(InventoryShop); // thêm brand vào csdl
			inventoryShopReponsitory.flush();
			return inventoryShopReponsitory.existsById(newId); // trạng thái tồn tại của object mới
		}
		catch(Exception e) {
			System.out.print("SelectQuantityInventory, Error : " + e.getMessage());
			return false;
		}
	}
	public Long UpdateInventory (long quantity , String idShop , String idDetail) {
		try {
			return inventoryShopReponsitory.UpdateInventoryShop(quantity, idShop, idDetail);
		}
		catch(Exception e) {
			System.out.print("SelectQuantityInventory, Error : " + e.getMessage());
			return null;
		}
	}
}