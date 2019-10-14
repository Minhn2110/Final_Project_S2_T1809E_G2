import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule }    from '@angular/common/http';
// import { ValidationService } from './validation.service';



import { AppRoutingModule } from './app-routing.module';

import { MainComponent } from './layout';

import { layout } from './layout';
import { HomeComponent } from './home/home.component';


// JS Lib
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { reducers, metaReducers } from './reducers';
import { mainReducer } from './state/main.reducer';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    MainComponent,
    layout,
    HomeComponent,
    CartComponent,
    ProductComponent,
    CheckoutComponent,
    ProductDetailComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    OwlModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NgsRevealModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
    }),
    StoreModule.forRoot({mainReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule {
}
