package com.example.ClothingStoreManagementAPI.service;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.ClothingStoreManagementAPI.repository.DetailSalesSlipRepository;
import com.example.ClothingStoreManagementAPI.model.Entity.DetailSalesSlip;
import java.util.*;
@Service
public class DetailSalesSlipService {
	@Autowired
	private DetailSalesSlipRepository DetailSalesSlipRepository;
	@Autowired
	private Common common;
	@Transactional(readOnly = true)
	public String SelectMaxId() {
		try{
			return DetailSalesSlipRepository.SelectMaxId();
		}
		catch(Exception e) {
			System.out.print("SelectMaxId, Error : " + e.getMessage());
			return null;
		}
	}
	@Transactional(readOnly = true)
	public List<DetailSalesSlip> SellectDetailSalesSlip(String idList){
		try{
			return DetailSalesSlipRepository.SellectDetailSalesSlip(idList);
		}
		catch(Exception e) {
			System.out.print("SellectDetailSalesSlip, Error : " + e.getMessage());
			return null;
		}
	}
	@Transactional
	public boolean InsertDetailSalesSlip(DetailSalesSlip DetailSalesSlip) {
		try{
			String idcurrent = DetailSalesSlipRepository.SelectMaxId();
			String newId = idcurrent!=null ? common.FindNextId(idcurrent) : common.GetFirstId(DetailSalesSlip.class);
			DetailSalesSlip.setIdDetail(newId);
			DetailSalesSlipRepository.save(DetailSalesSlip); // thêm brand vào csdl
			DetailSalesSlipRepository.flush();
			return DetailSalesSlipRepository.existsById(newId); // trạng thái tồn tại của object mới
		}
		catch(Exception e) {
			System.out.print("InsertDetailSalesSlip, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean UpdateDetailSalesSlip(DetailSalesSlip DetailSalesSlip) {
		try{
			return DetailSalesSlipRepository.UpdateDetailSalesSlip(DetailSalesSlip.getIdDetail(), DetailSalesSlip.getIdList(), DetailSalesSlip.getIdDetailProduct(),
					DetailSalesSlip.getQuantity(), DetailSalesSlip.getPrice()) >0;
		}
		catch(Exception e) {
			System.out.print("UpdateDetailSalesSlip, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean DeleteDetailSalesSlip(String idDetail) {
		try{
			DetailSalesSlipRepository.deleteById(idDetail);
			return !DetailSalesSlipRepository.existsById(idDetail);
		}
		catch(Exception e) {
			System.out.print("DeleteDetailSalesSlip, Error : " + e.getMessage());
			return false;
		}
	}
	@Transactional
	public boolean DeleteDetailSalesSlipByIdList(String idList) {
		try{
			return DetailSalesSlipRepository.DeleteDetailSalesSlipByIdList(idList) > 0;
		}
		catch(Exception e) {
			System.out.print("DeleteDetailSalesSlipByIdList, Error : " + e.getMessage());
			return false;
		}
	} 
}
