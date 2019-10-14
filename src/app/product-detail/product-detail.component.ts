import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import * as $ from 'jquery';
import * as MainActions from '../state/main.action';
import * as fromMainReducerState from '../state/main.selector';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productList = [];
  productID: any;
  productItem = [];
  cartList = [];

  constructor(
    private mainService: MainService,
    private store: Store<any>,
    private route: ActivatedRoute, 
    private router: Router,
    private toastr: ToastrService)
     {
     }

  ngOnInit() {
    this.productID = this.route.snapshot.paramMap.get('id');
    this.getProduct();
    this.store.pipe(select(fromMainReducerState.getProduct)).subscribe(product => {
      this.cartList = Object.values(product);
    })
  }
  getProduct() {
    this.mainService.getProduct().subscribe(product => {
      this.productList = product.data;
      this.loader();
      console.log('productList', this.productList);
      this.getProductDetail();
    });
  }
  getProductDetail() {
    this.productList.forEach(item => {
      if (item.id == this.productID) {
        this.productItem.push(item);
        console.log('productItem', this.productItem);
      }
    })
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
      console.log('case 1');
      this.store.dispatch(new MainActions.MainActionCreateProduct(item));
    }
    else {
      this.cartList.forEach(elm => {
        if (elm.id == item.id) {
          console.log('item after 2', item);
          this.store.dispatch(new MainActions.MainActionUpdateProduct(item.id, {quantity: elm.quantity + 1}));
        } else {
          this.store.dispatch(new MainActions.MainActionCreateProduct(item));
        }
    });
    }
    this.toastr.success('Add to cart success', 'Adidas');
  }
}
