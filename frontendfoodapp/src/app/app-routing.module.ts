import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishListComponent } from './dishes/list/list.component';
import { RestaurantListComponent } from './restaurants/list/list.component';
import { RestaurantAddComponent } from './restaurants/add/add.component';
import { DishAddComponent } from './dishes/add/add.component';
import { OrderListComponent } from './orders/list/list.component';
import { OrderDetailsComponent } from './orders/details/details.component';
import { PlaceOrderComponent } from './orders/place/place.component';
import { CartComponent } from './orders/cart/cart.component';



const routes: Routes = [

  { path: '', redirectTo: 'restaurants', pathMatch: 'full' },
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'restaurants/:id/dishes', component: DishListComponent },
  { path: 'restaurants/:id/add-dish', component: DishAddComponent },
  { path: 'add-restaurant', component: RestaurantAddComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'orders/:id', component: OrderDetailsComponent },
  { path: 'place-order', component: PlaceOrderComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: 'restaurants' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
