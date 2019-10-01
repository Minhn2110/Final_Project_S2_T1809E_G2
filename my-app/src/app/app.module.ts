import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { MainComponent } from './layout';

import { layout } from './layout';
import { HomeComponent } from './home/home.component';


// JS Lib
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';



@NgModule({
  declarations: [
    MainComponent,
    layout,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
