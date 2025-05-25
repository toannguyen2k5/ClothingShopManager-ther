package com.example.shopmanager.repository;

import jakarta.annotation.PostConstruct;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class JdbcManager {

	@PersistenceContext
	private EntityManager em;

	private static JdbcManager instance;

	private Class<?> entityClass;
	private final List<String> joins = new ArrayList<>();
	private final List<String> conditions = new ArrayList<>();
	private final Map<String, Object> parameters = new HashMap<>();
	private final List<String> selectedColumns = new ArrayList<>();

	private String orderByClause = "";
	private Integer limit = null;
	private Integer offset = null;
	private String groupByClause = "";
	private String havingClause = "";
	private boolean distinct = false;

	@PostConstruct
	private void init() {
		instance = this;
	}

	public static JdbcManager from(Class<?> clazz) {
		if (instance == null || instance.em == null) {
			throw new IllegalStateException("JdbcManager has not been properly initialized by Spring.");
		}
		JdbcManager mgr = new JdbcManager();
		mgr.entityClass = clazz;
		return mgr;
	}

	private JdbcManager() {
		// Private constructor to enforce static usage
	}

	public JdbcManager innerJoin(String relation) {
		joins.add("JOIN FETCH e." + relation);
		return this;
	}

	public JdbcManager leftJoin(String relation) {
		joins.add("LEFT JOIN FETCH e." + relation);
		return this;
	}

	public JdbcManager where(String condition, String paramName, Object value) {
		conditions.add(condition);
		parameters.put(paramName, value);
		return this;
	}

	public JdbcManager orWhere(String condition, String paramName, Object value) {
		if (conditions.isEmpty()) {
			conditions.add(condition);
		} else {
			String last = conditions.remove(conditions.size() - 1);
			conditions.add("(" + last + ") OR (" + condition + ")");
		}
		parameters.put(paramName, value);
		return this;
	}

	public JdbcManager andWhere(String condition, String paramName, Object value) {
		if (!conditions.isEmpty()) {
			String last = conditions.remove(conditions.size() - 1);
			conditions.add("(" + last + ") AND (" + condition + ")");
		} else {
			conditions.add(condition);
		}
		parameters.put(paramName, value);
		return this;
	}

	public JdbcManager whereGroup(String groupCondition, Map<String, Object> values) {
		conditions.add("(" + groupCondition + ")");
		parameters.putAll(values);
		return this;
	}

	public JdbcManager orWhereGroup(String groupCondition, Map<String, Object> values) {
		if (!conditions.isEmpty()) {
			String last = conditions.remove(conditions.size() - 1);
			conditions.add("(" + last + ") OR (" + groupCondition + ")");
		} else {
			conditions.add("(" + groupCondition + ")");
		}
		parameters.putAll(values);
		return this;
	}

	public JdbcManager andWhereGroup(String groupCondition, Map<String, Object> values) {
		if (!conditions.isEmpty()) {
			String last = conditions.remove(conditions.size() - 1);
			conditions.add("(" + last + ") AND (" + groupCondition + ")");
		} else {
			conditions.add("(" + groupCondition + ")");
		}
		parameters.putAll(values);
		return this;
	}

	public JdbcManager select(String... columns) {
		selectedColumns.addAll(Arrays.asList(columns));
		return this;
	}

	public JdbcManager orderBy(String clause) {
		this.orderByClause = clause;
		return this;
	}

	public JdbcManager limit(int limit) {
		this.limit = limit;
		return this;
	}

	public JdbcManager offset(int offset) {
		this.offset = offset;
		return this;
	}

	public JdbcManager groupBy(String clause) {
		this.groupByClause = clause;
		return this;
	}

	public JdbcManager having(String clause) {
		this.havingClause = clause;
		return this;
	}

	public JdbcManager distinct() {
		this.distinct = true;
		return this;
	}

	@SuppressWarnings("unchecked")
	public <T> List<T> getResultList() {
		StringBuilder jpql = new StringBuilder("SELECT ");
		if (distinct) {
			jpql.append("DISTINCT ");
		}
		if (selectedColumns.isEmpty()) {
			jpql.append("e");
		} else {
			jpql.append(String.join(", ", selectedColumns));
		}
		jpql.append(" FROM ").append(entityClass.getSimpleName()).append(" e ").append(String.join(" ", joins));

		if (!conditions.isEmpty()) {
			jpql.append(" WHERE ").append(String.join(" AND ", conditions));
		}

		if (!groupByClause.isEmpty()) {
			jpql.append(" GROUP BY ").append(groupByClause);
		}

		if (!havingClause.isEmpty()) {
			jpql.append(" HAVING ").append(havingClause);
		}

		if (!orderByClause.isEmpty()) {
			jpql.append(" ORDER BY ").append(orderByClause);
		}

		TypedQuery<T> query = (TypedQuery<T>) instance.em.createQuery(jpql.toString(), entityClass);
		for (Map.Entry<String, Object> entry : parameters.entrySet()) {
			query.setParameter(entry.getKey(), entry.getValue());
		}

		if (limit != null) {
			query.setMaxResults(limit);
		}
		if (offset != null) {
			query.setFirstResult(offset);
		}

		return query.getResultList();
	}

	@SuppressWarnings("unchecked")
	public <T> T getSingleResult() {
		StringBuilder jpql = new StringBuilder("SELECT ");
		if (distinct) {
			jpql.append("DISTINCT ");
		}
		if (selectedColumns.isEmpty()) {
			jpql.append("e");
		} else {
			jpql.append(String.join(", ", selectedColumns));
		}
		jpql.append(" FROM ").append(entityClass.getSimpleName()).append(" e ").append(String.join(" ", joins));

		if (!conditions.isEmpty()) {
			jpql.append(" WHERE ").append(String.join(" AND ", conditions));
		}

		if (!groupByClause.isEmpty()) {
			jpql.append(" GROUP BY ").append(groupByClause);
		}

		if (!havingClause.isEmpty()) {
			jpql.append(" HAVING ").append(havingClause);
		}

		if (!orderByClause.isEmpty()) {
			jpql.append(" ORDER BY ").append(orderByClause);
		}

		TypedQuery<T> query = (TypedQuery<T>) instance.em.createQuery(jpql.toString(), entityClass);
		for (Map.Entry<String, Object> entry : parameters.entrySet()) {
			query.setParameter(entry.getKey(), entry.getValue());
		}

		if (limit != null) {
			query.setMaxResults(limit);
		}
		if (offset != null) {
			query.setFirstResult(offset);
		}

		try {
			return query.getSingleResult();
		} catch (jakarta.persistence.NoResultException e) {
			return null; // Hoặc ném ra exception tuì theo nhu cầu
		}
	}
}
