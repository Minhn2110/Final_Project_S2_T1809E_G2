import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { MenComponent } from './men/men.component';
import { KidComponent } from './kid/kid.component';
import { WomenComponent } from './women/women.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'cart', component: CartComponent },
    { path: 'product', component: ProductComponent },
    { path: 'men', component: MenComponent },
    { path: 'kid', component: KidComponent },
    { path: 'women', component: WomenComponent },
    { path: 'checkout', component: CheckoutComponent,},
    { path: 'invoice', component: InvoiceComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'about', component: AboutComponent},
];



@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdidasStoreRoutingModule {}





