package com.example.fooddeliveryapp.service;

import com.example.fooddeliveryapp.model.OrderItem;
import com.example.fooddeliveryapp.model.Order;
import com.example.fooddeliveryapp.model.Dish;
import com.example.fooddeliveryapp.repository.OrderItemRepository;
import com.example.fooddeliveryapp.repository.OrderRepository;
import com.example.fooddeliveryapp.repository.DishRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderItemService {

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private DishRepository dishRepository;

    
    public OrderItem addOrderItem(int orderid, int dishid, int quantity) {
        Optional<Order> orderOptional = orderRepository.findById(orderid);
        Optional<Dish> dishOptional = dishRepository.findById(dishid);

        if (orderOptional.isPresent() && dishOptional.isPresent()) {
            Order order = orderOptional.get();
            Dish dish = dishOptional.get();

            OrderItem orderItem = new OrderItem(order, dish, quantity, dish.getPrice());
            return orderItemRepository.save(orderItem);
        }
        throw new RuntimeException("Order or Dish not found");
    }

  
    public List<OrderItem> getOrderItemsByOrderId(int orderid) {
        return orderItemRepository.findAll();
    }

   
    public void deleteOrderItem(int itemid) {
        orderItemRepository.deleteById(itemid);
    }
}
