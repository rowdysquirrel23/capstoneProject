import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DishListComponent } from './dishes/list/list.component';
import { RestaurantListComponent } from './restaurants/list/list.component';
import { RestaurantAddComponent } from './restaurants/add/add.component';
import { DishAddComponent } from './dishes/add/add.component';
import { OrderListComponent } from './orders/list/list.component';
import { OrderDetailsComponent } from './orders/details/details.component';
import { PlaceOrderComponent } from './orders/place/place.component';
import { CartComponent } from './orders/cart/cart.component';





@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    DishListComponent,
    RestaurantAddComponent,
    DishAddComponent,
    OrderListComponent,
    OrderDetailsComponent,
    PlaceOrderComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
