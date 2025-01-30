import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = [];

  addToCart(dish: any, quantity: number) {
    const existingItem = this.cartItems.find(item => item.dish.dishid === dish.dishid);
    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.subtotal = existingItem.quantity * dish.price;
    } else {
      this.cartItems.push({ dish, quantity, subtotal: dish.price * quantity });
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }

  getTotalPrice() {
    return this.cartItems.reduce((sum, item) => sum + item.subtotal, 0);
  }
}
