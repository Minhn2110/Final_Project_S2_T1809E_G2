import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

import * as $ from 'jquery';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit, AfterViewInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = ['assets/images/bg_1.png', 'assets/images/bg_2.png']

  newShoesArrivalImages = ['assets/images/product-1.png','assets/images/product-2.png','assets/images/product-3.png','assets/images/product-4.png','assets/images/product-5.png',
  'assets/images/product-6.png','assets/images/product-7.png','assets/images/product-8.png']
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
   }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}
