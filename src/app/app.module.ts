import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';

import {AppRoutingModule} from './appRoutingModule';
import {ProductDetailService} from './services/product-detail.service';
import {ProductListService} from './services/product-list.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProductDetailService,
    ProductListService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
