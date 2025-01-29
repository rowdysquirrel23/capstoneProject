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





@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    DishListComponent,
    RestaurantAddComponent,
    DishAddComponent
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
