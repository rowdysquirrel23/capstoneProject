import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishListComponent } from './dishes/list/list.component';
import { RestaurantListComponent } from './restaurants/list/list.component';
import { RestaurantAddComponent } from './restaurants/add/add.component';
import { DishAddComponent } from './dishes/add/add.component';



const routes: Routes = [
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'restaurants/:id/dishes', component: DishListComponent },
  { path: 'restaurants/:id/add-dish', component: DishAddComponent },
  { path: 'add-restaurant', component: RestaurantAddComponent },
  { path: '**', redirectTo: 'restaurants' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
