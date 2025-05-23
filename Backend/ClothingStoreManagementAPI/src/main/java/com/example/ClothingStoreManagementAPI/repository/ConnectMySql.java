package com.example.ClothingStoreManagementAPI.repository;

import java.sql.*;
import java.lang.reflect.Field;
import java.util.*;

public class ConnectMySql<T> {
	private static String url = "jdbc:mysql://127.0.0.1:3306/shopmanagerdata";
	private static String user ="root";
	private static String pass = "123456";
	public List<T> SelectData(String sql ,Class<T> clazz) {
	    List<T> result = new ArrayList<>();
	    try (Connection mysql = DriverManager.getConnection(url, user, pass);
	        Statement statement = mysql.createStatement();
	        ResultSet resultset = statement.executeQuery(sql)) {
	        ResultSetMetaData metaData = resultset.getMetaData();
	        int columnCount = metaData.getColumnCount();
	        while (resultset.next()) {
	            try {
	                T element = clazz.getDeclaredConstructor().newInstance();
	                for (int i = 1; i <= columnCount; i++) {
	                    String columnName = metaData.getColumnName(i);
	                    Object value = resultset.getObject(columnName);
	                    try {
	                        Field field = clazz.getDeclaredField(columnName);
	                        field.setAccessible(true);
	                        if (field.getType() == boolean.class && value instanceof Integer) {
	                            field.set(element, ((Integer) value) != 0);
	                        } else {
	                            field.set(element, value);
	                        }
	                    } catch (NoSuchFieldException e) {
	                        System.out.println("Không tìm thấy thuộc tính: " + columnName);
	                    }
	                }
	                result.add(element);
	            } catch (Exception e) {
	                System.out.println("Không thể khởi tạo đối tượng: " + clazz.getSimpleName());
	                e.printStackTrace();
	            }
	        }
	    } catch (Exception e) {
	        System.out.println("Lỗi truy vấn dữ liệu: " + e.getMessage());
	    }
	    return result;
	}
	 // thêm,sửa,xóa dữ liệu
	 public boolean IUDData(List<T> ListData,String sql) {
		 Boolean result = true;
		 try {
			 Connection mysql = DriverManager.getConnection(url, user, pass);
			 PreparedStatement preparedStatement = mysql.prepareStatement(sql);
			 mysql.setAutoCommit(false);
			 for(T element : ListData) {
				 Field[] fields = element.getClass().getDeclaredFields();
				 int index = 1;
				 for(Field field : fields) {
					 field.setAccessible(true);
					 switch(((Object)field.get(element)).getClass().getSimpleName().toString()) {
						 case "Byte":{
							 preparedStatement.setByte(index++,Byte.parseByte(field.get(element).toString()));
							 break;
						 }
						 case "Integer":{
							 preparedStatement.setInt(index++,Integer.parseInt(field.get(element).toString()));
							 break;
						 }
						 case "Short" :{
							 preparedStatement.setShort(index++,Short.parseShort(field.get(element).toString()));
							 break;
						 }
						 case "Long":{
							 preparedStatement.setLong(index++, Long.parseLong(field.get(element).toString()));
							 break;
						 }
						 case "Float":{
							 preparedStatement.setFloat(index++, Float.parseFloat(field.get(element).toString()));
							 break;
						 }
						 case "Double":{
							 preparedStatement.setDouble(index++, Double.parseDouble(field.get(element).toString()));
							 break;
						 }
						 case "Character":{
							 preparedStatement.setString(index++, field.get(element).toString());
							 break;
						 }
						 case "Boolean":{
							 preparedStatement.setBoolean(index++,  Boolean.parseBoolean(field.get(element).toString()));
							 break;
						 }
						 default :{
							 if(field.get(element) instanceof String) preparedStatement.setString(index++, field.get(element).toString());
							 else if(field.get(element) instanceof java.sql.Date) preparedStatement.setDate(index++,java.sql.Date.valueOf(field.get(element).toString()));
							 else preparedStatement.setTime(index++,java.sql.Time.valueOf(field.get(element).toString()));
							 break;
						 }
					 }
				 }
				 preparedStatement.addBatch();
			 }
			 int[] ResultExcute = preparedStatement.executeBatch();
			 result = (ResultExcute.length == ListData.size())?true:false;
			 preparedStatement.close();
			 mysql.commit();
			 mysql.close();
		 }
		 catch(Exception e) {
			 System.out.println("Error to connect MySql : " + e.getMessage());
			 result = false;
		 }
		 return result;
	 }
}