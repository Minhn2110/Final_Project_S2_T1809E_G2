import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppRoutingModule } from './app-routing.module';

import { MainComponent } from './layout';

import { layout } from './layout';
import { HomeComponent } from './home/home.component';


// JS Lib
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { mainReducer } from './state/main.reducer';

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
    OwlModule,
    NgsRevealModule,
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
