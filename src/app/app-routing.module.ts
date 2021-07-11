import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingPageComponent } from './product-listing-page/product-listing-page.component';
import { ProductRegisterPageComponent } from './product-register-page/product-register-page.component';
import { ProductUpdatePageComponent } from './product-update-page/product-update-page.component';

const routes: Routes = [
  {path: 'register', component: ProductRegisterPageComponent},
  {path: 'list', component: ProductListingPageComponent},
  {path: 'update/:id', component: ProductUpdatePageComponent},
  {path: '**', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
