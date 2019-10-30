import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromMainReducerState from '../state/main.selector';
import * as MainActions from '../state/main.action';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartList = [];
  cartTotal: number;
  subTotal = [];
  constructor(
    private store: Store<any>
    ) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.store.pipe(select(fromMainReducerState.getProduct)).subscribe(item => {
        this.cartList = Object.values(item);
        this.cartTotal = this.cartList.map(x => x.cartTotal).reduce((x, y) => {
          return x + y;
        },0);
        this.store.dispatch(new MainActions.MainActionUpdateCartTotalFinal(this.cartTotal));
        console.log('total', this.cartTotal);
      }
    )
  }
  deleteProduct(id) {
    console.log('id', id);
    this.store.dispatch(new MainActions.MainActionDeleteProduct(id));
  }
  changeQuantity(item, event) {
    console.log('item', item);
    console.log('event', event.target.value);
    this.store.dispatch(new MainActions.MainActionUpdateProduct(item.id, {currentQuantity: parseInt(event.target.value)}));
    this.store.dispatch(new MainActions.MainActionUpdateCartTotalFirst(item.id, {cartTotal: item.price * parseInt(event.target.value)}));
  }
}
