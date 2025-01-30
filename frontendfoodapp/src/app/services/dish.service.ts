import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  private apiUrl = 'http://localhost:8080/dishes';

  constructor(private http: HttpClient) { }

  
  getDishesByRestaurant(restaurantId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/restaurant/${restaurantId}`);
  }

  
  addDish(restaurantId: number, dishData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/restaurant/${restaurantId}`, dishData);
  }
  getAllDishes(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
