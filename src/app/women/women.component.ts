import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import * as $ from 'jquery';
import * as MainActions from '../state/main.action';
import * as fromMainReducerState from '../state/main.selector';
import { Store, select } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.scss']
})
export class WomenComponent implements OnInit {

  config: any;
  collection = { count: 60, data: [] };
  searchText: any;
  productList = [];
  rangeValues: number[] = [0, 300];
  middleProductList = [];
  cartList = [];
  constructor(
    private mainService: MainService,
    private store: Store<any>,
    private toastr: ToastrService
  ) {
        this.config = {
          itemsPerPage: 9,
          currentPage: 1,
          totalItems: this.productList.length
        };
   }

  ngOnInit() {
    this.getProduct();
    this.store.pipe(select(fromMainReducerState.getProduct)).subscribe(product => {
      this.cartList = Object.values(product);
    })
  }



  pageChanged(event){
    window.scroll(0,0);
    this.config.currentPage = event;
  }
  getProduct() {
    this.mainService.getProduct().subscribe(product => {
      console.log('product', product);
      this.productList = product.data.filter(item => {
        return item.type == 'Women'
      })
      this.middleProductList = JSON.parse(JSON.stringify(product.data.filter(item => {
        return item.type == 'Women'
      })));
      this.loader();
      console.log('productList', this.productList);
    });
  }
  loader() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
  };
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
  handleChange(e) {
    console.log('e', e);
    console.log('rangeValues', this.rangeValues);
    this.ApplyFilters();
  }
  ApplyFilters() {
    this.productList = this.middleProductList.filter(item => {
      return (item.price >= this.rangeValues[0] && item.price <= this.rangeValues[1])
    });
  }

}
