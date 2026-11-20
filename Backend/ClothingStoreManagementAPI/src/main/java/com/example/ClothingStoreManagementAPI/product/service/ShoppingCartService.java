package com.example.ClothingStoreManagementAPI.product.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.ClothingStoreManagementAPI.product.repository.*;
import com.example.ClothingStoreManagementAPI.product.model.DTO.*;
import com.example.ClothingStoreManagementAPI.product.model.Entity.ShoppingCart;
import com.example.ClothingStoreManagementAPI.product.model.DataRequest.ShoppingCartIncreaseData;
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
	@Transactional(readOnly = true)
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
	@Transactional(readOnly = true)
	public List<ShoppingCartItemDTO> SellectShoppingCart(String idUser){
		try {
			return shoppingCartRepository.SelectShoppingCartByidUser(idUser,LocalDate.now());
		}
		catch(Exception e) {
			System.out.print("SellectShoppingCart, Error : " + e.getMessage());
			return null;
		}
	}
	
	@Transactional
	public Map<Boolean, String> AddToCart(ShoppingCartIncreaseData shoppingCartIncreaseData) {
		try {
			// 1. Lấy thông tin chi tiết sản phẩm
			String idColor = colorRepository.SelectIdColor(shoppingCartIncreaseData.getNameColor());
			String idSize = sizeRepository.SelectIdSize(shoppingCartIncreaseData.getNameSize());
			String idDetail = detailProductRepository.SelectIdDetailProduct(
					shoppingCartIncreaseData.getIdProduct(),
					idColor,
					idSize
			);
			if (idDetail == null) {
				return Map.of(false, "Product detail not found");
			}

			// 2. Kiểm tra tồn kho
			Long quantityInventory =
					inventoryShopReponsitory.SelectInventoryShop(idDetail);
			if (quantityInventory == null ||
					quantityInventory < shoppingCartIncreaseData.getQuantity()) {
				return Map.of(false, "Insufficient inventory");
			}

			// 3. Kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa
			ShoppingCartDTO cartDTO = GetShoppingCartDTO(
					shoppingCartIncreaseData.getIdUser(),
					idDetail
			);
			if (cartDTO != null) {
				int newQuantity;
				if (cartDTO.getStatus()) {
					// Giỏ hàng đang hoạt động: cộng thêm số lượng
					newQuantity = cartDTO.getQuantity()
							+ shoppingCartIncreaseData.getQuantity();
					if (newQuantity > quantityInventory) {
						return Map.of(false, "Insufficient inventory");
					}
					shoppingCartRepository.save(
						new ShoppingCart(
							cartDTO.getIdShoppingCart(),
							shoppingCartIncreaseData.getIdUser(),
							idDetail,
							newQuantity,
							true
						)
					);
				} else {
					// Giỏ hàng cũ không hoạt động: khôi phục số lượng
					newQuantity = shoppingCartIncreaseData.getQuantity();

					shoppingCartRepository.UpdateQuantity(
							newQuantity,
							cartDTO.getIdShoppingCart()
					);
				}
				shoppingCartRepository.flush();
				ShoppingCart cart = shoppingCartRepository
						.findById(cartDTO.getIdShoppingCart())
						.orElse(null);
				if (cart == null || cart.getQuantity() != newQuantity) {
					throw new RuntimeException("Update cart failure");
				}
				return Map.of(true, "Update to success");
			}

			// 4. Chưa có sản phẩm trong giỏ hàng: tạo mới
			String idCurrent = shoppingCartRepository.SelectMaxId();
			String idShoppingCartNext = idCurrent != null
					? common.FindNextId(idCurrent)
					: common.GetFirstId(ShoppingCart.class);
			shoppingCartRepository.save(
				new ShoppingCart(
					idShoppingCartNext,
					shoppingCartIncreaseData.getIdUser(),
					idDetail,
					shoppingCartIncreaseData.getQuantity(),
					true
				)
			);
			shoppingCartRepository.flush();
			if (!shoppingCartRepository.existsById(idShoppingCartNext)) {
				throw new RuntimeException("Add cart failure");
			}
			return Map.of(true, "Add to success");
		} catch (Exception e) {
			System.err.println("AddToCart Error: " + e.getMessage());
			TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
			return Map.of(false, "Add to cart failure");
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
	@Transactional(rollbackFor = Exception.class)
	public boolean updateStatusBuyNow(String idUser,String idProduct,String nameSize,String nameColor) {
		try {
			// Lấy danh sách sản phẩm trong giỏ hàng
			List<ShoppingCartItemDTO> shoppingCartItemDTOs =
					shoppingCartRepository.SelectShoppingCartByidUser(
							idUser, LocalDate.now()
					);

			// Chuyển trạng thái các sản phẩm cũ về false
			for (ShoppingCartItemDTO item : shoppingCartItemDTOs) {
				this.UpdateStatus(false, item.getIdShoppingCart());
			}

			// Tìm chi tiết sản phẩm
			String idDetail = detailProductRepository.SelectIdDetailProduct(
					idProduct,
					colorRepository.SelectIdColor(nameColor),
					sizeRepository.SelectIdSize(nameSize)
			);

			Long quantityInventory =
					inventoryShopReponsitory.SelectInventoryShop(idDetail);

			if (quantityInventory == null || quantityInventory < 1) {
				TransactionAspectSupport.currentTransactionStatus()
						.setRollbackOnly();
				return false;
			}

			// Kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa
			ShoppingCartDTO shoppingCartDTO =
					GetShoppingCartDTO(idUser, idDetail);

			if (shoppingCartDTO != null) {

				int newQuantity = shoppingCartDTO.getQuantity() + 1;

				if (newQuantity > quantityInventory) {
					TransactionAspectSupport.currentTransactionStatus()
							.setRollbackOnly();
					return false;
				}

				// Cập nhật số lượng sản phẩm
				shoppingCartRepository.save(
						new ShoppingCart(
								shoppingCartDTO.getIdShoppingCart(),
								idUser,
								idDetail,
								newQuantity,
								true
						)
				);

				shoppingCartRepository.flush();

				ShoppingCart shoppingCart = shoppingCartRepository
						.findById(shoppingCartDTO.getIdShoppingCart())
						.orElse(null);

				if (shoppingCart == null ||
						shoppingCart.getQuantity() != newQuantity) {

					TransactionAspectSupport.currentTransactionStatus()
							.setRollbackOnly();

					return false;
				}

				return true;

			} else {

				// Tạo ID giỏ hàng mới
				String idCurrent = shoppingCartRepository.SelectMaxId();

				String idShoppingCartNext = idCurrent != null
						? common.FindNextId(idCurrent)
						: common.GetFirstId(ShoppingCart.class);

				shoppingCartRepository.save(
						new ShoppingCart(
								idShoppingCartNext,
								idUser,
								idDetail,
								1,
								true
						)
				);

				shoppingCartRepository.flush();

				if (shoppingCartRepository.existsById(idShoppingCartNext)) {
					return true;
				}

				TransactionAspectSupport.currentTransactionStatus()
						.setRollbackOnly();

				return false;
			}

		} catch (Exception e) {

			System.err.println(
					"updateStatusBuyNow Error: " + e.getMessage()
			);

			TransactionAspectSupport.currentTransactionStatus()
					.setRollbackOnly();

			return false;
		}
	}
}
