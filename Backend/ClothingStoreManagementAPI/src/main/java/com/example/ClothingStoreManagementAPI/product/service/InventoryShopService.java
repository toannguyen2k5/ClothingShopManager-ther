package com.example.ClothingStoreManagementAPI.product.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.ClothingStoreManagementAPI.product.model.DTO.InventoryDTO;
import com.example.ClothingStoreManagementAPI.product.model.Entity.InventoryShop;
import com.example.ClothingStoreManagementAPI.product.repository.InventoryShopReponsitory;
@Service
public class InventoryShopService {
	@Autowired
	private InventoryShopReponsitory inventoryShopReponsitory;
	@Autowired
	private Common common;
	public List<InventoryDTO> mapToInventoryDTO(List<Object[]> rows) {
	    List<InventoryDTO> result = new ArrayList<>();
	    for (Object[] row : rows) {
	        result.add(new InventoryDTO(
	            (String) row[0],                           // idShop
	            (String) row[1],                           // nameShop
	            ((Number) row[2]).intValue(),              // quantity
	            (String) row[3]                            // address
	        ));
	    }
	    return result;
	}
	// tìm kiếm tổng số lượng hàng tồn kho theo mã sản phẩm
	@Transactional(readOnly = true)
	public Long SelectQuantityInventory (String idDetail) {
		try {
			return inventoryShopReponsitory.SelectInventoryShop(idDetail);
		}
		catch(Exception e) {
			System.out.print("SelectQuantityInventory, Error : " + e.getMessage());
			return null;
		}
	}
	@Transactional
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
	@Transactional
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