import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private apiUrl = 'http://localhost:8080/restaurants'; 

  constructor(private http: HttpClient) { }

  getAllRestaurants(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  addRestaurant(restaurant: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, restaurant);
  }
}
