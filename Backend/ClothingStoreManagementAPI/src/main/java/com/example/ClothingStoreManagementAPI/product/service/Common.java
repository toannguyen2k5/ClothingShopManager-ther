package com.example.ClothingStoreManagementAPI.product.service;
import java.util.*;
import java.util.regex.Pattern;
import java.util.regex.Matcher;
import com.example.ClothingStoreManagementAPI.product.model.Enum.PropertyOption;
import com.example.ClothingStoreManagementAPI.product.model.Entity.*;
import org.springframework.stereotype.Service;
@Service
public class Common {
	public String RemakeString(String strings) {
		var elements = strings.split("\\s+");
		Set<String> newString = new LinkedHashSet<>(Arrays.asList(elements));
		return String.join(" ", newString);
	}
	private boolean Check (String strings , String regex) {
		Pattern pattern  = Pattern.compile(regex);
		Matcher  matcher = pattern.matcher(strings);
		return matcher.find();
	}
	public boolean CheckProperty(String strings , PropertyOption option) {
		switch(option) {
			case username :{
				return Check(strings , "^[a-zA-Z](?!.*(__|\\.\\.))[a-zA-Z0-9_.]{2,19}$");
			}
			case numberPhone:{
				return Check(strings , "^\\d{10}$");
			}
			case fullname:{
				return Check(strings , "^[A-ZÀ-Ỹ][a-zà-ỹ]*(\\s[A-ZÀ-Ỹ][a-zà-ỹ]*)*$");
			}
			case password:{
				return Check(strings , "^\\(?=.*[a-zA-Z])(?=.*\\d)(?=.*[!@#$%^&*])[a-zA-Z0-9]{8,20}$");
			}
			case email:{
				return Check(strings , "^[a-zA-Z0-9][a-zA-Z0-9._-]*@[a-zA-Z]{2,}(\\\\.[a-zA-Z]{2,})*$");
			}
			default:{
				System.out.print("error option propperty");
				return false;
			}
		}
	}
	private String CheckId (String strings , String regex) {
		Pattern pattern  = Pattern.compile(regex);
		Matcher  matcher = pattern.matcher(strings);
		if(matcher.find()) {
			return matcher.group();
		}
		else throw new IllegalArgumentException("valid id");
	}
	public String FindNextId(String idObject) {
		String result = null;
		String regexName = "[a-zA-Z]+";
		String regexId = "\\d+\\b";
		try {
			if(idObject != null) {
				String name = CheckId(idObject,regexName);
				long id = Long.parseLong(CheckId(idObject,regexId))+1;
				if(idObject.length() - String.valueOf(id).length() - name.length()>=0) result = name +"0".repeat(idObject.length() - String.valueOf(id).length() - name.length()) + String.valueOf(id);
				else System.out.print("ran out of data");
			}
		}
		catch(Exception e) {
			System.out.print("error : " + e.getMessage());
		}
		return result;
	}
	public String GetFirstId (Class<?> clazz) {
		if(clazz.equals(Users.class)) {
			return "User000000000000";
		}
		else if (clazz.equals(Product.class)) {
			return "Product000000000000";
		}
		else if (clazz.equals(DetailProduct.class)) {
			return "DP000000000000";
		}
		else if (clazz.equals(Brand.class)) {
			return "Brand000000000000";
		}
		else if (clazz.equals(Color.class)) {
			return "Color000000000000";
		}
		else if (clazz.equals(DetailedRefundSlip.class)) {
			return "DRS000000000000";
		}
		else if (clazz.equals(DetailPurchaseSlip.class)) {
			return "DPS000000000000";
		}
		else if (clazz.equals(DetailSalesSlip.class)) {
			return "DSS000000000000";
		}
		else if (clazz.equals(InventoryShop.class)) {
			return "IS000000000000";
		}
		else if (clazz.equals(DiscountEvent.class)) {
			return "DE000000000000";
		}
		else if (clazz.equals(ListOfDeliveryStores.class)) {
			return "LODS000000000000";
		}
		else if (clazz.equals(ListOfReceivingStores.class)) {
			return "LORS000000000000";
		}
		else if (clazz.equals(ListWarehouseInCharge.class)) {
			return "LWIC000000000000";
		}
		else if (clazz.equals(Price.class)) {
			return "Price000000000000";
		}
		else if (clazz.equals(ProductCategory.class)) {
			return "PC000000000000";
		}
		else if (clazz.equals(ProductImage.class)) {
			return "PI000000000000";
		}
		else if (clazz.equals(ProductMaterial.class)) {
			return "PM000000000000";
		}
		else if (clazz.equals(PurchaseSlip.class)) {
			return "PS000000000000";
		}
		else if (clazz.equals(SalesSlip.class)) {
			return "SS000000000000";
		}
		else if (clazz.equals(Shop.class)) {
			return "Shop000000000000";
		}
		else if (clazz.equals(ShoppingCart.class)) {
			return "SC000000000000";
		}
		else if (clazz.equals(Style.class)) {
			return "Style000000000000";
		}
		else if (clazz.equals(Supplier.class)) {
			return "Supplier000000000000";
		}
		else if (clazz.equals(UserDiscountCode.class)) {
			return "UDC000000000000";
		}
		else return null;
	}
    public HashMap<String,Object> ReturnReponse(Object value, String action, String nameObject){
    	HashMap<String, Object> result = new HashMap<>();
        if (value == null) {
            result.put("status", "404");
            result.put("Messenger", action + " failed! " + nameObject);
        } else if (value instanceof Boolean) {
            if ((Boolean) value) {
                result.put("status", "200");
                result.put("Messenger", action + " " + nameObject + " successfully!");
            } else {
                result.put("status", "404");
                result.put("Messenger", action + " failed! " + nameObject);
            }
        } else {
            result.put("status", "200");
            result.put("data", value);
        }
        return result;
    }
}
