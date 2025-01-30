import { Component } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-add',
  standalone: false,
  
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class RestaurantAddComponent {
  restaurant = { name: '', location: '', rating: 0 };
  message = '';

  constructor(private restaurantService: RestaurantService) {}

  addRestaurant() {
    if (!this.restaurant.name || !this.restaurant.location) {
      this.message = 'Please fill in all fields.';
      return;
    }

    this.restaurantService.addRestaurant(this.restaurant).subscribe(response => {
      this.message = 'Restaurant added successfully!';
      this.restaurant = { name: '', location: '', rating: 0 }; 
    }, error => {
      this.message = 'Error adding restaurant. Please try again.';
    });
  }
}