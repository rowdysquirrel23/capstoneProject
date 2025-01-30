import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-place',
  standalone: false,
  
  templateUrl: './place.component.html',
  styleUrl: './place.component.css'
})
export class PlaceOrderComponent implements OnInit {
  dishes: any[] = [];  
  cartItems: any[] = [];
  totalPrice = 0.0;
  message = '';

  constructor(private dishService: DishService, private cartService: CartService) {}

  ngOnInit() {
    
    this.dishService.getAllDishes().subscribe(data => {
      this.dishes = data;
    });

    
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  addToCart(dish: any) {
    this.cartService.addToCart(dish, 1);
    this.message = `${dish.name} added to cart!`;

    // Update total price dynamically
    this.totalPrice = this.cartService.getTotalPrice();
  }
}
