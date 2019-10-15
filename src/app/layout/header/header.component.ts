import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Store, select } from '@ngrx/store';
import * as fromMainReducerState from '../../state/main.selector';
import * as MainActions from '../../state/main.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartList = [];
  cartQuantity: number;
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.pipe(select(fromMainReducerState.getProduct)).subscribe(item => {
      this.cartList = Object.values(item);
      this.cartQuantity = this.cartList.map(x => x.currentQuantity).reduce((x, y) => {
        return x + y;
      },0);
    });
    this.scrollWindow();
  }
  scrollWindow () {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
}
