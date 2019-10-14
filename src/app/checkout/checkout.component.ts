import { Component, OnInit } from '@angular/core';
import * as fromMainReducerState from '../state/main.selector';
import * as MainActions from '../state/main.action';
import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(
    private store: Store<any>,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      streetAddress: ['', Validators.required],
      email: ['', Validators.required],
      paymentMethod: ['']
    });
   }

  totalCart: number;
  cartList = [];
  checkoutForm: any;
  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.store.pipe(select(fromMainReducerState.getProduct)).subscribe(item => {
      this.cartList = Object.values(item);
      console.log('cartlistcheckout', this.cartList);
    });
    this.store.pipe(select(fromMainReducerState.getTotalCart)).subscribe(totalCart => {
      this.totalCart = totalCart;
      console.log('totalCart', totalCart);
    });

  }
  submitForm() {
    console.log('this.checkoutForm.value', this.checkoutForm.value);
    const form = {
      formValue: this.checkoutForm.value,
      item: this.cartList,
      totalCart: this.totalCart
    }
    console.log('form', form);
  }
  test($event) {
    console.log('$event', $event);
    alert('a');
  }

}
