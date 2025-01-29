import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class RestaurantListComponent  {
  restaurants: any[] = [];

  constructor(private restaurantService: RestaurantService, private router: Router) {}

  ngOnInit() {
    this.restaurantService.getAllRestaurants().subscribe(data => {
      this.restaurants = data;
    });
  }

  viewDishes(restaurantId: number) {
    this.router.navigate(['/restaurants', restaurantId, 'dishes']);
  }
}
