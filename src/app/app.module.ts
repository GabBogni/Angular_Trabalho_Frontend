import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductRegisterPageComponent } from './product-register-page/product-register-page.component';
import { ProductListingPageComponent } from './product-listing-page/product-listing-page.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductUpdatePageComponent } from './product-update-page/product-update-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductRegisterPageComponent,
    ProductListingPageComponent,
    HeaderComponent,
    ProductUpdatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
