package com.example.shopmanager.repository;

import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;

@Component
public class SqlBuilder<T> {
	private String sqlFilePath;
	private Class<T> resultClass; // Lưu class để truyền vào nativeQuery
	private Map<String, Object> namedParams = new HashMap<>();
	private Map<Integer, Object> positionalParams = new HashMap<>();
	private int offset;
	private int limit;
	public Query query;

	@Autowired
	private EntityManager em;

	@PostConstruct
	private void init() {
		// Reserved for future needs
	}

	public SqlBuilder<T> from(Class<T> resultClass) {
		this.resultClass = resultClass;
		return this;
	}

	public SqlBuilder<T> setSqlFile(String pathFileSql) {
		this.sqlFilePath = pathFileSql;
		String queryStr = "";
		if (sqlFilePath != null && fileExists(sqlFilePath)) {
			queryStr = readSqlFromFile(pathFileSql);
		}
		query = em.createNativeQuery(queryStr, resultClass);
		return this;
	}

	/**
	 * Set parameter theo tên (ví dụ :status)
	 */
	public SqlBuilder<T> setParam(String name, Object value) {
		namedParams.put(name, value);
		return this;
	}

	/**
	 * Set parameter theo vị trí (ví dụ ?1)
	 */
	public SqlBuilder<T> setParam(int position, Object value) {
		positionalParams.put(position, value);
		return this;
	}

	public SqlBuilder<T> setOffset(int offset) {
		this.offset = offset;
		return this;
	}

	public SqlBuilder<T> setLimit(int limit) {
		this.limit = limit;
		return this;
	}

	/**
	 * Gán parameters vào query
	 */
	private void bindParameters() {
		for (Map.Entry<String, Object> entry : namedParams.entrySet()) {
			query.setParameter(entry.getKey(), entry.getValue());
		}
		for (Map.Entry<Integer, Object> entry : positionalParams.entrySet()) {
			query.setParameter(entry.getKey(), entry.getValue());
		}
	}

	@SuppressWarnings("unchecked")
	public List<T> getListResult() {
		if (query == null || resultClass == null)
			throw new IllegalStateException("Bạn phải gọi from() > setSqlFile() trước khi getListResult()");
		bindParameters();
		if (this.offset > 0)
			query.setFirstResult(this.offset);
		if (this.limit > 0)
			query.setMaxResults(this.limit);
		return query.getResultList();
	}

	/**
	 * Lấy kết quả đơn lẻ
	 */
	@SuppressWarnings("unchecked")
	public Optional<T> getSingleResult() {
		if (query == null || resultClass == null)
			throw new IllegalStateException("Bạn phải gọi from() > setSqlFile() trước khi getSingleResult()");
		bindParameters();
		if (this.offset > 0)
			query.setFirstResult(this.offset);
		query.setMaxResults(1);
		List<T> list = query.getResultList();
		return list.isEmpty() ? Optional.empty() : Optional.of((T) list.get(0));
	}

	private boolean fileExists(String path) {
		return new java.io.File(path).exists();
	}

	private String readSqlFromFile(String path) {
		try (InputStream is = getClass().getClassLoader().getResourceAsStream(path)) {
			if (is == null)
				return "";
			return new String(is.readAllBytes(), StandardCharsets.UTF_8);
		} catch (Exception e) {
			return "";
		}
	}

}
