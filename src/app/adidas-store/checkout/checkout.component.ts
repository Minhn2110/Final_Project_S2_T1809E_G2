import { Component, OnInit } from "@angular/core";
import * as fromMainReducerState from "../state/main.selector";
import { Store, select } from "@ngrx/store";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MainService } from "../adidas-service/main.service";
import { RouterModule, Router } from "@angular/router";
import * as newAction from '../state/main.action';

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"]
})
export class CheckoutComponent implements OnInit {
  totalCart: number;
  cartList = [];
  checkoutForm: any;
  submitted = false;

  constructor(
    private store: Store<any>,
    private formBuilder: FormBuilder,
    private mainService: MainService,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
      city: [""],
      streetAddress: ["", Validators.required],
      email: ["", Validators.required],
      paymentMethod: [""]
    });
  }

  get f() {
    return this.checkoutForm.controls;
  }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.store.pipe(select(fromMainReducerState.getProduct)).subscribe(item => {
      this.cartList = Object.values(item);
      console.log("cartlistcheckout", this.cartList);
    });
    this.store.pipe(select(fromMainReducerState.getTotalCart)).subscribe(totalCart => {
        this.totalCart = totalCart;
      });
  }
  submitForm() {
    this.submitted = true;
    if (this.checkoutForm.invalid) {
      return;
    } else {
      const form = {
        formValue: this.checkoutForm.value,
        item: this.cartList,
        totalCart: this.totalCart
      };
      this.store.dispatch(newAction.MainActionFormValue({payload: form}));
      this.router.navigate(["/invoice"]);
      this.mainService.sendProduct(form).subscribe(res => {
        if (res) {
        }
      });
    }
  }
  test($event) {
    console.log("$event", $event);
    alert("a");
  }
}
