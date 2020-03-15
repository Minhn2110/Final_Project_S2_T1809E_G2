import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as newAction from '../state/main.action';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    constructor(
        private store: Store<any>,
        private toastr: ToastrService,

    ) { }

    addToCartService(item, cartList) {
        if (cartList.length == 0) {
            this.store.dispatch(newAction.MainActionCreateProduct({ product: item }));
            // this.store.dispatch(newMainAction.MainActionUpdateCartTotalFirst(item.id, {cartTotal: item.price}));
            this.store.dispatch(newAction.MainActionUpdateCartTotalFirst({ product: { id: item.id, changes: { cartTotal: item.price } } }));
        }
        else {
            cartList.forEach(elm => {
                if (elm.id == item.id) {
                    // this.store.dispatch(newAction.MainActionUpdateProduct(item.id, { currentQuantity: elm.currentQuantity + 1, cartTotal: item.price * (1 + elm.currentQuantity) }));
                    this.store.dispatch(newAction.MainActionUpdateProduct({product: {id: item.id, changes: {currentQuantity: elm.currentQuantity + 1, cartTotal: item.price * (1 + elm.currentQuantity)} }}))
                } else {
                    this.store.dispatch(newAction.MainActionCreateProduct({product: item}));
                    this.store.dispatch(newAction.MainActionUpdateCartTotalFirst({product: {id: item.id, changes: { cartTotal: item.price}}}));
                }
            });
        }
        this.toastr.success('Add to cart success', 'Adidas');
    }
}