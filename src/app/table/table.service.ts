import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  private addToCart = new Subject<any>();
  $addToCart = this.addToCart.asObservable();
  passCartItem(source: any) {
    this.addToCart.next(source);
  }


  
}