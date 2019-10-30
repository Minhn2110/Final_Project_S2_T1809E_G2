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
import { MainService } from '../service/main.service';

import { MESSAGE } from '../message';
import { ToastrService } from 'ngx-toastr';



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
  productList = [];

  constructor(config: NgbCarouselConfig, 
    private store: Store<any>,
    private mainService: MainService,
    private toastr: ToastrService) {
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
    this.getProduct();
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
    this.countdown('11/31/2019 03:14:07 AM');
  }

  addToCart(item) {
    if (this.cartList.length == 0) {
      this.store.dispatch(new MainActions.MainActionCreateProduct(item));
      this.store.dispatch(new MainActions.MainActionUpdateCartTotalFirst(item.id, {cartTotal: item.price}));
    }
    else {
      this.cartList.forEach(elm => {
        if (elm.id == item.id) {
          this.store.dispatch(new MainActions.MainActionUpdateProduct(item.id, {currentQuantity: elm.currentQuantity + 1, cartTotal: item.price * (1 + elm.currentQuantity)}));
        } else {
          this.store.dispatch(new MainActions.MainActionCreateProduct(item));
          this.store.dispatch(new MainActions.MainActionUpdateCartTotalFirst(item.id, {cartTotal: item.price}));
        }
    });
    }
    this.toastr.success('Add to cart success', 'Adidas');
  }
  getProduct() {
    this.mainService.getProduct().subscribe(product => {
      this.loader();
      this.productList = product.data.slice(Math.max(product.data.length - 8, 1));
      // this.middleProductList = JSON.parse(JSON.stringify(product.data));
      // console.log('productLista', this.productList.slice(Math.max(this.productList.length - 5, 1)));
    });
  }
  loader() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
  };
}
