package com.example.fooddeliveryapp.controller;

import com.example.fooddeliveryapp.model.Order;
import com.example.fooddeliveryapp.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/orders")
@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        return ResponseEntity.ok(orders);
    }

    // ✅ Fetch an order by ID
    @GetMapping("/{orderid}")
    public ResponseEntity<Order> getOrderById(@PathVariable int orderid) {
        Optional<Order> order = orderService.getOrderById(orderid);
        return order.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // ✅ Fetch all orders for a specific user
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Order>> getOrdersByUser(@PathVariable int userId) {
        List<Order> orders = orderService.getOrdersByUser(userId);
        return ResponseEntity.ok(orders);
    }
    
    @PostMapping
    public ResponseEntity<Order> placeOrder(@RequestBody Order order) {
        return ResponseEntity.ok(orderService.placeOrder(order));
    }

//    @GetMapping("/user/{userId}")
//    public ResponseEntity<List<Order>> getOrdersByUser(@PathVariable int userId) {
//        List<Order> orders = orderService.getOrdersByUser(userId);
//        return ResponseEntity.ok(orders);
//    }
//
//    @GetMapping("/{orderid}")
//    public ResponseEntity<Order> getOrderById(@PathVariable int orderid) {
//        Optional<Order> order = orderService.getOrderById(orderid);
//        return order.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
//    }

    @DeleteMapping("/{orderid}")
    public ResponseEntity<Void> deleteOrder(@PathVariable int orderid) {
        orderService.deleteOrder(orderid);
        return ResponseEntity.noContent().build();
    }
}