package com.example.ClothingStoreManagementAPI.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.ClothingStoreManagementAPI.repository.*;
import com.example.ClothingStoreManagementAPI.model.DTO.*;
import com.example.ClothingStoreManagementAPI.model.Entity.ShoppingCart;
import com.example.ClothingStoreManagementAPI.model.DataRequest.ShoppingCartIncreaseData;
import java.util.*;
import java.time.LocalDate;
@Service
public class ShoppingCartService {
	@Autowired
	private ShoppingCartRepository shoppingCartRepository;
	@Autowired
	private InventoryShopReponsitory inventoryShopReponsitory;
	@Autowired
	private ColorRepository colorRepository;
	@Autowired
	private SizeRepository sizeRepository;
	@Autowired
	private DetailProductRepository detailProductRepository;
	@Autowired
	private Common common;
	public ShoppingCartDTO GetShoppingCartDTO(String idUser , String idDetail) {
		try {
			ShoppingCart shoppingCart = shoppingCartRepository.SelectShoppingCart(idUser, idDetail);
			if(shoppingCart!= null) {
				shoppingCart.setStatus(inventoryShopReponsitory.SelectInventoryShop(idDetail) > shoppingCart.getQuantity());
				return new ShoppingCartDTO(shoppingCart.getIdShoppingCart(),shoppingCart.getQuantity(),shoppingCart.isStatus());
			}
			else return null;
		}
		catch(Exception e) {
			System.out.print("GetShoppingCartDTO, Error : " + e.getMessage());
			return null;
		}
	}
	public List<ShoppingCartItemDTO> SellectShoppingCart(String idUser){
		try {
			return shoppingCartRepository.SelectShoppingCartByidUser(idUser,LocalDate.now());
		}
		catch(Exception e) {
			System.out.print("SellectShoppingCart, Error : " + e.getMessage());
			return null;
		}
	}
	public Map<Boolean , String> AddToCart(ShoppingCartIncreaseData shoppingCartIncreaseData) {
		try {
			// kiểm tra xem có đủ hàng tồn kho không ?
			String idDetail = detailProductRepository.SelectIdDetailProduct(shoppingCartIncreaseData.getIdProduct(), colorRepository.SelectIdColor(shoppingCartIncreaseData.getNameColor()),sizeRepository.SelectIdSize(shoppingCartIncreaseData.getNameSize()));
			Long QuantityInventory = inventoryShopReponsitory.SelectInventoryShop(idDetail);
			if(QuantityInventory == null || QuantityInventory < shoppingCartIncreaseData.getQuantity()) return Map.of(false,"Insufficient inventory");
			else {
				// kiểm tra xem đúng loại hàng này đã được thêm vô giỏ hàng trước đó hay không
				ShoppingCartDTO shoppingCartDTO = GetShoppingCartDTO(shoppingCartIncreaseData.getIdUser(), idDetail);
				if(shoppingCartDTO !=null) {
					if(shoppingCartDTO.isStatus()) {
						if(shoppingCartDTO.getQuantity() + shoppingCartIncreaseData.getQuantity()<= QuantityInventory) {
							// cap nhat so luong
							shoppingCartRepository.save(new ShoppingCart(shoppingCartDTO.getIdShoppingCart(),shoppingCartIncreaseData.getIdUser(),idDetail,shoppingCartDTO.getQuantity() + shoppingCartIncreaseData.getQuantity(),true));
							shoppingCartRepository.flush();
							ShoppingCart ShoppingCart = shoppingCartRepository.findById(shoppingCartDTO.getIdShoppingCart()).orElse(null);
							if(ShoppingCart == null || ShoppingCart.getQuantity() == shoppingCartIncreaseData.getQuantity()) return Map.of(false,"update failure");
							else return Map.of(true,"update to success");
						}
						else return Map.of(false,"Insufficient inventory");
					}
					else {
						shoppingCartRepository.UpdateQuantity(shoppingCartIncreaseData.getQuantity(), shoppingCartDTO.getIdShoppingCart());
						shoppingCartRepository.flush();
						ShoppingCart ShoppingCart = shoppingCartRepository.findById(shoppingCartDTO.getIdShoppingCart()).orElse(null);
						if(ShoppingCart == null || ShoppingCart.getQuantity() == shoppingCartIncreaseData.getQuantity()) return Map.of(false,"update failure");
						else return Map.of(true,"update to success");
					}
				}
				else {
					String idcurrent = shoppingCartRepository.SelectMaxId();
					String idShoppingCartNext = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(ShoppingCart.class);
					shoppingCartRepository.save(new ShoppingCart(idShoppingCartNext,shoppingCartIncreaseData.getIdUser(),idDetail,shoppingCartIncreaseData.getQuantity(),true));
					shoppingCartRepository.flush();
					if(shoppingCartRepository.existsById(idShoppingCartNext)) return Map.of(true,"add to success");
					else return Map.of(false,"add failure");
				}
			}
		}
		catch(Exception e) {
			System.out.print("AddToCart, Error : " + e.getMessage());
			return null;
		}
	}
	@Transactional
	public boolean UpdateQuantity(int quantity ,String idShoppingCart) {
		try {
			return shoppingCartRepository.UpdateQuantity(quantity, idShoppingCart) > 0;
		}
		catch(Exception e) {
			System.out.print("InsertDetailProduct, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean UpdateStatus(boolean status ,String idShoppingCart) {
		try {
			return shoppingCartRepository.UpdateStatus(status, idShoppingCart) > 0;
		}
		catch(Exception e) {
			System.out.print("InsertDetailProduct, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean DeleteShoppingCart (String idShoppingCart) {
		try {
			shoppingCartRepository.deleteById(idShoppingCart);
			return !shoppingCartRepository.existsById(idShoppingCart);
		}
		catch(Exception e) {
			System.out.print("InsertDetailProduct, Error : " + e.getMessage());
			return false;
		}
	}
}
