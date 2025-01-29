package com.example.fooddeliveryapp.controller;

import com.example.fooddeliveryapp.model.OrderItem;
import com.example.fooddeliveryapp.service.OrderItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orderitems")
public class OrderItemController {

    @Autowired
    private OrderItemService orderItemService;

    // Add an order item to an order
    @PostMapping("/{orderid}/{dishid}/{quantity}")
    public ResponseEntity<OrderItem> addOrderItem(
            @PathVariable int orderid,
            @PathVariable int dishid,
            @PathVariable int quantity) {
        return ResponseEntity.ok(orderItemService.addOrderItem(orderid, dishid, quantity));
    }

    // Get all items for an order
    @GetMapping("/{orderid}")
    public List<OrderItem> getOrderItemsByOrder(@PathVariable int orderid) {
        return orderItemService.getOrderItemsByOrderId(orderid);
    }

    // Delete an order item
    @DeleteMapping("/{itemid}")
    public ResponseEntity<Void> deleteOrderItem(@PathVariable int itemid) {
        orderItemService.deleteOrderItem(itemid);
        return ResponseEntity.noContent().build();
    }
}