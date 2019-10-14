import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    return this.http.get<any>('https://lit-ravine-56602.herokuapp.com/api/product');
  }
  sendProduct(data): Observable<any> {
    return this.http.post<any>('https://lit-ravine-56602.herokuapp.com/api/product', data);
  }
}
