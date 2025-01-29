package com.example.fooddeliveryapp.model;

import jakarta.persistence.*;

@Entity
@Table(name = "order_items")
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int itemid;

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    @ManyToOne
    @JoinColumn(name = "dish_id", nullable = false)
    private Dish dish;

    @Column(nullable = false)
    private int quantity;

    @Column(nullable = false)
    private double price; // Price per unit

    @Column(nullable = false)
    private double subtotal; // quantity * price

    public OrderItem() {
    }

    public OrderItem(Order order, Dish dish, int quantity, double price) {
        this.order = order;
        this.dish = dish;
        this.quantity = quantity;
        this.price = price;
        this.subtotal = calculateSubtotal();
    }

    private double calculateSubtotal() {
        return this.quantity * this.price;
    }

    public int getItemid() {
        return itemid;
    }

    public void setItemid(int itemid) {
        this.itemid = itemid;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Dish getDish() {
        return dish;
    }

    public void setDish(Dish dish) {
        this.dish = dish;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
        this.subtotal = calculateSubtotal(); // Recalculate subtotal
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
        this.subtotal = calculateSubtotal(); // Recalculate subtotal
    }

    public double getSubtotal() {
        return subtotal;
    }

    @Override
    public String toString() {
        return "OrderItem [itemid=" + itemid + ", order=" + order + ", dish=" + dish + ", quantity=" + quantity
                + ", price=" + price + ", subtotal=" + subtotal + "]";
    }
}