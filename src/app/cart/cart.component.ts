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
  constructor(
    private store: Store<any>
    ) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.store.pipe(select(fromMainReducerState.getProduct)).subscribe(
      item => {
        this.cartList = Object.values(item);
        // console.log('cartList', this.cartList);
      }
    )
    // this.store.pipe(select(EventSelector.getEventInfo)).subscribe((eventInfo: EventInfo) => {
    // });
  }
  deleteProduct(id) {
    console.log('id', id);
    this.store.dispatch(new MainActions.MainActionDeleteProduct(id));
  }
  changeQuantity(item, event) {
    console.log('item', item);
    console.log('event', event.target.value);

    this.store.dispatch(new MainActions.MainActionUpdateProduct(item.id, {quantity: parseInt(event.target.value)}));

  }

}
