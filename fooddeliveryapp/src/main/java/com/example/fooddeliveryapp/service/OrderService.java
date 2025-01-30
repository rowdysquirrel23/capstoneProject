package com.example.fooddeliveryapp.service;

import com.example.fooddeliveryapp.model.Order;
import com.example.fooddeliveryapp.model.User;
import com.example.fooddeliveryapp.repository.OrderRepository;
import com.example.fooddeliveryapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    // ✅ Fetch an order by ID
    public Optional<Order> getOrderById(int orderid) {
        return orderRepository.findById(orderid);
    }

    // ✅ Fetch all orders for a specific user
    public List<Order> getOrdersByUser(int userId) {
        return orderRepository.findByUser_Userid(userId);
    }

    // ✅ Create an order
    public Order placeOrder(Order order) {
        return orderRepository.save(order);
    }

    // ✅ Delete an order
    public void deleteOrder(int orderid) {
        orderRepository.deleteById(orderid);
    }
 
//    public Order placeOrder(Order order) {
//        Optional<User> userOptional = userRepository.findById(order.getUser().getUserid());
//        if (userOptional.isPresent()) {
//            order.setUser(userOptional.get()); 
//            return orderRepository.save(order);
//        } else {
//            throw new RuntimeException("User with ID " + order.getUser().getUserid() + " not found.");
//        }
//    }
//
//    public List<Order> getOrdersByUser(int userId) {
//        return orderRepository.findByUser_Userid(userId);
//    }
//
//    public Optional<Order> getOrderById(int orderid) {
//        return orderRepository.findById(orderid);
//    }
//
//    public void deleteOrder(int orderid) {
//        orderRepository.deleteById(orderid);
//    }
}