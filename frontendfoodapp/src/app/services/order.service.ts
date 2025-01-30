import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:8080/orders';
  private orderItemUrl = 'http://localhost:8080/orderitems';

  constructor(private http: HttpClient) {}

  placeOrder(totalPrice: number): Observable<any> {
    const orderData = {
      user: { userid: 1 }, 
      totalPrice: totalPrice
    };
    return this.http.post(`${this.apiUrl}`, orderData);
  }
  
  getAllOrders(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  
  getOrdersForUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/1`);
  }


  getOrderById(orderId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${orderId}`);
  }


  getOrderItems(orderId: number): Observable<any> {
    return this.http.get(`${this.orderItemUrl}/${orderId}`);
  }
}
