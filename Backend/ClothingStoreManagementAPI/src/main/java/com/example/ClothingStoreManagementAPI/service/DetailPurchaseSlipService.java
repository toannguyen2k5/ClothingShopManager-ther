package com.example.ClothingStoreManagementAPI.service;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.ClothingStoreManagementAPI.repository.DetailPurchaseSlipRepository;
import com.example.ClothingStoreManagementAPI.model.Entity.DetailPurchaseSlip;
import java.util.*;
@Service
public class DetailPurchaseSlipService {
	@Autowired
	private DetailPurchaseSlipRepository DetailPurchaseSlipRepository;
	@Autowired
	private Common common;
	@Transactional(readOnly = true)
	public String SelectMaxId() {
		try{
			return DetailPurchaseSlipRepository.SelectMaxId();
		}
		catch(Exception e) {
			System.out.print("SelectMaxId, Error : " + e.getMessage());
			return null;
		}
	}
	@Transactional(readOnly = true)
	public List<DetailPurchaseSlip> SellectDetailPurchaseSlip(String idList){
		return DetailPurchaseSlipRepository.SellectDetailPurchaseSlip(idList);
	}
	@Transactional
	public boolean InsertDetailPurchaseSlip(DetailPurchaseSlip DetailPurchaseSlip) {
		try{
			String idcurrent = DetailPurchaseSlipRepository.SelectMaxId();
			String newId = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(DetailPurchaseSlip.class);
			DetailPurchaseSlip.setIdDetail(newId);
			DetailPurchaseSlipRepository.save(DetailPurchaseSlip); // thêm brand vào csdl
			DetailPurchaseSlipRepository.flush();
			return DetailPurchaseSlipRepository.existsById(newId); // trạng thái tồn tại của object mới
		}
		catch(Exception e) {
			System.out.print("InsertDetailPurchaseSlip, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean UpdateDetailPurchaseSlip(DetailPurchaseSlip DetailPurchaseSlip) {
		try{
			return DetailPurchaseSlipRepository.UpdateDetailPurchaseSlip(DetailPurchaseSlip.getIdDetail(), DetailPurchaseSlip.getIdList(),
					DetailPurchaseSlip.getIdDetailProduct(), DetailPurchaseSlip.getQuantity(), DetailPurchaseSlip.getPrice()) >0;
		}
		catch(Exception e) {
			System.out.print("UpdateDetailSalesSlip, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean DeleteDetailPurchaseSlip(String idDetail) {
		try{
			DetailPurchaseSlipRepository.deleteById(idDetail);
			return !DetailPurchaseSlipRepository.existsById(idDetail);
		}
		catch(Exception e) {
			System.out.print("DeleteDetailSalesSlip, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean DeleteDetailSalesSlipByIdList(String idList) {
		try{
			return DetailPurchaseSlipRepository.DeleteDetailSalesSlipByIdList(idList) > 0;
		}
		catch(Exception e) {
			System.out.print("DeleteDetailSalesSlipByIdList, Error : " + e.getMessage());
			return false;
		}
	} 
}
