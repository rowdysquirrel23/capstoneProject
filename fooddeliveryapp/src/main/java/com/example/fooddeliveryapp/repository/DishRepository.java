package com.example.fooddeliveryapp.repository;

import com.example.fooddeliveryapp.model.Dish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface DishRepository extends JpaRepository<Dish, Integer> {
    List<Dish> findByRestaurant_Resid(int resid);
}