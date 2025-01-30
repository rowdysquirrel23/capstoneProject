import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-details',
  standalone: false,
  
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class OrderDetailsComponent implements OnInit {
  order: any;
  orderItems: any[] = [];
  orderId!: number;
  message = '';

  constructor(private orderService: OrderService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.orderId = Number(this.route.snapshot.paramMap.get('id'));

    // Fetch order details
    this.orderService.getOrderById(this.orderId).subscribe(orderData => {
      this.order = orderData;
    });

    // Fetch order items
    this.orderService.getOrderItems(this.orderId).subscribe(items => {
      this.orderItems = items;
    });
  }
}