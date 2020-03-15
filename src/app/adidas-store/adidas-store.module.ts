import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdidasStoreRoutingModule } from './adidas-store-routing.module';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { NgsRevealModule } from 'ngx-scrollreveal';
import {
    PasswordModule,
    InputTextModule,
    PanelModule,
    SliderModule,
    SharedModule
  } from "primeng/primeng";
  import { NgxPaginationModule } from "ngx-pagination";
  import { Ng2SearchPipeModule } from "ng2-search-filter";
  import { StoreModule } from '@ngrx/store';


// Component
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenComponent } from './men/men.component';
import { KidComponent } from './kid/kid.component';
import { WomenComponent } from './women/women.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutComponent } from './about/about.component';
import { adidasReducer } from './state/main.reducer';
import { MainComponent } from './layout';




@NgModule({
    declarations: [
        HomeComponent,
        ContactComponent,
        CartComponent,
        ProductComponent,
        MenComponent,
        KidComponent,
        WomenComponent,
        CheckoutComponent,
        InvoiceComponent,
        ProductDetailComponent,
        AboutComponent,
    ],
    imports: [ 
        CommonModule, 
        AdidasStoreRoutingModule, 
        ReactiveFormsModule,
        FormsModule,
        NgsRevealModule,
        PasswordModule,
        InputTextModule,
        PanelModule,
        SliderModule,
        SharedModule,
        NgxPaginationModule,
        Ng2SearchPipeModule,
        StoreModule.forFeature('adidas', adidasReducer)
    ],
    exports: [],
    providers: [],
    bootstrap: [MainComponent]
})
export class AdidasStoreModule {}