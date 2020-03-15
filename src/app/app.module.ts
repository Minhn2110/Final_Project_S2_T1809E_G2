import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";



// JS Lib
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";

// Feature Module 
import { TableModule } from './table/table.module';
import { AdidasStoreModule } from './adidas-store/adidas-store.module';
import { AppReducer } from './app.reducer';
import { MainComponent } from './adidas-store/layout/main/main.component';
import { layout } from './adidas-store/layout';


@NgModule({
  declarations: [
    MainComponent,
    layout
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: "toast-bottom-right",
      preventDuplicates: false
    }),
    StoreModule.forRoot({AppReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    AdidasStoreModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule {}
