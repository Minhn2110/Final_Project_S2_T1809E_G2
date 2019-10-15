import { Component, OnInit } from '@angular/core';
import * as fromMainReducerState from '../state/main.selector';
import * as MainActions from '../state/main.action';
import * as $ from 'jquery';

import { Store, select } from '@ngrx/store';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  name: string;
  phone: number;
  email:string;
  city:string;
  address:string;
  totalCart: number;
  monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
  dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  constructor(
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.getFormValue();
    this.getCurrentTime();
  }
  getFormValue() {
    this.store.pipe(select(fromMainReducerState.getFormValue)).subscribe(formValue => {
      if (formValue) {
        this.name = formValue.formValue.name;
        this.phone = formValue.formValue.phone;
        this.email = formValue.formValue.email;
        this.city = formValue.formValue.city;
        this.address = formValue.formValue.streetAddress;
        this.totalCart = formValue.totalCart;
      }
    });
  }

  getCurrentTime() {
    const newDate = new Date();
    newDate.setDate(newDate.getDate());
    $('#Date').html(this.dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + this.monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
  }
}
