import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

import * as $ from 'jquery';
import { Store, select } from '@ngrx/store';
import * as MainActions from '../state/main.action';
import * as fromMainReducerState from '../state/main.selector';
import { takeWhile, delay, tap, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { element } from 'protractor';
import { Product } from '../model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit, AfterViewInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = ['assets/images/bg_1.png', 'assets/images/bg_2.png'];

  componentActive = true;

  subcribtion: Subscription;

  cartList = [];

  newShoesArrivalImages: Product[] = [{
    id: 1,
    name: 'NMD_R1 SHOES',
    type: 'LIFESTYLE',
    image:'assets/images/product-1.png',
    price: 120,
    quantity: 1
  },
  {
    id: 2,
    name: 'NMD_R2 SHOES',
    type: 'LIFESTYLE',
    image:'assets/images/product-2.png',
    price: 100,
    quantity: 1
  },
  {
    id: 3,
    name: 'NMD_R3 SHOES',
    type: 'LIFESTYLE',
    image:'assets/images/product-3.png',
    price: 90,
    quantity: 1
  },
  {
    id: 4,
    name: 'NMD_R4 SHOES',
    type: 'LIFESTYLE',
    image:'assets/images/product-4.png',
    price: 80,
    quantity: 1
  }
]
  constructor(config: NgbCarouselConfig, 
    private store: Store<any>) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
   }

  countdown(dateEnd) {
    var timer, days, hours, minutes, seconds;
    dateEnd = new Date(dateEnd);
    dateEnd = dateEnd.getTime();
  
    if ( isNaN(dateEnd) ) {
      return;
    }
  
    timer = setInterval(calculate, 1000);
  
    function calculate() {
      var dateStart = new Date();
      var dateStart = new Date(dateStart.getUTCFullYear(),
                               dateStart.getUTCMonth(),
                               dateStart.getUTCDate(),
                               dateStart.getUTCHours(),
                               dateStart.getUTCMinutes(),
                               dateStart.getUTCSeconds());
      var timeRemaining = parseInt(String((dateEnd - dateStart.getTime()) / 1000));
  
      if ( timeRemaining >= 0 ) {
        days    = parseInt(String(timeRemaining / 86400));
        console.log(days);
        timeRemaining   = (timeRemaining % 86400);
        hours   = parseInt(String(timeRemaining / 3600));
        timeRemaining   = (timeRemaining % 3600);
        minutes = parseInt(String(timeRemaining / 60));
        timeRemaining   = (timeRemaining % 60);
        seconds = parseInt(String(timeRemaining));
  
        document.getElementById("days").innerHTML    = `${String(parseInt(days, 10))} Days`;
        document.getElementById("hours").innerHTML   = `${("0" + hours).slice(-2)} hours`;
        document.getElementById("minutes").innerHTML = `${("0" + minutes).slice(-2)} minutes`;
        document.getElementById("seconds").innerHTML = `${("0" + seconds).slice(-2)} seconds`;
      } else {
        return;
      }
    }
  }
  
  
  ngOnInit() {
    this.store.pipe(select(fromMainReducerState.getProduct)).subscribe(product => {
      console.log('product', product);
      this.cartList = Object.values(product);
      console.log('peopleArray', this.cartList);
      // this.cartList = [];
      // this.cartList.push(product);
      // // this.cartList = product;
      // console.log('cart', this.cartList);
    })
  }

  ngAfterViewInit() {
    this.countdown('10/03/2019 03:14:07 AM');
  }

  addToCart(item) {
    if (this.cartList.length == 0) {
      console.log('case 1');
      this.store.dispatch(new MainActions.MainActionCreateProduct(item));
    }
    else {
      this.cartList.forEach(elm => {
        if (elm.id == item.id) {
          // item.quantity = elm.quantity + 1;
          console.log('item after 2', item);
          this.store.dispatch(new MainActions.MainActionUpdateProduct(item.id, {quantity: elm.quantity + 1}));
        } else {
          this.store.dispatch(new MainActions.MainActionCreateProduct(item));
        }
    });
    }
  }
}
