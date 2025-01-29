package com.example.fooddeliveryapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.fooddeliveryapp.model.Order;

public interface OrderRepository extends JpaRepository<Order, Integer> {
	 List<Order> findByUser_Userid(int userId);
}