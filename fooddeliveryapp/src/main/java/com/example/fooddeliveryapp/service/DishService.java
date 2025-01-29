package com.example.fooddeliveryapp.service;

import com.example.fooddeliveryapp.model.Dish;
import com.example.fooddeliveryapp.model.Restaurant;
import com.example.fooddeliveryapp.repository.DishRepository;
import com.example.fooddeliveryapp.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DishService {

    @Autowired
    private DishRepository dishRepository;

    @Autowired
    private RestaurantRepository restaurantRepository;

    
    public Dish addDishToRestaurant(int resid, Dish dish) {
        Optional<Restaurant> restaurantOptional = restaurantRepository.findById(resid);
        if (restaurantOptional.isPresent()) {
            dish.setRestaurant(restaurantOptional.get());
            return dishRepository.save(dish);
        }
        throw new RuntimeException("Restaurant with ID " + resid + " not found");
    }

    
    public List<Dish> getDishesByRestaurant(int resid) {
        return dishRepository.findByRestaurant_Resid(resid); // Ensure repository method exists
    }

   
    public List<Dish> getAllDishes() {
        return dishRepository.findAll();
    }

  
    public Optional<Dish> getDishById(int dishid) {
        return dishRepository.findById(dishid);
    }

   
    public void deleteDish(int dishid) {
        dishRepository.deleteById(dishid);
    }
}
