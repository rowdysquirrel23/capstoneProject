import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class DishListComponent  {
  dishes: any[] = [];
  restaurantId!: number;

  constructor(private dishService: DishService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.restaurantId = Number(this.route.snapshot.paramMap.get('id'));
    this.dishService.getDishesByRestaurant(this.restaurantId).subscribe(data => {
      this.dishes = data;
    });
  }
}
