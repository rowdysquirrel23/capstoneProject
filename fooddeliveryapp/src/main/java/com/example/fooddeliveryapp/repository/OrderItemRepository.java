package com.example.fooddeliveryapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.fooddeliveryapp.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Integer> {
}