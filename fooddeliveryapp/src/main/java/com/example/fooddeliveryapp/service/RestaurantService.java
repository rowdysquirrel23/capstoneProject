package com.example.fooddeliveryapp.service;

import com.example.fooddeliveryapp.model.Restaurant;
import com.example.fooddeliveryapp.repository.RestaurantRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestaurantService {
    
    @Autowired
    private RestaurantRepository restaurantRepository;

    public Restaurant addRestaurant(Restaurant restaurant) {
        return restaurantRepository.save(restaurant);
    }

    public List<Restaurant> getAllRestaurants() {
        return restaurantRepository.findAll();
    }

    public Optional<Restaurant> getRestaurantById(int resid) {
        return restaurantRepository.findById(resid);
    }

    public void deleteRestaurant(int resid) {
        restaurantRepository.deleteById(resid);
    }
}