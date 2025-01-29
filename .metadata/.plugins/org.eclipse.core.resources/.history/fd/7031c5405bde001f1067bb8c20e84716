package com.example.fooddeliveryapp.controller;

import com.example.fooddeliveryapp.model.Dish;
import com.example.fooddeliveryapp.service.DishService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/dishes")
public class DishController {

    @Autowired
    private DishService dishService;

   
    @PostMapping("/restaurant/{resid}")
    public ResponseEntity<Dish> addDishToRestaurant(@PathVariable int resid, @RequestBody Dish dish) {
        return ResponseEntity.ok(dishService.addDishToRestaurant(resid, dish));
    }

   
    @GetMapping("/restaurant/{resid}")
    public ResponseEntity<List<Dish>> getDishesByRestaurant(@PathVariable int resid) {
        List<Dish> dishes = dishService.getDishesByRestaurant(resid);
        return ResponseEntity.ok(dishes);
    }

    
    @GetMapping
    public List<Dish> getAllDishes() {
        return dishService.getAllDishes();
    }

    
    @GetMapping("/{dishid}")
    public ResponseEntity<Dish> getDishById(@PathVariable int dishid) {
        Optional<Dish> dish = dishService.getDishById(dishid);
        return dish.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

 
    @DeleteMapping("/{dishid}")
    public ResponseEntity<Void> deleteDish(@PathVariable int dishid) {
        dishService.deleteDish(dishid);
        return ResponseEntity.noContent().build();
    }
}
