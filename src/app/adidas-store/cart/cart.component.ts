import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromMainReducerState from '../state/main.selector';
import * as MainActions from '../state/main.action';
import * as newAction from '../state/main.action';


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
      console.log('cảtItem', item);
        this.cartList = Object.values(item);
        this.cartTotal = this.cartList.map(x => x.cartTotal).reduce((x, y) => {
          return x + y;
        },0);
        this.store.dispatch(newAction.MainActionUpdateCartTotalFinal({payload: this.cartTotal}));
        console.log('total', this.cartTotal);
      }
    )
  }
  deleteProduct(id) {
    this.store.dispatch(newAction.MainActionDeleteProduct({id: id}));
  }
  changeQuantity(item, event) {
    this.store.dispatch(newAction.MainActionUpdateProduct({product: {id: item.id, changes: {currentQuantity: parseInt(event.target.value)}}}));
    this.store.dispatch(newAction.MainActionUpdateCartTotalFirst({ product: {id: item.id, changes: { cartTotal: item.price * parseInt(event.target.value)}}}));
  }
}
