package com.example.shopmanager.repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.persistence.criteria.*;
import jakarta.persistence.metamodel.SingularAttribute;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.annotation.PostConstruct;
import java.util.*;

/**
 * Component quản lý việc xây dựng truy vấn động sử dụng JPA Criteria API -
 * EntityManager được Spring tự động inject - Không cần truyền EntityManager mỗi
 * lần sử dụng
 * 
 * @param <T> kiểu Entity mà truy vấn hướng tới
 */
@Component
public class SqlRepositoryBuilder<T> {
	// EntityManager dùng để tạo EntityManagerFactory và khởi tạo CriteriaBuilder
	@Autowired
	private EntityManager em;
	private CriteriaBuilder cb;

	// Lưu trữ thông tin class entity, CriteriaQuery, Root để xây dựng query
	private Class<T> clazz;
	private CriteriaQuery<T> cq;
	private Root<T> root;

	// Cấu hình cho DISTINCT, GROUP BY, HAVING
	private boolean distinct;
	private List<Expression<?>> groupByExpressions;
	private Predicate havingClause;

	/**
	 * Constructor mặc định để Spring khởi tạo bean
	 */
	public SqlRepositoryBuilder() {
	}

	/**
	 * Khởi tạo CriteriaBuilder sau khi EntityManager đã được inject
	 */
	@PostConstruct
	private void init() {
		this.cb = em.getCriteriaBuilder();
	}

	/**
	 * Bắt đầu xây dựng truy vấn cho entity class cụ thể
	 * 
	 * @param clazz Class của Entity
	 * @return chính đối tượng builder để tiếp tục chaining
	 */
	public SqlRepositoryBuilder<T> from(Class<T> clazz) {
		this.clazz = clazz;
		// Tạo CriteriaQuery cho kiểu T
		this.cq = cb.createQuery(clazz);
		// Khởi tạo root của truy vấn
		this.root = cq.from(clazz);
		// Reset các thiết lập trước đó
		this.distinct = false;
		this.groupByExpressions = new ArrayList<>();
		this.havingClause = null;
		return this;
	}

	/**
	 * Đánh dấu truy vấn là DISTINCT (loại bỏ dòng trùng lặp)
	 */
	public SqlRepositoryBuilder<T> distinct() {
		this.distinct = true;
		return this;
	}

	/**
	 * Tạo inner join dựa trên tên thuộc tính (dùng String, không cần Metamodel)
	 *
	 * @param attrName tên thuộc tính quan hệ (tên field trong Entity)
	 * @return đối tượng Join để build tiếp ON, WHERE, …
	 */
	@SuppressWarnings("unchecked")
	public <J> Join<T, J> innerJoin(String attrName) {
	    // root.join(String) trả về Join<T, ?>, nhưng chúng ta ép kiểu về Join<T, J>
	    return (Join<T, J>) root.join(attrName, JoinType.INNER);
	}

	/**
	 * Chọn cột cần lấy (SELECT col1, col2,...) Nếu không gọi select(), mặc định sẽ
	 * lấy toàn bộ entity (SELECT root)
	 * 
	 * @param attrs danh sách thuộc tính cần select
	 */
	@SafeVarargs
	public final SqlRepositoryBuilder<T> select(SingularAttribute<? super T, ?>... attrs) {
		List<Selection<?>> selections = new ArrayList<>();
		for (SingularAttribute<? super T, ?> attr : attrs) {
			selections.add(root.get(attr));
		}
		cq.multiselect(selections);
		return this;
	}

	/**
	 * Thêm điều kiện WHERE
	 * 
	 * @param predicates mảng điều kiện
	 */
	public SqlRepositoryBuilder<T> where(Predicate... predicates) {
		cq.where(predicates);
		return this;
	}

	/**
	 * Sắp xếp tăng dần theo thuộc tính
	 */
	public SqlRepositoryBuilder<T> orderByAsc(SingularAttribute<? super T, ?> attr) {
		cq.orderBy(cb.asc(root.get(attr)));
		return this;
	}

	/**
	 * Sắp xếp giảm dần theo thuộc tính
	 */
	public SqlRepositoryBuilder<T> orderByDesc(SingularAttribute<? super T, ?> attr) {
		cq.orderBy(cb.desc(root.get(attr)));
		return this;
	}

	/**
	 * Nhóm theo thuộc tính (GROUP BY)
	 */
	public SqlRepositoryBuilder<T> groupBy(SingularAttribute<? super T, ?> attr) {
		groupByExpressions.add(root.get(attr));
		return this;
	}

	/**
	 * Thêm điều kiện HAVING sau khi GROUP BY
	 */
	public SqlRepositoryBuilder<T> having(Predicate predicate) {
		this.havingClause = predicate;
		return this;
	}

	/**
	 * Thực thi truy vấn với phân trang (LIMIT, OFFSET)
	 * 
	 * @param offset chỉ số bắt đầu
	 * @param limit  số dòng tối đa
	 */
	public List<T> getListResult(int offset, int limit) {
		applySettings();
		TypedQuery<T> q = em.createQuery(cq);
		q.setFirstResult(offset);
		q.setMaxResults(limit);
		return q.getResultList();
	}

	/**
	 * Thực thi truy vấn không phân trang
	 */
	public List<T> getListResult() {
		applySettings();
		return em.createQuery(cq).getResultList();
	}

	/**
	 * Lấy kết quả đơn (single result), nếu không có trả về Optional.empty()
	 */
	public Optional<T> getSingleResult() {
		applySettings();
		TypedQuery<T> q = em.createQuery(cq);
		q.setMaxResults(1);
		List<T> list = q.getResultList();
		return list.isEmpty() ? Optional.empty() : Optional.of(list.get(0));
	}

	/**
	 * Áp dụng các thiết lập DISTINCT, GROUP BY, HAVING trước khi execute
	 */
	private void applySettings() {
		if (distinct)
			cq.distinct(true);
		if (!groupByExpressions.isEmpty())
			cq.groupBy(groupByExpressions);
		if (havingClause != null)
			cq.having(havingClause);
	}

	// Lưu ý: có thể mở rộng các helper predicates/aggregate ở đây nếu cần
}

// Ví dụ sử dụng:
// @Autowired private SqlRepositoryBuilder<Product> builder;
// List<Product> result = builder.from(Product.class)
//     .where(builder.eq(Product_.status, true))
//     .orderByAsc(Product_.name)
//     .getListResult();
