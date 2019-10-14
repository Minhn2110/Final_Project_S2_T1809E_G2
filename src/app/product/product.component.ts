import { Component, OnInit } from '@angular/core';
import { MainService } from '../service/main.service';
import * as $ from 'jquery';
import * as MainActions from '../state/main.action';
import * as fromMainReducerState from '../state/main.selector';
import { Store, select } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  config: any;
  collection = { count: 60, data: [] };
  searchText: any;
  productList = [];

  cartList = [];
  constructor(
    private mainService: MainService,
    private store: Store<any>,
    private toastr: ToastrService
  ) {
        //Create dummy data
        // for (var i = 0; i < this.collection.count; i++) {
        //   this.collection.data.push(
        //     {
        //       id: i + 1,
        //       value: "items number " + (i + 1)
        //     }
        //   );
        // }
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
      this.productList = product.data;
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
          this.store.dispatch(new MainActions.MainActionUpdateProduct(item.id, {quantity: elm.quantity + 1, cartTotal: item.price * (1 + elm.quantity)}));
        } else {
          this.store.dispatch(new MainActions.MainActionCreateProduct(item));
          this.store.dispatch(new MainActions.MainActionUpdateCartTotalFirst(item.id, {cartTotal: item.price}));
        }
    });
    }
    this.toastr.success('Add to cart success', 'Adidas');
  }

}
