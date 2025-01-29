import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-add',
  standalone: false,
  
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class DishAddComponent implements OnInit {
  restaurantId!: number;
  dish = { name: '', price: 0 };
  message = '';

  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.restaurantId = Number(this.route.snapshot.paramMap.get('id'));
  }

  addDish() {
    if (!this.dish.name || this.dish.price <= 0) {
      this.message = 'Please enter valid dish details.';
      return;
    }

    this.dishService.addDish(this.restaurantId, this.dish).subscribe(response => {
      this.message = 'Dish added successfully!';
      this.dish = { name: '', price: 0 }; 
    }, error => {
      this.message = 'Error adding dish. Please try again.';
    });
  }

  backToDishes() {
    this.router.navigate([`/restaurants/${this.restaurantId}/dishes`]);
  }
}