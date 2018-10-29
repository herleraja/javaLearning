package com.herle.hibernate;

import java.util.List;

import org.hibernate.Session;

import com.herle.hibernate.persistence.HibernateUtil;

/**
 * Class used to perform CRUD operation on database with Hibernate API's
 * 
 */
public class HibernateStandAloneDemo {

	@SuppressWarnings("unused")
	public static void main(String[] args) {

		HibernateStandAloneDemo application = new HibernateStandAloneDemo();

		/*
		 * Save few objects with hibernate
		 */
		int StockId1 = application.saveStock("111", "Stock11");
		int StockId2 = application.saveStock("211", "Stock211");
		int StockId3 = application.saveStock("311", "Stock311");
		int StockId4 = application.saveStock("411", "Stock411");

		/*
		 * Retrieve all saved objects
		 */
		List<Stock> Stocks = application.getAllStocks();
		System.out.println("List of all persisted Stocks >>>");
		for (Stock Stock : Stocks) {
			System.out.println("Persisted Stock :" + Stock);
		}

		/*
		 * Update an object
		 */
		application.updateStock(StockId4, "ARTS1");

		/*
		 * Deletes an object
		 */
		application.deleteStock(StockId2);

		/*
		 * Retrieve all saved objects
		 */
		List<Stock> remaingStocks = application.getAllStocks();
		System.out.println("List of all remained persisted Stocks >>>");
		for (Stock Stock : remaingStocks) {
			System.out.println("Persisted Stock :" + Stock);
		}

	}

	/**
	 * This method saves a Stock object in database
	 */
	public int saveStock(String stockCode, String stockName) {
		Stock Stock = new Stock();
		Stock.setStockCode(stockCode);
		Stock.setStockName(stockName);

		Session session = HibernateUtil.getSessionFactory().openSession();
		session.beginTransaction();

		int id = (Integer) session.save(Stock);
		session.getTransaction().commit();
		session.close();
		return id;
	}

	/**
	 * This method returns list of all persisted Stock objects/tuples from database
	 */
	public List<Stock> getAllStocks() {
		Session session = HibernateUtil.getSessionFactory().openSession();
		session.beginTransaction();

		List<Stock> employees = (List<Stock>) session.createQuery("FROM Stock s ORDER BY s.stockCode ASC").list();

		session.getTransaction().commit();
		session.close();
		return employees;
	}

	/**
	 * This method updates a specific Stock object
	 */
	public void updateStock(int id, String section) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		session.beginTransaction();

		Stock Stock = (Stock) session.get(Stock.class, id);
		Stock.setStockCode(section);
		// session.update(Stock);//No need to update manually as it will be updated
		// automatically on transaction close.
		session.getTransaction().commit();
		session.close();
	}

	/**
	 * This method deletes a specific Stock object
	 */
	public void deleteStock(int id) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		session.beginTransaction();

		Stock Stock = (Stock) session.get(Stock.class, id);
		session.delete(Stock);
		session.getTransaction().commit();
		session.close();
	}
}