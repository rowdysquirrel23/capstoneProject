import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice = 0;
  message = '';

  constructor(private cartService: CartService, private orderService: OrderService, private router: Router) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  placeOrder() {
    this.orderService.placeOrder(this.totalPrice).subscribe(orderResponse => {
      this.message = 'Order placed successfully!';
      this.cartService.clearCart();
      setTimeout(() => this.router.navigate(['/orders']), 2000);
    }, error => {
      this.message = 'Error placing order!';
      console.error(error);
    });
  }
}
