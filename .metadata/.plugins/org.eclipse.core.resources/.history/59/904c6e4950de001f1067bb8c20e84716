package com.example.fooddeliveryapp.controller;

import com.example.fooddeliveryapp.model.Restaurant;
import com.example.fooddeliveryapp.service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/restaurants")
public class RestaurantController {
    
    @Autowired
    private RestaurantService restaurantService;

    @PostMapping
    public ResponseEntity<Restaurant> addRestaurant(@RequestBody Restaurant restaurant) {
        return ResponseEntity.ok(restaurantService.addRestaurant(restaurant));
    }

    @GetMapping
    public List<Restaurant> getAllRestaurants() {
        return restaurantService.getAllRestaurants();
    }

    @GetMapping("/{resid}")
    public ResponseEntity<Restaurant> getRestaurantById(@PathVariable int resid) {
        Optional<Restaurant> restaurant = restaurantService.getRestaurantById(resid);
        return restaurant.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{resid}")
    public ResponseEntity<Void> deleteRestaurant(@PathVariable int resid) {
        restaurantService.deleteRestaurant(resid);
        return ResponseEntity.noContent().build();
    }
}